---
title: Switched from Drupal 5 to WordPress 2.5
author: Michael Mayer
type: post
date: 2008-04-30T11:37:27+00:00
url: /2008/04/switched-from-drupal-5-to-wordpress-2/
categories:
  - 'Databases &amp; XML'
  - WordPress
tags:
  - SQL

---
[<img class="alignright size-full wp-image-764" title="WordPress Logo" src="http://www.nulldevice.de/wp-content/uploads/2008/04/wp-20-button.gif" alt="" width="212" height="68" />][1]After having trouble with the Drupal upgrade I decided to give WordPress a try. The funny thing is to copy the existing posts to the new tables. If you got the same problem, you can use this view:

> CREATE VIEW wp\_import AS SELECT a.nid AS ID, 1 AS post\_author, FROM\_UNIXTIME(a.created) AS post\_date, FROM\_UNIXTIME(a.created) AS post\_date\_gmt, b.body AS post\_content, b.title AS post\_title, 0 AS post\_category, b.teaser AS post\_except, &#8216;publish&#8217; AS post\_status, &#8216;open&#8217; AS comment\_status, &#8216;open&#8217; AS ping\_status, &#8221; AS post\_password, &#8216;post&#8217; + a.nid AS post\_name, &#8221; AS to\_ping, &#8221; AS pinged, FROM\_UNIXTIME(a.changed) AS post\_modified, FROM\_UNIXTIME(a.changed) AS post\_modified\_gmt, &#8221; AS post\_content\_filtered, 0 AS post\_parent, a.nid AS guid, 0 AS menu\_order, &#8216;post&#8217; AS post\_type, &#8221; AS post\_mime\_type, 0 AS comment\_count FROM node a JOIN node_revisions b ON a.nid = b.nid WHERE a.type = &#8216;blog&#8217; AND a.nid > 1 AND a.status = 1;

Then you can easily import all your stuff (without the images, sorry):

> INSERT wordpress.wp\_posts SELECT * FROM wp\_import;

Wanna convert your custom markup to HTML? No problem, just run this query (works for cached content only, so you might want to click on each of your older posts once as a quick fix):

> UPDATE wordpress.wp\_posts w, (SELECT a.nid, b.data AS filtered FROM node\_revisions a, cache\_filter b WHERE CONCAT\_WS(&#8216;:&#8217;, a.format, MD5(a.body)) = b.cid) AS c SET post_content = c.filtered WHERE c.filtered IS NOT NULL AND w.ID = c.nid;

There might be a way to import a Drupal blog via RSS as well &#8211; let&#8217;s see if somebody answers to my <a href="http://wordpress.org/support/topic/173244" target="_blank">posting</a> on the WordPress support forum.

### Update (6.5.2008)

I found another blog post that explains [how to migrate from Drupal 5 to WordPress 2.0][2]. The provided SQL script also converts categories and comments, which mine does not. However, it does not care about input filters, so Wikicode will not be converted to HTML. The perfect solution would be a combination of our scripts ;)

 [1]: http://www.nulldevice.de/wp-content/uploads/2008/04/wp-20-button.gif
 [2]: http://www.darcynorman.net/2007/05/15/how-to-migrate-from-drupal-5-to-wordpress-2/