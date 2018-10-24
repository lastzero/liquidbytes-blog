---
title: 'ZendCon: Best Practices'
author: Michael Mayer
type: post
date: 2008-09-15T17:19:43+00:00
draft: true
private: true
url: /2008/09/zendcon-best-practices/
categories:
  - 'Conferences &amp; Events'
  - 'Linux, BSD &amp; Unix'
  - PHP
tags:
  - Best Practices
  - 'BSD &amp; Unix'
  - Golem
  - Linux
  - PHP
  - ZendCon2008

---
I found three useful ideas in the <span class="summary"><a class="url uid" href="http://www.zendcon.com/ZendCon08/public/schedule/detail/95">PHP Developer Best Practices</a></span> tutorial by <span class="description">Matthew Weier O&#8217;Phinney (Zend Technologies, Ltd.), Mike Naberezny (Maintainable Software):</span>

  * Add something like PHP_CodeSniffer to pre-commit in Subversion to reject code that doesn&#8217;t follow standards
  * Run tests in a Subversion post-commit script
  * Try to switch to git, because you can also do commits when offline

Sadly, there were also less good ideas like

  * Prefix private/protected class methods and properties with an underscore (makes refactoring very difficult; instead you should start with all properties being protected anyway and only make properties public, that need to be public)
  * Limit line length to 85 chars (120 chars are ok &#8211; nobody uses a 80 char text console for coding anymore &#8211; wide screens are standard, even for developers)
  * Use PHP_CodeSniffer (I like ZendCodeAnalyzer)

Look at this, if you wanna see bad practices:

[<img class="alignnone size-medium wp-image-883" title="Golem.de: PHP Bad Practices" alt="" src="https://lastzero.net/wp-content/uploads/2008/09/bad-practices-500x319.png" width="500" height="319" srcset="https://blog.liquidbytes.net/wp-content/uploads/2008/09/bad-practices-500x319.png 500w, https://blog.liquidbytes.net/wp-content/uploads/2008/09/bad-practices.png 784w" sizes="(max-width: 500px) 100vw, 500px" />][1]

 [1]: https://lastzero.net/wp-content/uploads/2008/09/bad-practices.png