---
title: Using Gdata with jQuery
author: Michael Mayer
type: post
date: 2008-05-06T06:12:32+00:00
url: /2008/05/using-gdata-with-jquery/
categories:
  - Google
  - 'JavaScript, HTML &amp; CSS'

---
[<img class="alignright size-full wp-image-782" title="Small blinking Google toy" src="http://www.nulldevice.de/wp-content/uploads/2008/05/blinking_google_toy_small.jpg" alt="" width="150" height="78" />][1]This morning, I had the unbearable desire to find out why I can&#8217;t call Google&#8217;s [AJAX Feed API][2] with [jQuery][3] 1.2.3 directly, but using a small proxy script. In theory, it&#8217;s just including a script tag which then loads the remote JavaScript and executes a callback function (thus, bypassing the same-origin policy of JavaScript, which would apply for a normal XMLHttpRequest):

> $.getScript(&#8216;http://adwordsapi.blogspot.com/atom.xml?alt=json-in-script&callback=someCallbackFunction&#8217;);

or

> $.get(&#8216;http://adwordsapi.blogspot.com/atom.xml?alt=json-in-script&#8217;, null, someCallbackFunction, &#8216;jsonp&#8217;);

What did work quite well was

> $.getScript(&#8216;http://www.liquidbytes.net/feed.php&#8217;);

feed.php is a small PHP script that outputs the example blog feed above. So it wasn&#8217;t a problem with the data format or the cross-domain requests.

What happens? jQuery&#8217;s ajax function has a config parameter called &#8216;cache&#8217;. If it&#8217;s set to false (or not set), then a timestamp parameter will be added automatically to all URLs:

> http://adwordsapi.blogspot.com/atom.xml?alt=json-in-script&callback=someCallbackFunction&_=1204907988789

[Google doesn&#8217;t like additional parameters][4] and just returns: <tt>Invalid query parameters:_</tt>

This can be easily fixed by setting <tt>$.ajaxSettings.cache = true</tt>

Still, I did not get any results. Of course I could call the feed URL in the browser, but it did not work with jQuery as expected. The end of the story was to disable the AdBlockPlus (ABP) plugin of Firefox. For one reason or another, probably all script calls to something with the string &#8220;adwords&#8221; in it will be blocked, it did not allow the URL to be included as script.

Others seem to have [similar problems][5].

You might also want to have a look at the [jQuery Google Feed Plugin][6]. Google itself uses [jQuery][7] on [Google Code][8].

 [1]: http://www.nulldevice.de/wp-content/uploads/2008/05/blinking_google_toy_small.jpg
 [2]: http://code.google.com/apis/ajaxfeeds/
 [3]: http://jquery.com/
 [4]: http://code.google.com/p/gdata-issues/issues/detail?id=390
 [5]: http://www.nabble.com/GData-JSON-queries-%22Invalid-query-parameters:_%22-td15901454s27240.html
 [6]: http://www.malsup.com/jquery/gfeed/
 [7]: http://code.google.com/js/codesite.pack.01312008.js
 [8]: http://code.google.com/