---
title: JavaScriptMVC 1.5 released
author: Michael Mayer
type: post
date: 2009-02-19T10:34:23+00:00
url: /2009/02/javascriptmvc-15-released/
categories:
  - 'JavaScript, HTML &amp; CSS'
  - Open Source
tags:
  - AJAX
  - 'JavaScript &amp; Rich Client'
  - JavaScriptMVC

---
A new stable release of the [JavaScriptMVC framework][1] was released yesterday :) Justin Meyer developed it, while working with us on a new Web application. Some features like the new custom events are direct results of this project. He did an excellent job!

New features include:

  * **Env.js/Shrinksafe based compression:** A custom env to simulate the browser. As the browser encounters script tags, it adds them to a collection and then compresses them. This means instant file concat and compression from the command line with no extra work.
  * **Env.js Testing:** Prior to 1.5, tests ran in the browser only. With Env, the same tests can be run from the command line. Great for projects where you need a quick way of checking if functionality works before check-in.
  * **Documentation:**New JavaScript based documentation library split between JSDoc and NaturalDocs.
  * **Code Generators:** Added code generators and made building custom ones easy too by using EJS.
  * **Scaffolding:** Helps you develop iteratively by connecting to default Rest services and providing an easily expandable CRUD interface.
  * **Engines+Plugins:** Added a command line plugin and dependency installer. So, if a developer wanted a jQuery plugin, he can install it from the command line, and it will also grab jQuery.
  * **Custom Event Delegation:** Besides improving event delegation to cover all the cases that even live doesn’t do, they’ve expanded it to include custom events such as drag+drop, lasso, hoverenter, mousenter. Developers can have the benefits of event delegation with these complex events.
  * **Easy Update:** JavaScriptMVC can update itself from the command line.

 [1]: http://javascriptmvc.com/blog/?p=124