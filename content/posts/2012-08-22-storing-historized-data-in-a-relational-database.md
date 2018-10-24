---
title: Storing historized data in a relational database
author: Michael Mayer
type: post
date: 2012-08-22T10:09:39+00:00
url: /2012/08/storing-historized-data-in-a-relational-database/
cover_image: /wp-content/uploads/2012/08/Historization.png
categories:
  - 'Databases &amp; XML'
  - 'Performance &amp; Security'
tags:
  - SQL

---
There are quite a few concepts that deal with storing historized data in a relational database; that means creating an archive copy or journal when data is updated or deleted.

Spontaneously, these options come into my mind:

  * **Using the built-in functionality **(for example, in the latest Oracle database). 
      * Using black-box technology is dangerous, if you don&#8217;t understand it. It might also be hard to customize for your own needs.
      * It only works with selected and sometimes expensive DBMS.
      * If you invest the time to understand it, you can probably build something equally useful yourself (see last option below).
  * **Storing archive copies in the file system** (as XML or JSON) **or a non-relational database**. 
      * You can&#8217;t access the data from your relational database, thus making it complicated and slow to compare old and new data.
      * Schema changes don&#8217;t affect the old data, making it even harder to compare.
      * You must trust your application to always create archive copies (not automatically triggered by the DBMS) and for the same reason you should not directly modify your database (using some GUI or CLI tool).
      * Practically impossible to use, if there are multiple client applications (for example one implemented in Java and another in PHP).
      * Hard to back-up.
  * **Storing archive copies** as JSON or XML **in an archive table**. 
      * Slightly better than the last option, because database dumps will at least contain your archive.
      * It suffers from the same deficiencies otherwise.
  * **Storing the archive data in the same table as the current data using a compound primary key **(entity ID and version ID). 
      * You waste the power of compound primary keys (for example, for index organized tables) because you are forced to always include the version ID as the second key.
      * The approach will result in very large tables of which only a fraction of the rows represent current data.
      * Joins are more complicated and it&#8217;s easy to make mistakes, if you forget to filter out archive data.
      * Archive data usually doesn&#8217;t need as much indexing as production data, but storing the data in the same table applies the index to archive data as well. Your indexes will grow large and will contain a lot of similar data from the archive, thus additionally slowing down performance.
      * While it might be possible to let the DBMS automatically create archive rows using ON UPDATE and ON DELETE triggers, it&#8217;s probably complicated (I&#8217;ve never seen that anywhere). Otherwise you are forced to implement the archive operation in your application code, thus slowing down performance once more, making it impossible to directly modify the database or to use more than one client application (unless you invest a lot of time and money to keep them in sync).
  * **Using a dedicated archive table for each production table **and create a copy of the production data before each update/delete (easy to implement with ON UPDATE and ON DELETE triggers). The archive table has the same structure as the production table plus a column for the archive id (auto-increment).
<img class="size-full wp-image-1498 alignright" title="Historization" src="http://www.nulldevice.de/wp-content/uploads/2012/08/Historization-1.png" alt="" width="566" height="193" srcset="https://blog.liquidbytes.net/wp-content/uploads/2012/08/Historization-1.png 566w, https://blog.liquidbytes.net/wp-content/uploads/2012/08/Historization-1-500x170.png 500w" sizes="(max-width: 566px) 100vw, 566px" /> 
      * This option enables you to completely implement historization in your DBMS using triggers. You can enable/disable historization for single tables at any time without modifying your client applications.
      * You can use as many client applications as you like or even manually modify rows without losing the archive functionality.
      * You can use different indexes for archive and production data, depending on the actual needs of your applications.
      * If the schema changes, you can also update your archive table using standard SQL statements (the same that work for the production table). This is a minor drawback, because you must not forget to do so. It&#8217;s still better than having a huge archive of data that can not be easily compared.
      * The read performance of your production tables is not reduced. Updates and deletes might take a bit longer, but still much faster than &#8220;manually&#8221; creating archive copies. It should be comparable to the performance of the built-in historization feature of your favorite database.

&nbsp;