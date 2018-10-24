---
title: Google’s Sean Quinlan about GMail and GFS
author: Michael Mayer
type: post
date: 2011-11-18T16:57:24+00:00
url: /2011/11/googles-sean-quinlan-about-gmail-and-gfs/
categories:
  - Google
  - IEEE
tags:
  - Filesystem
  - GFS
  - Google
  - IEEE
  - RIA

---
I recently read an [interview][1] with Google&#8217;s Sean Quinlan about GFS and the problems they faced with interactive Web applications like GMail, which require a certain maximum latency time. The original Google File System design was focused on batch efficiency, not latency. Although the interview is quite long, there are two remarkable paragraphs I would like to quote:

> There&#8217;s no question that GFS faces many challenges now. For one thing, the awkwardness of supporting an ever-growing fleet of user-facing, latency sensitive applications on top of a system initially designed for batch-system throughput is something that&#8217;s obvious to all. [&#8230;]
> 
> The guys who build Gmail went to a multihomed  model, so if one instance of your Gmail account got stuck, you would basically just get moved to another data center. Acutually, that capability was needed anyways just to ensure availability. Still, part of the motivation was that they wanted to hide the GFS problems.

 [1]: http://queue.acm.org/detail.cfm?id=1594206