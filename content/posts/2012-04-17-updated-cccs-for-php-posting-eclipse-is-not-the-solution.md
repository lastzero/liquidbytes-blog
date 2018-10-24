---
title: Eclipse is not the solution!
author: Michael Mayer
type: post
date: 2012-04-17T21:42:27+00:00
url: /2012/04/updated-cccs-for-php-posting-eclipse-is-not-the-solution/
categories:
  - 'Best Practices &amp; Quality'
  - PHP
tags:
  - PHP

---
During the last couple of days, I&#8217;ve been updating my posting about cargo cult coding standards for PHP. There are some examples now. Thanks to [Arturas Smorgun][1] for retweeting it. I&#8217;m sure my post doesn&#8217;t have a huge impact on the community, but for me it&#8217;s still worth talking about my experiences.

Guess what&#8217;s bothering me the most is that the popular PEAR/Zend Framework coding standard actually forces you to lose the context of your currently edited code. Things like the maximum line length or the underscore prefix of non-public class members are just minor issues. Adding mandatory inline comments (that mostly duplicate your code) and new lines after declarations wouldn&#8217;t be that bad, if it wouldn&#8217;t waste so much vertical space (and therefore hiding your context). When I talk about this issue, the usual answer is, that you simply must use Zend Studio (or Eclipse PDT), which automatically collapses/creates phpDoc comments and jumps to related functions. The funny thing is, that Eclipse is so slow and unreliable when working with large projects, that it is exactly as bad for the development efficiency as the coding standards mentioned. This shouldn&#8217;t be a satisfying  situation for any professional developer. Developers should be able to work with the editor of their choice, as long as it supports automatic indentation and UTF-8. Maybe that&#8217;s wrong, but I totally refuse to make my PHP coding standard dependent on some Java editor software.

Bottom line: The PEAR/ZF standards and Eclipse/Zend Studio were made with the best intentions, but in some points they conflict so obviously with the practices taught in [Clean Code][2] (not to mention common sense!) that you must either reject them or close your eyes and hope for the best.

 [1]: https://twitter.com/#!/asarturas
 [2]: http://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/