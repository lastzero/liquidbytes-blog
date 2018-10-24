---
title: How to use the StealJS file loader as a stand-alone tool
author: Michael Mayer
type: post
date: 2012-10-02T16:02:41+00:00
url: /2012/10/how-to-use-the-stealjs-file-loader-as-a-stand-alone-tool/
categories:
  - 'JavaScript, HTML &amp; CSS'
tags:
  - 'JavaScript &amp; Rich Client'
  - JavaScriptMVC
  - jQuery

---
Did you know that [JavaScriptMVC][1] comes with a very powerful file loader / dependency management system? It can be used independently of the MVC framework and is (in my opinion) much better than anything else I&#8217;ve seen (including RequireJS). It is not marketed as a stand-alone tool, which probably is the reason people don&#8217;t really notice/use it outside the JavaScriptMVC community so far.

#### Why should you use it?

  * StealJS can not only load JavaScript files, but also CSS, [CoffeeScript][2] and [Less][3]!
  * StealJS can also compress all of of the supported file formats for deployment.
  * StealJS has a plug-in architecture and can be extended (for additional file formats or compression tools).
  * StealJS is already being used for some of the largest Web applications and is very mature.
  * Using a JavaScript-only tool like StealJS is much faster than server-side tools like [Assetic][4], because the server doesn&#8217;t have to start a new PHP/Python/Ruby process for each file to be loaded.
  * JavaScript developers can work independently of the server-side team (no need to learn another language, just to include files) and you can always use the same file loader independently of your server-side framework.

<div>
  Give it a try (it only takes half an hour to evaluate) and if you don&#8217;t like it, revert to your old tool. After all, the syntax is not much different &#8211; all file loaders use some sort of comma-separated list.
</div>

#### How can I use it?

This example is based on jQuery, but you can combine pretty much every JavaScript library with StealJS.

  1. Download it from [Github][5] (or extract it from any JavaScriptMVC distribution).
  2. Put the files in the public JavaScript folder (typically &#8220;js&#8221;) of your project directory.
  3. Add a script tag with steal.js to your HTML file (or layout template, if you use a server-side framework) _after_ jQuery was included and add a parameter that points to the main include file.
  4. You must tell jQuery to listen to steal.js, so that the document ready event is not fired too early, if you have inline scripts that depend on it ([jQuery.holdReady()][6]).

<div>
  The script tags in your HTML file might look something like this:
</div>

<pre class="code">&lt;script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js'&gt;&lt;/script&gt;
&lt;script type='text/javascript'&gt;$.holdReady(true)&lt;/script&gt;
&lt;script type='text/javascript' src='js/steal.js?js/myapp.js'&gt;&lt;/script&gt;</pre>

The include file js/myapp.js contains a list of files that should be included in your page. Put all files that can be loaded in parallel (that don&#8217;t depend on each other) in the same block. After the files were included you can use a callback function to bootstrap your JavaScript application (and release the jQuery document ready event with holdReady(false)):

<pre class="code">steal(
  'myapp/framework.js'
).then(
  'myapp/tabs.js',
  'myapp/slider.js', 
  'myapp/style.css'
).then(function(){
  $.holdReady(false);
  $('#tabs').tabs();
  $('#slider').slider();
});</pre>

Of course, you can also use steal inside included files to load additional files (works just like the PHP require() statement).

#### More information

  * [Bitovi Blog: StealJS &#8211; Script Manager][7]
  * [Documentation (on javascriptmvc.com)][8]

Note: JavaScriptMVC will be renamed to [DoneJS][9] soon. The core MVC components of JavaScriptMVC are already available under the name [CanJS][10].

 [1]: http://javascriptmvc.com/
 [2]: http://coffeescript.org/
 [3]: http://www.lesscss.de/
 [4]: http://symfony.com/doc/current/cookbook/assetic/asset_management.html
 [5]: https://github.com/jupiterjs/steal
 [6]: http://api.jquery.com/jQuery.holdReady/
 [7]: http://bitovi.com/blog/2010/09/stealjs-script-manager.html
 [8]: http://javascriptmvc.com/docs.html#!stealjs
 [9]: http://donejs.com/
 [10]: http://canjs.us/