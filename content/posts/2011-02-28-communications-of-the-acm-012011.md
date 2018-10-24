---
title: Communications of the ACM 01/2011
author: Michael Mayer
type: post
date: 2011-02-28T17:29:13+00:00
url: /2011/02/communications-of-the-acm-012011/
categories:
  - ACM
tags:
  - ACM
  - Science

---
While being in Chicago I found the time to read through the last issue of Communications. Here&#8217;s a short summary:

  * &#8220;**Where have all the workshops gone?**&#8221; by Moshe Y. Vardi &#8211; he basically complains that todays workshops (&#8220;second-rate conferences&#8221;) are not the same as they have been in the past (&#8220;informal gatherings of researchers&#8221;). My suggestion: Go to an _Unconference_, although these are more informal gatherings of engineers, rather than researchers. Probably depends a lot on the field you&#8217;re working in.
  * Letters to the editor: &#8220;Objects Always! Well, Almost Always&#8221; (Henry Baragar, Toronto) &#8211; I agree with him that &#8220;_OOP provides more tools and techniques for building good models than any other programming paradigm_&#8221; including closures, which are kind of hyped right now.
  * ACM&#8217;s annual report &#8211; Yes, they seem to make some money! _4,8 mio USD_ increase in net assets in 2010.
  * &#8220;**Nonlinear Systems Made Easy**&#8221; by Gary Anthes &#8211; This actually seems interesting. The article is about new algorithms devised by Pablo Parrilo to _rewrite nonlinear polynomials as sums of squares of other functions_. Sadly I usually don&#8217;t write software that could leverage that approach, but maybe in the future&#8230; who knows?
  * &#8220;**India&#8217;s Elephantine Effort**&#8221; by Marina Krakovsky &#8211; Wow, _millions of Indian people get a biometric ID assigned_. Seems like this is mainly viewed as a technical challenge. For sure, in Germany a project like this would involve endless political discussions.
  * &#8220;**Don&#8217;t bring me a good idea**&#8221; by Phillip G. Armour &#8211; The title is confusing, as you expect some advice how to sell ideas to managers. Instead it is about how to model IT environments using virtual machines.
  * &#8220;**Google AdWords and European Trademark Law**&#8221; by Stefan Bechtold &#8211; As a software engineer, I don&#8217;t care a lot about Ads and the law, but it _seems like Google is the winner once more_.
  * &#8220;**Reflections on the Toyota Debacle**&#8221; by Michael A. Cusumano &#8211; This was insightful and I like the conclusion: &#8220;What managers need to understand are the limitations of any best practice as well as the potential even for greater companies to lose their focus and attention to detail &#8211; at least temporarily. [&#8230;] The Toyota way used to be that one defect is too many. That is the kind of thinking that Toyota seems to be regaining.&#8221;
  * &#8220;**Cloud Computing Privacy Concerns on our Doorstep**&#8221; by Mark D. Ryan &#8211; I agree that &#8220;we are just at the beginning of the digital era, and many of the solutions we currently accept won&#8217;t be considered adequate in the long term&#8221;. Nothing new.
  * &#8220;**An interview with Frances E. Allen**&#8221; by Guy E. Steele Jr. &#8211; Didn&#8217;t read it all, but she still seems to be in love with Fortran.
  * &#8220;**Collaboration in System Administration**&#8221; by Haber, Kandogan and Maglio &#8211; Could be very interesting for IT managers and sysadmins. I skipped it.
  * &#8220;**Virtualization: Blessing or Curse?**&#8221; by Evangelos Kotsovinos &#8211; Nothing new here as well: &#8220;Can virtualization deliver? It absolutely can, but not out of the box.&#8221;
  * &#8220;**Using Simple Abstraction to Reinvent Computing for Parallelism**&#8221; by Uzi Vishkin &#8211; an introduction to Explicit Multi-Threading (XMT) based on a PRAM computer. Right now, there is an FPGA implementation of such a computer with 64 cores and a programming language called <a href="http://www.umiacs.umd.edu/users/vishkin/XMT/manual4xmtc1out-of2.pdf" target="_blank">XMTC</a>, which is a superset of the C programming language. That said, the whole thing is mainly of academic interest for the moment and I personally reject everything that is related to C. But the idea seems good.
  * &#8220;**A Firm Foundation for Private Data Analysis**&#8221; by Cynthia Dwork (Microsoft) &#8211; Conclusion: 1) Large Query Sets don&#8217;t provide privacy because you can subtract one result set from another and query auditing does not work well. 2) Adding random noise to the result set has promise, if done correctly. 3) Token-based hashing of search logs can be compromised by statistical analysis. 4) Things that statistical databases are designed to teach can, sometimes indirectly, cause damage to an individual, even if this individual is not in the database. 5) That leads to the definition of &#8220;Differential Privacy&#8221;, which is further explained in the article. _Excellent!_

> People search for many &#8220;obviously&#8221; discoloisive things, such as their full names (vanity searches), their own social security numbers (to see if their numbers are publicly available on the Web, possibly with a goal of asserting the threat of identity theft), and even the combination of mother&#8217;s maiden name and social security number.