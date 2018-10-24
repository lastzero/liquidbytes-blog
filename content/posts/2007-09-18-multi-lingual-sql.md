---
title: Optimizing SQL – Part 1
author: Michael Mayer
type: post
date: 2007-09-18T15:37:42+00:00
excerpt: |
  |
    +++ Design approaches for multi-lingual data
    
    In this example, we're assuming a dataset consisting of 6 multi-lingual fields. Each field holds strings with an average length of 200 characters in the 4 locales en, de, zh and ru. A fallback function is implemented using the CASE expression (doesn't add much overhead and is faster than fetching data in two locales and implementing the fallback at application level).
url: /2007/09/multi-lingual-sql/
categories:
  - 'Databases &amp; XML'
tags:
  - SQL

---
### Design approaches for multi-lingual data

In this example, we&#8217;re assuming a dataset consisting of 6 multi-lingual fields. Each field holds strings with an average length of 200 characters in the 4 locales en, de, zh and ru. A fallback function is implemented using the CASE expression (doesn&#8217;t add much overhead and is faster than fetching data in two locales and implementing the fallback at application level).

This is how your queries will look like, if you use the &#8220;dictionary approach&#8221; (master data in <tt>dict_books</tt> and locale specific strings in the general table <tt>dict_dictionary</tt>, which is shared between all master tables):

<tt>SELECT book_id, CASE WHEN loc0.dict_value IS NOT NULL THEN loc0.dict_value ELSE org0.dict_value END AS trans_author_id, CASE WHEN loc1.dict_value IS NOT NULL THEN loc1.dict_value ELSE org1.dict_value END AS trans_title_id, CASE WHEN loc2.dict_value IS NOT NULL THEN loc2.dict_value ELSE org2.dict_value END AS trans_subtitle_id, CASE WHEN loc3.dict_value IS NOT NULL THEN loc3.dict_value ELSE org3.dict_value END AS trans_abstract_id, CASE WHEN loc4.dict_value IS NOT NULL THEN loc4.dict_value ELSE org4.dict_value END AS trans_copyright_id, CASE WHEN loc5.dict_value IS NOT NULL THEN loc5.dict_value ELSE org5.dict_value END AS trans_body_id FROM dict_books a JOIN dict_dictionary org0 ON a.author_id = org0.dict_id AND org0.dict_locale = 'en' LEFT JOIN dict_dictionary loc0 ON a.author_id = loc0.dict_id AND loc0.dict_locale = 'ru' JOIN dict_dictionary org1 ON a.title_id = org1.dict_id AND org1.dict_locale = 'en' LEFT JOIN dict_dictionary loc1 ON a.title_id = loc1.dict_id AND loc1.dict_locale = 'ru' JOIN dict_dictionary org2 ON a.subtitle_id = org2.dict_id AND org2.dict_locale = 'en' LEFT JOIN dict_dictionary loc2 ON a.subtitle_id = loc2.dict_id AND loc2.dict_locale = 'ru' JOIN dict_dictionary org3 ON a.abstract_id = org3.dict_id AND org3.dict_locale = 'en' LEFT JOIN dict_dictionary loc3 ON a.abstract_id = loc3.dict_id AND loc3.dict_locale = 'ru' JOIN dict_dictionary org4 ON a.copyright_id = org4.dict_id AND org4.dict_locale = 'en' LEFT JOIN dict_dictionary loc4 ON a.copyright_id = loc4.dict_id AND loc4.dict_locale = 'ru' JOIN dict_dictionary org5 ON a.body_id = org5.dict_id AND org5.dict_locale = 'en' LEFT JOIN dict_dictionary loc5 ON a.body_id = loc5.dict_id AND loc5.dict_locale = 'ru'</tt>

First, I would like to mention that inserting data in those tables is a mess, because you&#8217;ll need 25 INSERTs for each dataset (compared to 5 for the relational design below).

The query for the &#8220;true relational design&#8221; with one table (<tt>books</tt>) for the master data and one for the locale specific strings (<tt>books_locale</tt>) looks like:

<tt>SELECT a.book_id, CASE WHEN c.author IS NOT NULL THEN c.author ELSE b.author END AS author, CASE WHEN c.title IS NOT NULL THEN c.title ELSE b.title END AS title, CASE WHEN c.subtitle IS NOT NULL THEN c.subtitle ELSE b.subtitle END AS subtitle, CASE WHEN c.abstract IS NOT NULL THEN c.abstract ELSE b.abstract END AS abstract, CASE WHEN c.copyright IS NOT NULL THEN c.copyright ELSE b.copyright END AS copyright, CASE WHEN c.body IS NOT NULL THEN c.body ELSE b.body END AS body FROM books a JOIN books_locale b ON a.book_id = b.book_id AND b.locale = 'en' LEFT JOIN books_locale c ON a.book_id = c.book_id AND c.locale = 'ru';</tt>

Now, wonder what&#8217;s the difference in execution time? The first query takes 0.30s and the second just 0.06s (1000 rows). If do the query with 10,000 books instead, the execution time is **3.07s** against **0.56s**. Conclusion: The relational design is about 5.5 times faster than the dictionary type of design.

There&#8217;s a third option, which is using a single table with a primary key consisting of book\_id and book\_locale. The query would look like

<tt>SELECT b.book_id, CASE WHEN c.author IS NOT NULL THEN c.author ELSE b.author END AS author, CASE WHEN c.title IS NOT NULL THEN c.title ELSE b.title END AS title, CASE WHEN c.subtitle IS NOT NULL THEN c.subtitle ELSE b.subtitle END AS subtitle, CASE WHEN c.abstract IS NOT NULL THEN c.abstract ELSE b.abstract END AS abstract, CASE WHEN c.copyright IS NOT NULL THEN c.copyright ELSE b.copyright END AS copyright, CASE WHEN c.body IS NOT NULL THEN c.body ELSE b.body END AS body FROM books b LEFT JOIN books c ON b.book_id = c.book_id AND c.book_locale = 'ru' WHERE b.book_locale = 'en'</tt>

And the execution time for 10.000 entries is&#8230; just **0.38s**! (0.05s for 1.000) That is below the relational design and makes me a bit angry, but anyways,&#8230; Inserting data is also faster, though not that safe because you can get in trouble with foreign keys. I think it&#8217;s time for database vendors to integrate multi-lingual features in their products. Like they did with XML and [GIS][1] before.

### Why use subselects? {#toc1}

Compare those two queries:

<tt>SELECT a.article_id, article_name, b.effective_from_date, b.price FROM articles a JOIN price_history b WHERE a.article_id = b.article_id AND b.effective_from_date = (SELECT max(effective_from_date) FROM price_history c WHERE a.article_id = c.article_id AND c.effective_from_date <= NOW()) ORDER BY a.article_id;</tt>

<tt>SELECT a.article_id, article_name, b.effective_from_date, b.price FROM articles a JOIN price_history b ON a.article_id = b.article_id AND b.effective_from_date <= NOW() LEFT JOIN price_history c ON b.article_id = c.article_id AND b.effective_from_date < c.effective_from_date AND c.effective_from_date <= NOW() WHERE c.effective_from_date IS NULL ORDER BY a.article_id;</tt>

Which one is faster? They both do the same, which is returning a list of products with their current price, according to a price history table (note that there might be future prices stored as well).

The first query takes about **0.27s** and the second **6.26s** (1000 articles with 100 prices in the history table each) &#8211; this is why subselects are often not that bad!

 [1]: http://en.wikipedia.org/wiki/GIS