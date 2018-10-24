---
title: JavaScript Components
author: Michael Mayer
type: post
date: 2008-07-06T20:05:02+00:00
url: /2008/07/javascript-components/
categories:
  - 'JavaScript, HTML &amp; CSS'
  - Open Source
tags:
  - 'JavaScript &amp; Rich Client'
  - JavaScriptMVC
  - jQuery
  - Open Source

---
My blog was a calm place for a while now, because I&#8217;m terribly busy with writing code (like it should be&#8230;). With this posting, I want to present the prototype of JavaScript Components, which are comparable to [Swing Components][1] in Java. They make use of the [Composite Pattern][2]. That means every Component can act as a container for other Components. Together with Models, Views and a Controller (Event Dispatcher), they can form reusable widgets. Other projects did work on similar things (for example [jMaki Widgets][3]), but from what I see, they target different audiences. The suggested Components use a client-side only approach. They are tested with [JavaScriptMVC,][4] but may be useful for other frameworks as well. [jQuery][5] is required for DOM operations.

There already is a LayersComponent, which implements a content stack. Any component can be added as a new layer and only the respective top layer is visible.

Please check out the [demo application][6] ([download as ZIP][7]).

 [1]: http://java.sun.com/docs/books/tutorial/ui/features/components.html
 [2]: http://en.wikipedia.org/wiki/Composite_pattern
 [3]: https://ajax.dev.java.net/page-developer.html
 [4]: http://javascriptmvc.com/
 [5]: http://jquery.com/
 [6]: /downloads/jmvc/index.html
 [7]: /downloads/jmvc.zip