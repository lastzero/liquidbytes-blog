---
title: Flickr RSS plugin for jQuery
author: Michael Mayer
type: post
date: 2008-05-06T21:45:42+00:00
url: /2008/05/flickr-rss-feed-plugin-for-jquery-and-wordpress/
categories:
  - 'JavaScript, HTML &amp; CSS'
  - Open Source

---
<img src="http://www.nulldevice.de/wp-content/uploads/2008/05/flickr_logo_gammav3531414.gif" alt="" title="Flickr Logo" width="98" height="26" class="alignright size-full wp-image-785" />After searching for a suitable Flickr WordPress plugin for ages, I developed my own in less than 40 lines of JavaScript code. **It&#8217;s free!** You may [download][1] and use it for your own blog. I recommend to save it as /wp-content/plugins/flickr/flickr.js, if you are using WordPress. As the plugin does not depend on WordPress, you can use it with any other CMS like Drupal too. Even with plain HTML, if you like. Your HTML page header (normally part of your theme in wp-content/themes/[theme name]/header.php) should include these two lines, so that the required scripts (jQuery and the plugin) get loaded:

<pre>&lt;script type="text/javascript" src="/wp-includes/js/jquery/jquery.js?ver=1.2.3"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="/wp-content/plugins/flickr/flickr.js"&gt;&lt;/script&gt;</pre>

Currently, it just looks for HTML elements with the class <tt>flickrFeed</tt>, which can be added to blog posts, templates and widgets. You can have multiple containers, but only one feed URL per page. It would be more flexible, if it could be used like a normal jQuery plugin: <tt>$('.flickrFeed').flickrRSS(maxItems, url)</tt>. The current version just loads the feed instantly when the page is ready. Maybe too much magic, but ok as a quick result at this time of the day. Please write comments, if you want an improved version.

By the way: Flickr doesn&#8217;t seem to care about unexpected additional parameters (see last posting about [Google’s AJAX Feed API][2]). It all works just fine.

<div class="flickrFeed" maxItems="4" href="http://api.flickr.com/services/feeds/photos_public.gne?id=12602671@N04&#038;lang=en-us&#038;format=json">
</div>

 [1]: http://www.nulldevice.de/wp-content/plugins/flickr/flickr.js
 [2]: http://www.nulldevice.de/2008/05/using-gdata-with-jquery/