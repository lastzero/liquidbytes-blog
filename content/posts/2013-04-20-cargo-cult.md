---
title: Cargo Cult
author: Michael Mayer
type: post
date: 2013-04-20T11:51:21+00:00
url: /2013/04/cargo-cult/
cover_image: /wp-content/uploads/2013/04/9653526203_1aa7f43c95_z.jpg
categories:
  - 'Agile &amp; Lean Management'
  - 'Best Practices &amp; Quality'

---
If there is one work-related term that got stuck in my head it is &#8220;[cargo cult][1]&#8220;:

> In the South Seas there is a cargo cult of people. During the war they saw airplanes with lots of good materials, and they want the same thing to happen now. So they&#8217;ve arranged to make things like runways, to put fires along the sides of the runways, to make a wooden hut for a man to sit in, with two wooden pieces on his head for headphones and bars of bamboo sticking out like antennas—he&#8217;s the controller—and they wait for the airplanes to land. They&#8217;re doing everything right. The form is perfect. It looks exactly the way it looked before. But it doesn&#8217;t work. No airplanes land. So I call these things cargo cult science, because they follow all the apparent precepts and forms of scientific investigation, but they&#8217;re missing something essential, because the planes don&#8217;t land.
  
> <cite>Richard Feynman</cite>

It seems the software industry is a particular easy victim for applying &#8220;cargo cult&#8221; technologies or management strategies, since there are usually no obvious, physical effects associated with it. Detecting and eliminating &#8220;rituals that serve no purpose&#8221; would itself require some understanding of the situation, which is the exact opposite of what &#8220;cargo cult&#8221; means. Essentially it&#8217;s a lack of understanding or maybe even [willful ignorance][2]. You need a lot of courage to change the rules of existing systems, so it&#8217;s easier to just rename them or introduce new rules that can not conflict.

> In contrast to some discussions we observe in the software community, agile development is not about cargo cult adoption of Scrum or any other process, toolkit, or methodology — although we certainly observe this and consider it a problem.
  
> <cite>Frank Buschmann and Kevlin Henney, Architecture and Agility &#8211; Married, Divorced, or Just Good Friends?, <a href="http://www.computer.org/csdl/mags/so/2013/02/mso2013020080-abs.html">IEEE Software 3/2013</a></cite>

When it comes to [agile methodologies][3], there are teams, that are really agile: They detect problems early, find solutions quickly, make fast progress and have great development skills. And there are teams that don&#8217;t care about their most obvious problems (while the tiny problems get lots of attention), that create 10 alibi unit test months after the actual code has been written and whenever they meet they call it &#8220;scrum&#8221; (short meeting) or &#8220;retrospective&#8221; (long meeting):

> Cargo cult software engineering is easy to identify. Cargo cult software engineers justify their practices by saying, &#8220;We’ve always done it this way in the past,&#8221; or &#8220;our company standards require us to do it this way&#8221;—even when those ways make no sense. They refuse to acknowledge the tradeoffs involved in either process-oriented or commitment-oriented development. Both have strengths and weaknesses. When presented with more effective, new practices, cargo cult software engineers prefer to stay in their wooden huts of familiar, comfortable and-not-necessarily-effective work habits. &#8220;Doing the same thing again and again and expecting different results is a sign of insanity,&#8221; the old saying goes. It’s also a sign of cargo cult software engineering.
  
> <cite>Steve McConnell, <a href="http://www.stevemcconnell.com/ieeesoftware/eic10.htm">IEEE Software, March/April 2000</a></cite>

Another example are coding standards that pretend to increase the quality. To comment each and everything is a particularly popular convention, but there is no proof that this has any advantages when using modern high-level languages. In fact there are even obvious negative effects as described here:

  * [A comment is an apology (butunclebob.com)][4]
  * [To Need Comments (c2 Wiki)][5]

[<img class="alignright size-full wp-image-2270" src="https://lastzero.net/wp-content/uploads/2013/04/5197053749_f0bd8e290e.jpg" alt="Cargo Cult Phone" width="374" height="500" />][6]I could list many more examples like the widespread expectation that an SQL database gets faster whenever you add an index (not true!). The effects of cargo cult management can be observed on the larger scale, when

  * proprietary software companies are getting into trouble and then start to pretend they&#8217;re doing &#8220;open source&#8221; without understanding the concept of free software
  * you see uninspired page layouts that are supposed to imitate the &#8220;Google experience&#8221;
  * a company invests lots of money into a &#8220;social media strategy&#8221; and then fails to respond to the &#8220;social feedback&#8221; they get
  * employees are forced to use Windows, because the management thinks this is &#8220;enterprise&#8221; software (&#8220;_if it costs nothing, it can not be good_&#8220;)

These kinds of things don&#8217;t happen in real sciences, because you can not use a wrong formula in mathematics and still get the right result. In physics, you can not describe experimental results with some random, imaginary theory. There are obvious constraints while the software business has only very few constraints. Indeed the unique value of software is that it can be changed easily and **you can write similar applications in many different ways**. This opens the door for all kinds of hypes and weird practices that might &#8211; or might not &#8211; lead to the desired results.

 [1]: http://en.wikipedia.org/wiki/Cargo_cult_programming
 [2]: http://rationalwiki.org/wiki/Willful_ignorance
 [3]: http://agilemanifesto.org/principles.html
 [4]: http://butunclebob.com/ArticleS.TimOttinger.ApologizeIncode
 [5]: http://c2.com/cgi/wiki?ToNeedComments
 [6]: http://www.flickr.com/photos/dret/5197053749/