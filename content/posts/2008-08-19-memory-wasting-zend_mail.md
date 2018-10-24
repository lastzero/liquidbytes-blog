---
title: Memory wasting Zend_Mail
author: Michael Mayer
type: post
date: 2008-08-19T00:54:51+00:00
draft: true
private: true
url: /2008/08/memory-wasting-zend_mail/
categories:
  - PHP
tags:
  - Bug
  - PHP
  - Zend Framework

---
I just wrote a small script to manage my mails&#8230; turns out that Zend_Mail uses some special trick that causes a fatal error:

> Reading 3274 messages&#8230;
> 
> Fatal error: Out of memory (allocated 11534336) (tried to allocate 18446744073709551615 bytes) in /usr/share/php/libzend-framework-php/Zend/Mail/Storage/Mbox.php on line 198

That&#8217;s around 17179869183 TB of memory&#8230; to read 3274 mails&#8230; makes 5247363 TB per message&#8230; not bad ;)