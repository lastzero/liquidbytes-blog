---
title: What to document in agile projects?
author: Michael Mayer
type: post
date: 2012-11-08T16:49:38+00:00
url: /2012/11/what-o-document-in-agile-projects/
cover_image: /wp-content/uploads/2012/11/5885384256_11c22154a2_b.jpg
categories:
  - 'Agile &amp; Lean Management'
  - 'Best Practices &amp; Quality'
tags:
  - Documentation

---
<img class="alignright size-full wp-image-2189" title="Reading is an important activity" src="https://lastzero.net/wp-content/uploads/2012/11/8127733821_37fb513bc5_m.jpeg" alt="" width="240" height="240" srcset="https://blog.liquidbytes.net/wp-content/uploads/2012/11/8127733821_37fb513bc5_m.jpeg 240w, https://blog.liquidbytes.net/wp-content/uploads/2012/11/8127733821_37fb513bc5_m-150x150.jpeg 150w" sizes="(max-width: 240px) 100vw, 240px" />A posting in the [Agile and Lean Software Development][1] group on LinkedIn inspired me to think about the **amount and type of documentation** that should be created in **agile projects**. It is a misconception, if developers think that agile methods do not require any written documents. Here are a few (I think the most important) examples:

  * A **Wiki** that contains the steps required to **set up** the application and a list of **config files** and **config options** can be considered essencial documentation &#8211; especially for developers who join the project at a later time. Also I would strongly recommend documenting the **basic architecture** (for example the different layers like database, storage backend, front-end application and JavaScript user-interface &#8211; how do they communicate with each other?).
  * Of course it makes sense to write down the **core features** to be implemented for each story, so that the developer knows what to do in detail. Otherwise, you can hardly **estimate** the scope of your tasks and/or you rely on the **memory** of a certain developer (you&#8217;re in trouble, if that person gets sick or leaves the project for other reasons). Many product owners think, it&#8217;s enough to describe the task with like 5 sentences. **Wireframes** and a list of possible **user interactions** are a good start and also help a lot during **acceptance testing** after the features were implemented.
  * You should definitively document all implemented **protocols** for reference. **Sequence diagrams** are often useful for that. Even many standard protocols have optional features and 2 years later, no one will know what is implemented and what not. If you publish a public **API**, you have to document it in every case. APIs can often be documented half-automated using **reflection** and **inline comments**.
  * What you should **not** document, is the **code as such**, because it changes a lot (refactoring) so that the documentation will be **outdated**, **useless** and even **dangerous** really quick. If you care about basic **usability**, the front-end should also not require any documentation. When was the last time, you read a user&#8217;s guide to use a Web site?

> Working software over comprehensive documentation
  
> <cite>Agile Manifesto</cite>

 [1]: http://www.linkedin.com/groups?home=&gid=37631&trk=anet_ug_hm "This is an open group"