---
title: 'c’t magazine: WebZwoNullTurbo, how to optimize JavaScript'
author: Michael Mayer
type: post
date: 2009-08-18T11:36:17+00:00
url: /2009/08/ct-magazine-webzwonullturbo-how-to-optimize-javascript/
categories:
  - German
  - 'JavaScript, HTML &amp; CSS'
tags:
  - 'JavaScript &amp; Rich Client'

---
There is an article about JavaScript optimization in the current issue of the German c&#8217;t magazine. I read it with great interest and there are some tips that need to be commented:

1) Declare local variables with the keyword var, to save time for searching it in the global namespace:

<pre>function foo () {
 var bar = 'abc';
 return bar;
}
</pre>

This should always be done, for sure. However the article is wrong in that the variable will be created in the local namespace, if you don&#8217;t use var. In that case it will be created in the global namespace (which is window in Web browsers).

2) Another recommendation is to use setTimeout(doSomething, time, param1, param2,&#8230;) instead of setTimeout(&#8216;doSomething(&#8216; + param1 + &#8216;,&#8217; + param2 +&#8217;)&#8217;, time). While this would be a good idea probably, [Internet Explorer][1] does not support it. Also the use of local object instance variables like this.value to pass parameters to functions that are later executed by setTimeout is dangerous, as the context is not preserved for setTimeout. Always use the variables in the global namespace or use the var self = this hack (might cause memory leaks) to access the current context. Two examples from the Internet Explorer Developer Center:

<pre>// The first example of a closure passes the variable to a named function.
function startTimer() {
    var div = document.getElementById('currentTime');
    setTimeout(function(){doClock(div)},200);
}
// The second example also uses a closure, by referring to an argument passed to the function.
function doClock(obj) {
    setInterval(function(){obj.innerHTML=(new Date()).toLocaleString()},200);
}</pre>

3) Function inlining, that is not to use functions in loops but copy & paste the code, can speed up things a bit, however it can not be considered good style, does reduce readability and often violates the DRY (don&#8217;t repeat yourself) principle.

4) Compressing JavaScript code for use in production environments is a very good idea. I do recommend to use the YUI compressor, which does not break code and works very well with additional gzip compression. It can be integrated in automated build scripts very nicely.

5) The biggest impact for a clean architecture and less memory leaks probably comes from using Event Delegation, which was not mentioned in the article. Try <a href="http://javascriptmvc.com/" target="_blank">JavaScriptMVC</a>.

 [1]: http://msdn.microsoft.com/en-us/library/ms536753(VS.85).aspx