---
title: Ajax and Rich Internet Application FAQ
author: Michael Mayer
type: post
date: 2008-10-29T11:58:57+00:00
url: /2008/10/ajax-and-rich-internet-application-faq/
categories:
  - 'JavaScript, HTML &amp; CSS'
tags:
  - AJAX
  - HTML
  - 'JavaScript &amp; Rich Client'
  - JavaScriptMVC
  - JSON
  - XSLT

---
**Shall I use JSON or XML as AJAX transport format?**

There actually is no reason to use XML instead of JSON, if you don&#8217;t plan to use XSLT. JSON is part of JavaScript which has been around since the dark ages of the web. Also, there are very fast server-side JSON implementations and JSON is the more compact protocol, thus saving bandwidth.

**Isn&#8217;t XSLT much faster than to use JSON and modify the DOM with JavaScript?**

First, it is highly unlikely that there are more browsers that understand XSLT than {a: &#8216;b&#8217;}. In fact, with JSON you are on the safe side. For a client-side templating engine like [EJS][1], the performance is not an issue.

Processed EJS templates simply add strings together.  They do not use eval() or have a processing step which is probably why typical templates run slow.

Also, XSLT is loaded from another file while EJS can be packaged with the JavaScript payload.  This necessitates an extra request by the client.

**Is it better to render the HTML on the client or an the server side?**

There is a general decision, you need to be aware of: Are you building a Rich Internet Application or do you want to beautify some HTML output with additional (JavaScript-)effects? Is the site required to be usable without JS? If you can rely on JS and if it&#8217;s a RIA, then I would suggest using a client-side MVC framework like [JavaScriptMVC][2], which comes with client side controllers, template engine and model classes. Your server will mainly provide JSON-API functions and the basic page grid then, and not deliver complete HTML pages. Lots of logic (and therefore code) will move to the browser/JavaScript: In effect, you will need more JavaScript developers and less server-side developers for your projects. On the other hand, you will see a gain in consistency and also performance, as you have way less client/server communication, once the JS code is loaded (which can be pretty fast, thanks to compression). Many popular Web applications are using this approach.

**Which JavaScript library shall I use (Dojo, jQuery,&#8230;)?**

The choice of JavaScript DOM/Ajax library is IMO not so important, as long as it doesn&#8217;t leak memory, has a small code size and offers fast DOM queries. See

<http://www.domassistant.com/slickspeed/>{.moz-txt-link-freetext}

The real problem you will have, is that normal event binding causes problems because of memory leaks (circular references which can&#8217;t be handled by the garbage collection of most browsers) and also because you need to loop through all elements and refresh everything after doing changes to the DOM (for example after AJAX requests that modify the HTML). So, at the end of the day, you will want to use event delegation, which comes for free with the controllers of JavaScriptMVC.

**I know there is JavaScript &#8220;integration&#8221; in my favorite Java/PHP/Python/Perl development framework. Am I ready for building a Rich Internet Application now?**

Server-side generated JS, like what you will get when using any framework that offers JavaScript support (I&#8217;m not talking about JSON/REST here), can be a pain, because almost certainly, you will have a very limited feature set and maybe also problems with deployment and testing, because the common server-side frameworks can&#8217;t really test JavaScript code nor is there a smart way to optimize generated code or structure it. Most of the approaches I&#8217;ve seen just generate some inline JavaScript which is good for enhancing forms a bit with new input elements/validators or offer some nice visual effects &#8211; but that&#8217;s it. If something like this needs to be customized a lot and grows big, you might be in trouble. Again, the question is &#8220;JavaScript enhanced Web site&#8221; or &#8220;Rich Internet Application&#8221;? To generate JavaScript with a server-side language/framework  has it&#8217;s limits and is very often not consistent, if you use hand-written JavaScript code at the same time.

**What features should a JavaScript framework for Rich Internet Applications offer?**

I would argue that a good JavaScript framework allows an average developer to produce effective and structured code. jQuery and the like however are just browser abstraction layers (like Zend_Db is an abstraction layer for databases). Raw jQuery will almost certainly produce the same mess as raw PHP or any other server-side language that does not imply a clean application structure (MVC). You end up with reinventing the wheel and you will have different code to do similar things. Or it will just be plain slow, because without dispatching events (event delegation) you end up with looping over elements to attach events and effects, which simply gets slow for many elements. Also you will have no overview and especially inline JavaScript can&#8217;t be compressed, which means you will transfer the same source code with every request. That said, I vote for separating server-side code, JavaScript and HTML and have clearly defined interfaces. A sound architecture is a great help for all developers, as soon as there are more lines of code than fit on a screen. You don&#8217;t want to start guessing, if the code you look for is hidden in a JavaScript file, in a template, in a view helper or some other file.

**Which browsers are commonly supported for Rich Internet Applications?**

Compatibility is not a big issue anymore, if you are fine with supporting IE 6+, Safari 3+ (incl. iPhone), Firefox 2+ and Opera 9.5+. IE < 6 is very hard to support (I would simply refuse to do so). IE 6 is slow with JavaScript, but the real pain is it&#8217;s lack of good CSS support.

**I want to use W3C standards only (W3C DOM, XML and semantic XHTML) for my Rich Internet Application. JSON, innerHTML and DIV elements are evil, right?**

No. If you have a closer look, then you will notice that semantic HTML (for example, using the table element to render a table instead of DIVs) or not using innerHTML sometimes offers very bad performance for DOM manipulations, thus render the complete application useless. innerHTML very often delivers the best performance for inserting content to the DOM. So, don&#8217;t decide on certain implementation details upfront, especially if you plan to support IE6, which simply is an old browser and needs some special treatment. JavaScript forces you to be very pragmatic sometimes.

See <http://www.quirksmode.org/dom/innerhtml.html>

JSON is a standard because it is implied by EMCAScript. See JSON vs. XML.

**Using parallel requests to get data from the server seems to be a good idea to speed up performance. Is there any downside?**

Depends. A major issue with modern Web applications is that the initial loading causes many parallel requests, as you just deliver the page grid and the JavaScript client side code then renders all the other elements from client-side templates and loads the corresponding data (if needed) using the mentioned JSON-APIs. A constant overhead is produced when using comet. Parallel requests frequently cause problems, as some server-side session handler implementations lock the session (other requests have to wait then, until the session is accessible again). Also the many requests might require lots of memory and server processes.

_I want to thank [Justin Meyer][3] (maintainer of JavaScriptMVC) for all the interesting discussions and his input on the JSON vs. XSLT debate._

 [1]: http://javascriptmvc.com/learningcenter/view/learn.html
 [2]: http://www.javascriptmvc.com/
 [3]: http://javascriptmvc.com/blog/