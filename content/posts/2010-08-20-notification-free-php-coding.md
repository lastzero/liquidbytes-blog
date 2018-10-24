---
title: Notification Free PHP Coding
author: Michael Mayer
type: post
date: 2010-08-20T14:23:22+00:00
url: /2010/08/notification-free-php-coding/
categories:
  - 'Best Practices &amp; Quality'
  - PHP
tags:
  - PHP

---
This is a reply to <http://100days.de/serendipity/archives/50-Notification-Free-PHP-Coding.html>. Gaylord Aulke&#8217;s opinions are normally quite valuable. There are a couple of arguments (just read the comments) in both directions and to be fair, Gaylord also said, that his opinion is different for frameworks and libraries.

Even though I tend look into PHP notifications (some code produces so much of them, that you can only ignore them), I wasn&#8217;t really sure what my final position on **Notification Free PHP Coding** is and I was not too strict about it.

That changed today.

While demonstrating my reporting frontent for PHPUnit to the customer this month, I had to find out that it&#8217;s JUnit/XML logger sometimes produces broken XML files: You can get a &#8220;PCDATA invalid Char&#8221; exception when loading it with DOMDocument::load(). Sebastian Bergmann encouraged me to send a pull request on github, which is nice. Except that I never contributed to PHPUnit before. Nor did I actively use github. Like Lars Jankowfsky I tend to stay with SVN, when possible (that&#8217;s probably worth another blog post).

Anyways: <del datetime="2010-08-20T20:35:51+00:00">It was easy to fix the bug</del> (actually, it turned out to be more complex) and after reading a couple of git manuals, I found out how to commit, push and send a pull request. The only thing I didn&#8217;t notice is that I used the constant _ENT_QUOT_ (undefined) instead of _ENT_QUOTES_ (defined) as an argument to htmlspecialchars() for some reason &#8211; this is why I recommend to focus on each line of code to other people&#8230;

<pre>htmlspecialchars(self::convertToUtf8($string), ENT_QUOT, 'UTF-8')</pre>

Not a big thing, if I would have seen the PHP notice!

<pre>Notice: Use of undefined constant ENT_QUOT - assumed 'ENT_QUOT'</pre>

It was not possible to see it, not because I did not look at the error messages or the test results, but because the default config for PHP on Ubuntu is _error\_reporting = E\_ALL & ~E_NOTICE_. To use an undefined constant is just plain wrong and leads to an undefined state of the software &#8211; it must be noticed. Also, whenever there are too much notices, you won&#8217;t be able to spot it. Therefore the only way to avoid it is to produce notification free code. I don&#8217;t want something embarrassing like this ever happen to me again.

Lesson learned.