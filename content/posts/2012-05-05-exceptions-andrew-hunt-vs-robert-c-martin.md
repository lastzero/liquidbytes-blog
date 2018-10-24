---
title: 'Exceptions: Andrew Hunt/David Thomas vs Robert C. Martin'
author: Michael Mayer
type: post
date: 2012-05-05T09:56:12+00:00
url: /2012/05/exceptions-andrew-hunt-vs-robert-c-martin/
cover_image: /wp-content/uploads/2012/05/tpp.jpeg
categories:
  - 'Best Practices &amp; Quality'
  - Books
tags:
  - Clean Code

---
[<img class="alignright  wp-image-1457" style="margin-left: 20px; margin-bottom: 20px;" title="The Pragmatic Programmer" src="http://www.nulldevice.de/wp-content/uploads/2012/05/tpp-397x500.jpg" alt="" width="278" height="350" srcset="https://blog.liquidbytes.net/wp-content/uploads/2012/05/tpp-397x500.jpg 397w, https://blog.liquidbytes.net/wp-content/uploads/2012/05/tpp.jpeg 499w" sizes="(max-width: 278px) 100vw, 278px" />][1]There is a subtle difference between what Robert C. Martin recommends in _Clean Code_ and what Andrew Hunt / David Thomas recommend in _The Pragmatic Programmer_. Martin encourages you to always use exceptions if the normal program flow is interrupted to avoid if statements (or even worse: forgotten if statements and mixed result types) while Hunt/Thomas say this can cause harm (&#8220;it&#8217;s a kind of cascading goto&#8221;) and should only be used if something truly unexpected happens (tip 34). From my point of view, Robert C. Martin is right (his approach works for me; my code does not look like goto was used) and _The Pragmatic Programmer_ is outdated in this regard. Interestingly enough, I&#8217;ve never noticed anyone debating about these differences although both books are pretty popular.

#### 1) Robert C. Martin: Prefer Exceptions to Returning Error Codes

Returning error codes from command functions is a subtle violation of command query separation. It promotes commands being used as expressions in the predicates of if statements:  <tt>if (deletePage(page) == E_OK)</tt>

This does not suffer from verb/adjective confusion but does lead to deeply nested structures. When you return an error code, you create the problem that the caller must deal with the error immediately.

The problem with [if statements] is that they clutter the caller. The caller must check for errors immediately after the call. **Unfortunately, it’s easy to forget.** For this reason it is better to throw an exception when you encounter an error. The calling code is cleaner. Its logic is not obscured by error handling.

#### 2) Andrew Hunt: Exceptions, like any other technique, can cause more harm than good if not used properly.

We believe that exceptions **should rarely be used** as part of a program&#8217;s normal flow; exceptions should be reserved for unexpected events. Assume that an uncaught exception will terminate your program and ask yourself, &#8220;Will this code still run if I remove all the exception handlers?&#8221; If the answer is &#8220;no,&#8221; then maybe exceptions are being used in nonexceptional circumstances.

Why do we suggest this approach to exceptions? Well, an exception represents an immediate, nonlocal transfer of control—**it&#8217;s a kind of cascading goto**. Programs that use exceptions as part of their normal processing suffer from all the readability and maintainability problems of classic spaghetti code. These programs break encapsulation: routines and their callers are more tightly coupled via exception handling.

 [1]: http://www.nulldevice.de/wp-content/uploads/2012/05/tpp.jpeg