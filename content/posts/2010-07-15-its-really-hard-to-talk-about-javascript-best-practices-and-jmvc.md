---
title: It’s really hard to talk about JavaScript best practices and JMVC
author: Michael Mayer
type: post
date: 2010-07-15T09:36:32+00:00
url: /2010/07/its-really-hard-to-talk-about-javascript-best-practices-and-jmvc/
categories:
  - 'Best Practices &amp; Quality'
  - 'JavaScript, HTML &amp; CSS'
tags:
  - Best Practices
  - 'JavaScript &amp; Rich Client'
  - JavaScriptMVC
  - OpenAjax
  - PHP

---
I was totally enthusiastic, when I first learned about JavaScriptMVC &#8211; because it brings all the best practices you are accustomed to into the JavaScript world. That means the MVC architecture, Object-oriented development with simulated inheritance, EJS templates, easy testing, OpenAjax support, powerful event delegation and so on.

However, I often have a hard time to convince other developers about those advantages. I guess **testing** is the easiest one, because no developer would dare to argue against testing, even though many developers don&#8217;t do it or don&#8217;t do it right. Questions and discussions about testing seem to be very rare. Developers just discuss it with their non-technical managers, if they want to get around that &#8220;effort&#8221;.

But it already starts with **OpenAjax**. I rarely find a developer that knows what it is and what it is good for and why you might need an event hub in JS at all. Zend, W3C, IBM and Google are some of the more well-known members of the OpenAjax Alliance. If you hear about it the first time now, take the time to have a look.

Just yesterday I was talking to an obviously experienced JS dev (who was working for a well known mobile phone company), that was browsing through the JavaScriptMVC documentation and stopped in the chapter about **EJS templates**: &#8220;Yeah, I saw something similar in our own project and removed it. It is confusing, if the JS code and the HTML are in separate files, because you don&#8217;t see the code together in one file. HTML should only be edited by developers who know the JS code very well&#8221;. Not sure what to say about that. Why not give up separation of concerns at all and put everything in one big file? Then you see the big picture on your hopefully big screen. Also you always need to check the full version control system diff after each change because the file name alone doesn&#8217;t tell you what was changed and you probably have more of those exciting conflicts to resolve. And: You REALLY need to be an expert to understand what is going on. The company can never fire you, because no one else would ever understand that kind of code. Sorry for being sarcastic, but that kind of attitude can seriously damage the health of innocent other people who need to clean up the mess in 20h work days afterwards, to meet the deadline of the project. Or the project is so small that it doesn&#8217;t matter. Or the company you work for can afford to pay a lot of developers who have the time to maintain a JS app without templates.

Convincing people about the usefulness of **controllers** is not easy too. Either you start showing an OpenAjax subscribe action &#8211; then the developer most likely won&#8217;t understand what that is good for (see above). Or you talk about **event delegation**, then the developer will point to jQuery&#8217;s live() method, which does event delegation too. In fact, JavaScriptMVC&#8217;s event delegation used to be one of the strong points and I admit that I am not totally up to date with the whole [discussion][1] right now, because I was busy with a PHP project during the last 6 months. I know Justin Meyer is/was working on the controller code so that it makes more use of jQuery, he contributes code to jQuery and he is in contact with John Resig. Anyways, the whole point about controllers again is [separation of concerns][2] and not so much the technical details behind the scenes. The JavaScript world is moving very fast and implementation details change a lot, but separation of concerns is not really something that you can look at as something you probably don&#8217;t need. The JS world sometimes feels like the PHP world about 10 years ago.

Ok, after getting rid of those thoughts, I will return to work now. The next 2 weeks will be quite relaxed with very little work. So maybe, I can read through the new JavaScriptMVC code and update my knowledge. It really feels uncomfortable not the be able to answer questions in detail. Also I start confusing PHP and JS syntax \*lol\*

See also: <http://jupiterjs.com/news/talkin-javascriptmvc-is-hard>

 [1]: http://groups.google.com/group/jquery-dev/browse_thread/thread/e3bb36f8a9dae2b5/7e3bc980cd327a74
 [2]: http://en.wikipedia.org/wiki/Separation_of_concerns