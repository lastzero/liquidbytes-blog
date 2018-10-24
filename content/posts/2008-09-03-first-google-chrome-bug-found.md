---
title: First Google Chrome bug found
author: Michael Mayer
type: post
date: 2008-09-02T23:30:19+00:00
url: /2008/09/first-google-chrome-bug-found/
categories:
  - Google
  - 'JavaScript, HTML &amp; CSS'
tags:
  - Bug
  - Chrome
  - Google
  - 'JavaScript &amp; Rich Client'

---
I just found my first bug in Chrome: If you iterate over object properties (using jQuery&#8217;s $.each()) and insert HTML generated inside that loop into the DOM, then that HTML appears in random order. Very funny. Might be a problem with threads or Chrome changes the order of object properties by itself:

<http://code.google.com/p/chromium/issues/detail?id=223>