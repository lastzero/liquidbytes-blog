---
title: WordPress 2.5.1 bugs
author: Michael Mayer
type: post
date: 2008-04-30T21:10:38+00:00
draft: true
private: true
url: /2008/04/wordpress-251-bugs/
categories:
  - PHP
  - WordPress

---
[<img class="alignright size-full wp-image-778" title="bug" src="http://www.nulldevice.de/wp-content/uploads/2008/04/bug.jpg" alt="" width="150" height="150" />][1]

  * First of all, the classic theme mixes up the &#8220;Newer Posts&#8221; and &#8220;Older Posts&#8221; in the page footer. The link to the next page should be &#8220;Older Posts&#8221; of course, because the latest posts are on the first page.
  * For one reason or another, there are two versions of the search widget: One built-in that comes with the theme and one is &#8220;dynamic&#8221; and comes from wp-includes/widgets.php. The first one has a title &#8220;Search:&#8221;, the last one doesn&#8217;t have a title nor can you enter one. To fix this, I added <label for=&#8221;s&#8221;><?php _e(&#8216;Search&#8217;); ?></label> to line 462 in widgets.php.

[WordPress forum&#8230;][2]

 [1]: http://www.nulldevice.de/wp-content/uploads/2008/04/bug.jpg
 [2]: http://wordpress.org/support/topic/173241