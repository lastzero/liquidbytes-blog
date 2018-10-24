---
title: Yes, there is a memory leak…
author: Michael Mayer
type: post
date: 2008-05-25T04:49:10+00:00
url: /2008/05/yes-there-is-a-memory-leak/
categories:
  - 'JavaScript, HTML &amp; CSS'
  - Software Engineering
tags:
  - Firefox
  - 'JavaScript &amp; Rich Client'

---
If somebody ever said, there is no memory leak in Firefox, here&#8217;s the proof:

<span style="color: #551a8b;"><img src="http://farm3.static.flickr.com/2234/2519624567_8fb99fa8a9_o.png" alt="Firefox memory leak" width="372" height="80" /></span>

It can&#8217;t be, that a browser with 4 open tabs requires about 600 MB of memory. That&#8217;s 150 MB per Web site, which seems a bit too much ;)

Safari, by the way, requires 128 MB for 5 open tabs.

> If you find that Firefox&#8217;s memory usage continues to grow after long periods of being open, you may want to consider periodically restarting Firefox to bring the memory usage back to reasonable levels.
> 
> <http://kb.mozillazine.org/Memory_Leak>