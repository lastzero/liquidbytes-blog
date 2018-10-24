---
title: Update on object property reordering in Google Chrome
author: Michael Mayer
type: post
date: 2008-10-29T12:26:24+00:00
url: /2008/10/update-on-object-property-reordering-in-google-chrome/
categories:
  - Google
  - 'JavaScript, HTML &amp; CSS'
tags:
  - Bug
  - Chrome
  - Google
  - 'JavaScript &amp; Rich Client'

---
Iterating over an objects properties can result in a seemingly random order, it&#8217;s always the same order in Chrome, but in a different order for other browsers. I posted this as bug [#223][1] a couple of weeks ago. [John Resig][2] posted the same issue as ticket [#883][3] a day later. It was confirmed in the meantime by the chromium developers and described as an expected behavior. Very funny.

 [1]: http://code.google.com/p/chromium/issues/detail?id=223
 [2]: http://ejohn.org/
 [3]: http://code.google.com/p/chromium/issues/detail?id=883