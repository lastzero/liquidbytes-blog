---
title: Estimations done right
author: Michael Mayer
type: post
date: 2013-04-21T11:20:49+00:00
url: /2013/04/estimations-done-right/
cover_image: /wp-content/uploads/2013/04/8701635182_624a209546_n.jpg
categories:
  - 'Agile &amp; Lean Management'

---
<img class="alignright size-full wp-image-2324" alt="Sprint planing meeting" src="https://lastzero.net/wp-content/uploads/2013/04/7596651448_9d9e7fa258.jpg" width="500" height="333" />How reliable, useful and realistic are **effort estimations** and what are the implications of **different methodologies**? Since at least the 1960s, this is a hot topic for software engineers and their managers, although the importance of precise estimation is decreasing in the age of **agile development**.

I would like to give a summary of my past experiences, some recommendations and point to **scientific research**. Judgement-based effort estimation is on average at least as accurate as formal estimation models, so I&#8217;m not covering any formal methods in this blog post.

> In the reviewed studies, the models failed to systematically perform better than the experts when estimating the effort required to complete software development tasks.
  
> <cite>Forecasting of software development work effort: Evidence on expert judgement and formal models, Magne Jørgensen, <a href="http://pages.cpsc.ucalgary.ca/~sillito/cpsc-601.23/readings/jorgensen-2007.pdf">International Journal of Forecasting 23 (2007)</a></cite>

#### It&#8217;s the requirements, stupid!

You can not estimate without complete and **understandable requirements**. It&#8217;s as easy as that. If you have no or bad requirements, you should **charge by the hour** and try to do your best. You can still work in sprints, but save the time to perform any estimates. You should become skeptical, if the product owner supplies the task requirements not during sprint planning, but shortly before the sprint is over. Agile developers **embrace change**, but they can not commit to things they don&#8217;t know. On the other hand, requirements don&#8217;t have to include every single detail to perform a high-level estimate.

I used to work in a somewhat difficult und unpredictable project that got into much better shape, after we prepared a **separate** document containing the updated and complete requirements **for each user story** to be implemented. Developers don&#8217;t like to reveal the secrets of big requirements documents and collect information from various sources before they start to code.

> Early understanding of requirements and choice of architecture are key to managing large-scale systems and projects
  
> <cite>Nuseibeh, B. (2001). <a href="http://oro.open.ac.uk/2213/1/">Weaving together requirements and architecture</a>. IEEE Computer, 34(3), pp. 115–119.</cite>

#### Ask yourself why you need an estimation

From the **business perspective**, there can be lots of good reasons to estimate the effort needed to finish a task or a project. But be aware that software developers can be more productive and produce higher quality, if they don&#8217;t feel the **pressure** to finish their tasks within a given time. You should certainly not use estimations to force developers to work **faster**, although realistic estimations can encourage them to work much **more efficiently** (smarter) by closing the Facebook tab in their browser.

Developers who can estimate their tasks really well are usually more experienced and have a good feeling for what has to be done in order to complete a task. Inversely, developers who frequently need more time than estimated by themselves might have a bad understanding for the code they are working on or they are mentally exhausted.

> Professional software developers know how to provide the business with practical estimates that the business can use for planning purposes.
  
> <cite>Robert C. Martin, The Clean Coder</cite>

> Software people who build software under no schedule constraints are more productive than those who build software to a schedule.
  
> <cite>Software Conflict 2.0: The Art and Science of Software Engineering (Robert L. Glass, Andrew Hunt and Donald J. Reifer)</cite>

> If I&#8217;m asked if estimation is a Bad Thing my answer is the standard consultants&#8217; answer of &#8220;it depends&#8221;. [&#8230;] For me, estimation is valuable when it helps you make a significant decision.
  
> <cite>Martin Fowler, <a href="http://martinfowler.com/bliki/PurposeOfEstimation.html">Purpose of Estimation</a></cite>

#### Understanding the context

Any advice is only valid for a given **context**. For most common **optimization problems**, there usually is an **average best** solution and at least one more complex solution with higher risk and increased business value. And there are many inferior solutions, but some with much lower complexity that are still **good enough** for dedicated use cases. Higher risk can partly be compensated by more experienced engineers or managers. Lower risk often means less innovation, more overhead and lower efficiency.

Estimations in the context of software engineering are performed to **deliver value** by solving business problems. **Effort** is just one of many things that can be estimated. Other important variables are **productivity**, **efficiency** and **risk**. While it is good to minimize unnecessary risk, you might also want to encourage risk to boost **innovation**. Therefore, any professional estimation is also a **decision**.

The **unique value** of the software companies I usually work with as a **freelance software engineer** lies within their **experience** and **efficiency**. Typical questions to be answered by estimates are:

  * Are there more efficient ways to reach the same goal?
  * How many and what kinds of engineers and what other staff do I need to make a competitive offer while delivering great quality?
  * What is the appropriate contract type (innovation vs low risk)?

This is a completely different context than teaching **existing software development teams** of **large corporations** such as IBM, Deutsche Telekom or Daimler how to be more agile by encouraging more communication and improving the reliability of the release schedules. Productivity and efficiency inside organizations are constrained by **existing policies** and often by **fixed budgets**.

**Measuring a quantity** such as the development velocity, then using the current value for predictions and see how it can be improved **afterwards** (without violating corporate policies or other constraints) is a good example of an average best solution that can be applied in basically **all situations**.

You can as well start your effort estimate by **assuming** a development velocity range based on the technology and the level of risk & innovation, if you own the company, have sufficient experience and are in full control of essential properties of the development team. Ability to **control complexity**, make **non-trivial predictions** and a high **profit margin** are closely related and you will find no book (and only very few consultants) that will do the job for you. This is where **fun**, **passion** and **heated arguments** about the &#8220;right way&#8221; to do things begin.

> If published papers contain the secret of success for software, shouldn&#8217;t we see more jewels?
  
> <cite>David Parnas</cite>

#### Case 1: Project scope

If you need an **upfront** estimation for a complete project, in order to make a quote or to allocate the required resources, the responsible manager should get separate estimates from the two or three **most experienced developers.** People who will later be involved have more motivation to get it right. An educated guess by the complete team (if you already have one) tends to result in an overly aggressive or conservative estimate. Presumed there is a suitable requirements document, I need about half a day to estimate a small project including some research. Larger projects can take longer, depending on how comprehensive the requirements document is and how much research has to be performed: The use of **standard solutions** instead of individual development can save a lot of time and effort. Make sure to get estimates (ideally ranges) for the **individual software modules** and not just one big number for the whole project.

Alternatively, the team can do a **planning poker** ([wideband delphi][1]) and estimate using story points, an arbitrary unit, which can be converted to time & money after the the experience you gathered with the first or second sprint. The assumption for this approach is, that you **already** have a team and enough resources to do the first sprints. For the projects I&#8217;ve been working in, this was typically not the case. Estimating the velocity would be almost the same as using an educated guess to estimate work hours directly. You can still do the planing poker once the team is complete, if you decide to work with story points. Note that for teams with a high fluctuation or other non-linear impediments (such as producing a mess), even story points may fail to predict the long-term velocity or the release date.

To get a reliable project estimation in practice means to use the **highest** number of a given estimation range and add a margin to cover **unforeseeable impediments** as well as special management and test **overhead** that was not already included.

There are many different ways to work with customers and it would exceed the scope to discuss the various contract types in detail. If you&#8217;re lucky, the customer pays for a given number of sprints and takes the result as it is, so you don&#8217;t have to promise a fixed feature set upfront &#8211; although the number of sprints should reflect the expected features. This requires a lot of trust. Another option is to agree on a **minimum fixed feature set** ([agile fixed price][2]).

That said: In agile projects, the initial estimation is ideally just there, to get an **understanding for the size of the project**. Projects **don&#8217;t scale linearly** with the number of developers (overall efficiency declines). You need to set up **different** structures depending on the **expected project scope**.

The initially estimated work hours **should not be used by the development team for sprint planning** after the project has started, especially since requirements are subject to change in agile projects, but also because the development process is more focused on details such as components, dependencies and priorities, while the initial project estimation is more focused on resources and risk. Management overhead for example is of no concern for the development team. It depends largely on your previous experience, the size of the project and your organizational structure.

More details about project estimates in **enterprise environments** can be found in &#8220;[Disciplined Agile Delivery][3]: A Practitioner&#8217;s Guide to Agile Software Delivery in the Enterprise&#8221; (IBM Press).

> Every single project team that either of us has been involved with had to provide some sort of financial estimate at the beginning of the project as part of the overall process of securing funding. Every. Single. One.
  
> <cite>Mark W. Lines, Scott Ambler, Disciplined Agile Delivery: A Practitioner&#8217;s Guide to Agile Software Delivery in the Enterprise</cite>

> Estimator experience is one of the most important factors in archiving development effort estimation accuracy, although it’s impractical to appoint the highest-qualified estimator on every project. [&#8230;] Try to exclude candidates with a high general degree of optimism as well as optimism in the estimation process.
  
> <cite>Dirk Basten, Ali Sunyaev, pp. 88-90 <a href="http://www.computer.org/csdl/mags/co/2011/10/mco2011100088-abs.html">IEEE Computer October 2011</a></cite>

#### Case 2: Sprint planning

In agile projects, it&#8217;s a common best practice to let the whole team make an estimation **during sprint planning** until it reaches a consensus, especially if the task requires a discussion. The team members must only estimate **the items that come next on the priority list** and might be part of the upcoming sprint. It&#8217;s self-explaining, that you can not estimate a task for somebody else, if you need her or his [commitment][4].

There can be **special situations**, in which it&#8217;s impractical to let all developers make an estimate, for example when the project manager / product owner needs a **quick feedback** to communicate with the client, the development team is **too large to attend all meetings** or there are **multiple teams at different locations**. In that case, you must find a suitable solution. For example, the most experienced developer can negotiate and pre-estimate the user stories for the next sprint and then do a second, detailed planning with the team afterwards. Remote teams are especially difficult in this regard, although a lot of tools have emerged to handle the issues. **You should do whatever works best**, which might take a while to figure out.

> Many teams find that estimation provides a useful forcing function to get team members to talk to each other. Estimation meetings can help get better understanding of various ways to implement upcoming stories, future architectural directions, and design problems in the code base.
  
> <cite>Martin Fowler, <a href="http://martinfowler.com/bliki/PurposeOfEstimation.html">Purpose of Estimation</a></cite>

#### Add a margin

[<img class="size-medium wp-image-2346 alignright" alt="Task completion diagram" src="https://lastzero.net/wp-content/uploads/2013/04/BGg6PWvCQAEBgM0-500x228.jpg" width="500" height="228" srcset="https://blog.liquidbytes.net/wp-content/uploads/2013/04/BGg6PWvCQAEBgM0-500x228.jpg 500w, https://blog.liquidbytes.net/wp-content/uploads/2013/04/BGg6PWvCQAEBgM0.jpg 767w" sizes="(max-width: 500px) 100vw, 500px" />][5]If you feel like the estimator was too optimistic, you should add a margin to compensate for that. In the context of sprint planning meetings, the team members should learn to add a margin to their individual estimates so that they can be sure to have enough time and don&#8217;t promise too much. This only applies, when working with absolute estimates or the team commits to finish a set of tasks until a certain date.

Most estimations are too optimistic at first, so you should assume this is the case, if there are no reasons to believe otherwise. Another strategy is to ask for a &#8220;worst case&#8221; scenario and to use those numbers for planning. The diagram on the right hand side suggests that you should add 100% extra time to end up with a realistic estimation.

This margin actually has **nothing** to do with security, distrust or hidden risk. It is important to understand, that a task is usually not done, when you finished most of the coding. You&#8217;ll always need **time for proving** the code is correct before it can finally be considered done and deployed to a production environment.

> When the product is 90% complete, the activity is only about halfway through its total time.
  
> <cite>How we build things: …and why things are 90% complete, Philip G. Armour, <a href="http://dl.acm.org/citation.cfm?doid=2398356.2398367">Communications of the ACM, January 2013</a></cite>

#### Chose the right task size

Smaller tasks are generally easier to estimate than larger ones, because you spend more attention to the details. If you add up many small estimations, the inaccuracies will [cancel each other out][6], while one big estimation can just be taken as it is. Research shows that estimators are biased when they compare tasks of completely different sizes after each other: They tend to either under- or overestimate the effort.

> Split larger tasks into smaller ones, which can usually be estimated more precisely.
  
> <cite>Dirk Basten, Ali Sunyaev, pp. 88-90 <a href="http://www.computer.org/csdl/mags/co/2011/10/mco2011100088-abs.html">IEEE Computer October 2011</a></cite>

> Using a medium-large user story led to the least estimation bias and the most accurate estimates.
  
> <cite>Relative Estimation of Software Development Effort, Magne Jørgensen, <a href="http://simula.no/publications/Simula.simula.814/simula_pdf_file">IEEE Software March/April 2013</a></cite>

#### Work Hours vs Story Points

There is quite a debate whether you should do relative estimation in points or absolute estimation in hours.This largely depends on the context and your intent.

Work hours instead of story points or other relative estimations are more helpful to calculate costs and you can compare numbers between projects. However, you must be aware that team members can and will not be 100% efficient: Smaller companies sometimes manage to get 6 real work hours from a usual 8 hour work day (75% efficiency), while **the efficiency at larger companies might be around 50%**. Working over slow remote connections or with outdated IT equipment further reduces efficiency.

I personally prefer to stick with work hours **for planning a sprint**. If you do it right, it helps to relax and detect potential problems at the same time. An absolute estimation surely sets **expectations**, but if you fulfill them, you instantly get a **positive feedback**. The secret is to always **overestimate** a little bit &#8211; an obviously **absurd endeavor** when using story points. This seems especially important for **freelancers** who have to bill every hour they work on a ticket. If a team member frequently needs longer than expected, it&#8217;s a sure **sign of a bad understanding** (either the task or the code) or it&#8217;s burnout, which should be taken serious. Note that work hour estimates work best with **short sprints** as you should not estimate tasks far in advance for highest possible accuracy.

There are use cases in which **[story points][7]** can be of advantage, for example if you want to **pre-estimate all user stories**. This can enable you to calculate development **velocity** (average, **not guaranteed**, story points per sprint) and help make **predictions** about future sprints. I consider story points **complementary** to estimates done in work hours. It is my **humble opinion** that story points **alone** make it easy to work too much (**overcommitment**) under certain conditions because you can get focused on a **particular velocity** and you have less feedback about your actual work time, if there are no other measures in place (also see [The Elusive 20% Time][8]). Similarly, a low [technical debt][9] is more important than a constant story point velocity for each sprint. It requires a lot of experience and consequent behavior not to fall into this [trap][10].

Another important use case for story points arises, if the estimator is **unfamiliar with the technology** being used, e.g. a PHP developer that must estimate a software that needs to be implemented in Java. The big question is, if that developer should do the estimation in the first place, because you indeed only get relative estimations with **less instant value for the business**. Relative estimations become useful after the project has started and you can see the velocity. But **only** if you don&#8217;t produce a mess and need to throw away the code after six or seven sprints, which can easily happen, if you use a technology for the first time.

The variance how much time is needed by **experienced** developers to complete a given task isn&#8217;t very large on average for **typical Web applications** built on top of mature frameworks (Java caught up during the recent years), if you look at the results of the [Plat_Forms][11] contest 2007 in which 9 teams had to implement the same requirements within 30 hours:

<p style="text-align: center;">
  <img class="aligncenter size-full wp-image-2416" alt="Platforms 2007: Completeness" src="https://lastzero.net/wp-content/uploads/2013/04/Platforms2007Completeness.png" width="659" height="289" srcset="https://blog.liquidbytes.net/wp-content/uploads/2013/04/Platforms2007Completeness.png 659w, https://blog.liquidbytes.net/wp-content/uploads/2013/04/Platforms2007Completeness-500x219.png 500w" sizes="(max-width: 659px) 100vw, 659px" />
</p>

The results of the three teams of the PHP and Perl groups were pretty similar (I was in [PHP team 8][12]). Note that we had a very well written [requirements][13] document. My theory is: Whenever estimations for typical Web applications built on a similar technology stack are much different, it mainly indicates a problem with the **understanding or the completeness of the requirements**.

> The performance of the three PHP teams is remarkably similar. The variance among the Perl teams is also fairly small. [&#8230;] Team 9 Java produced by far the least complete solution overall, with only about half as much implemented functionality than the second-least complete solution. The reason is apparently the lack of maturity of the RAP framework that this team used.
  
> <cite>Lutz Prechelt, Plat_Forms 2007: The Web Development Platform Comparison — Evaluation and Results, Institut für Informatik, Freie Universität Berlin</cite>

<img class="alignleft size-full wp-image-2545" alt="Effort Estimate" src="https://lastzero.net/wp-content/uploads/2013/04/8700569795_e143161172_n.jpg" width="320" height="266" />Let&#8217;s take for example a task that is estimated with 4 hours. If somebody needs just 1 or 2 hours, it&#8217;s probably not tested or the code needs refactoring, which will produce a mess in the long run (&#8220;quick and dirty&#8221;). If somebody needs more than 8 hours, that&#8217;s too expensive and the person probably doesn&#8217;t really understand the technology, the requirements were badly prepared or the developer has other problems that should not be ignored. So, although I could estimate something considerably more or less than 4 hours, the **business value** of the result vanishes. **It&#8217;s not like developers who are 10 times slower produce the same kind of high quality code and charge 10 times less.** This is why I consider relative estimation of lower value for many of today&#8217;s streamlined Web projects. The same might be true for mobile app development.

My vision is to enable all developers of a team to be equally productive and efficient (up to a certain, maintainable level) by sharing and implementing **[best practices][14]**. This requires to talk about the absolute (maximum) effort for **specific tasks** and how it can be reduced. I&#8217;ve never seen teams with largely different experience levels work well in practice and that&#8217;s also the feedback I get from many successful companies.

<img class="alignright size-full wp-image-2546" alt="Velocity as probability distribution" src="https://lastzero.net/wp-content/uploads/2013/04/8701635182_624a209546_n.jpg" width="320" height="257" />It is true that all unforeseen impediments can theoretically invalidate absolute estimates. In my opinion, the impact is negligible with reasonably short sprints and it is not the end of the world, if you miss your goals. In practice, it is valuable to know which tasks were taking longer than expected while a lower than expected story point velocity contains no information about specific tasks. It just indicates overcommitment, often because inexperienced teams don&#8217;t understand that the velocity is a **probability distribution**. If you try to finish as many tasks within a sprint as the velocity suggests, you have a 50% chance (or more) to miss that goal.

You shouldn&#8217;t use absolute estimates for **release planning** though. Story points or even an educated guess are much more suitable for this purpose. An educated guess can be the best tool, if the team has a high fluctuation or there are other non-linear effects to be considered.

For teams that don&#8217;t consist of reasonably experienced developers or projects that don&#8217;t build on well established technical foundations, you might be well advised to use story points only as [Jeff Sutherland][15] suggests. It is common sense that a consensus estimation during sprint planning requires relative points, if the team consists of members with evidently different experience levels.

Last but not least you always have the option **not to work with estimations at all**, if there is enough confidence, trust and motivation within the team.

My impression is that the **management aspects** of agile projects are overrated in comparison to the **technical aspects** such as automated testing and refactoring. You really shouldn&#8217;t invest too much energy into points vs hours and better care about good requirements, unit tests and the skills of the development team. This is what **saves the most time** at the end. Do what **works best** for your individual situation.

> When using analogy-based estimation, use reference projects similar to those to be estimated and compare the projects in terms of work hours rather than percentages.
  
> <cite>Relative Estimation of Software Development Effort, Magne Jørgensen, <a href="http://simula.no/publications/Simula.simula.814/simula_pdf_file">IEEE Software March/April 2013</a></cite>

> For me, story point is high-level estimation of complexity made _before_ sprint planning. It could be done during release planning, but I think most Scrum teams do it during a preplanning session. Story points and sprint velocity then give us a guideline about the stories to be committed in the coming sprints.
> 
> The task-hour estimation, on the other hand, is a low-level estimation made to represent the actual effort in hours needed to accomplish all the requirements of a story. Such an estimation should be done _during_ sprint planning for highest possible accuracy, as the actual development may start the next day.
  
> <cite>Chia Wei Cheng, Agile Scrum Master, <a href="http://www.scrumalliance.org/articles/439-story-points-versus-task-hours">Story Points Versus Task Hours</a></cite>

> Story points give more accurate estimates, they drastically reduce planning time, they more accurately predict release dates, and they help teams improve performance. [&#8230;] The best developer on a project takes one hour to complete a task while the worst developer takes 10 hours (within a project) or 25 hours (across projects). For teams the difference is an order of magnitude greater.
  
> <cite>Jeff Sutherland, <a href="http://scrum.jeffsutherland.com/2010/04/story-points-why-are-they-better-than.html">Story Points: Why are they better than hours?</a></cite>

#### Never make single task estimations of less than one hour or more than 16 hours

To effectively enforce the use of medium task sizes, I found it most convenient to **estimate with the powers of two**: 1, 2, 4, 8, 16. This takes the inaccuracy of large estimations into account, while forcing you to split up tasks larger than 16 hours. It also protects you from ridiculous estimations such as &#8220;35 minutes&#8221; (should be 1 hour) or &#8220;2.4 hours&#8221; (should be 4 hours).

If you think that there actually are tasks smaller than one hour, you should take into consideration that the estimation itself also takes time, the associated meetings take time, the task tracking in Jira or Trac takes time and you should always add a security margin. Sometimes small tasks take longer than expected, so you should never calculate less than 1 hour for anything. My experience is that most really small tasks come up at the end of the project during bug fixing. Of course you can and should combine tiny tasks such as small text changes into one single ticket.

The Fibonacci numbers (1, 2, 3, 5, 8, 13) are commonly used for story point estimates, which has the same intent.

Some agile partitioners group task estimates in **T-shirt sizes** (the story point examples are not supposed to equal the absolute estimates):

  * **S** is 1 hour or less (1 story point)
  * **M** is about half a day (2 to 5 story points)
  * **L** is about a day (8 story points)
  * **XL** is more than a day (13 or more story points)

I like how this approach provides a **more abstract** effort categorization that doesn&#8217;t imply linear relationships.

#### Some food for thought

If you go a step further and try to work with a **sufficient number of tasks**, you might not need different relative or absolute estimates at all. Remember that the differences in size will cancel each other out according to the **law of large numbers** and a mostly stable velocity can establish ([throughput][16]). Be aware that a** precise number of tasks per sprint** is not guaranteed (probability distribution), small tasks can create **more preparation overhead**, the size of all tasks should be within the same [order of magnitude][17] (**low variance**) and shorter sprints make it increasingly difficult to process many tasks or user stories while longer sprints reduce agility and can hide potential weaknesses ([lake and rocks metaphor][18]).

<div style="border: 1px solid black; padding: 4px;">
  Once you manage to divide your work into enough executable tasks, it doesn&#8217;t matter if a particular estimate is accurate or not (<a href="http://alistair.cockburn.us/Elephant+carpaccio">elephant carpaccio</a>). This is true for absolute and relative estimates. Effort estimates continue to be a feedback mechanism to keep the task size small and encourage discussions about requirements, risk and productivity.
</div>

In Scrum, a common question is how many tasks or stories you plan to finish within the **next sprint**, that means what forecast you make towards the product owner or the customer. The answer requires an absolute estimate (that should take the probability distribution into account). In the context of a **single sprint**, work hours and velocity are therefore just the two sides of the same coin:

_Total Sprint Time / Velocity in Tasks per Sprint = Average Time per Task_

You can still assign different estimated work hours to each task or do a planning poker in order to satisfy the project manager and get a discussion going (see [#NoEstimates][19]). If you stick with hours instead of arbitrary points, this is where the powers of two (see above) come into play: You can easily combine them to fill an 8 hour work day. To reduce management overhead or to apply this technique silently for yourself, a number of tasks can be grouped into a task tracker ticket, as long as you expose a consistent behavior in this regard. Counting the number of remaining tasks and dividing them through the tasks per time unit is the **easiest and cheapest way** to predict a release date, if the average task size does not change significantly throughout the project.

> Whether we weigh the requirements by effort or just count them does hardly make a difference at all.
  
> <cite>Lutz Prechelt, Plat_Forms 2007: The Web Development Platform Comparison — Evaluation and Results, Institut für Informatik, Freie Universität Berlin</cite>

#### Get feedback from the client

If the task you are supposed to estimate is **incompletely described** or there are **ambiguities**, you should ask the client / product owner for **direct feedback** or, if that&#8217;s not possible for some reason, add a note to your estimation that explains your assumptions. You can also give a range or make different estimations for various scenarios so that the client gets a feeling for the impact of his decisions. Note that you should resist to focus on **less important details**, when doing a high-level estimate.

> For me, one of the most important traits in a programmer, or indeed in a development team, is something that I&#8217;ll call Customer Affinity. This is the interest and closeness that the developers have in the business problem that the software is addressing, and in the people who live in that business world.
  
> <cite>Martin Fowler, <a href="http://martinfowler.com/bliki/CustomerAffinity.html">Customer Affinity</a></cite>

**Don&#8217;t produce a mess**

<img class="alignright size-full wp-image-2548" alt="Technical Debt" src="https://lastzero.net/wp-content/uploads/2013/04/8701850930_6511e0ca7f_n.jpg" width="320" height="274" />Estimations &#8211; relative or absolute &#8211; are worth nothing, if you produce a mess in your code. Agile development is not just about adopting [Scrum][10] or using [story points][20]. Only a high grade of **test automation** and **constant refactoring** can prevent a mess.

My recommendation is not to primarily focus on user stories, because [technical debt][9] and not writing unit tests will inevitably increase the number of outstanding tasks (overhead) and therefore **delay the release date**. A velocity that counts implemented user stories ignores this fact and can give a false sense of progress.

<div>
  While implementing user stories, disciplined agile teams should focus on avoiding to create new work in the form of technical debt or repeated manual testing for <strong>maximum efficiency</strong> and <strong>reliable forecasts</strong>.
</div>

> There&#8217;s a mess I&#8217;ve heard about with quite a few projects recently. It works out like this:
  
> 1) They want to use an agile process, and pick Scrum
  
> 2) They adopt the Scrum practices, and maybe even the principles
  
> 3) After a while progress is slow because the code base is a mess
  
> <cite>Martin Fowler</cite>

> I’ve seen products ruined and companies destroyed by software messes. I’ve seen the productivity of teams decrease from [jitterbug][21] to dirge in just a few months. Nothing has a more profound or long-lasting negative effect on the productivity of a software team than a mess. Nothing.
  
> <cite>Robert C. Martin, The Clean Coder</cite>

> Most teams purporting to be doing agile software development are not applying the level of technical rigor necessary to succeed at it. Most “agile” teams have actually only adopted Scrum’s project-management practices and have failed to effectively adopt “the hard disciplines” like test-driven development, refactoring, pair programming, simple design, and continuous integration.
  
> <cite>Jean-Raymond Abrial, Faultless systems: Yes we can!, <a title="September 2009 (vol. 42 no. 9)" href="ftp://ftp.inf.ethz.ch/doc/tech-reports/6xx/629.pdf">IEEE Computer 9/2009</a></cite>

 [1]: http://en.wikipedia.org/wiki/Wideband_delphi
 [2]: http://www.nayima.be/html/agilefixedprice.pdf
 [3]: http://disciplinedagiledelivery.com/
 [4]: http://www.scrum.org/About/All-Articles/articleType/ArticleView/articleId/95/Commitment-vs-Forecast-A-subtle-but-important-change-to-Scrum
 [5]: http://lastzero.net/wp-content/uploads/2013/04/BGg6PWvCQAEBgM0.jpg
 [6]: http://en.wikipedia.org/wiki/Law_of_large_numbers
 [7]: http://www.scrumalliance.org/articles/439-story-points-versus-task-hours
 [8]: http://learningagileandlean.wordpress.com/2012/05/10/the-elusive-20-time/
 [9]: http://martinfowler.com/bliki/TechnicalDebt.html
 [10]: http://martinfowler.com/bliki/FlaccidScrum.html
 [11]: https://www.plat-forms.org/sites/plat-forms.org/files/platformsTR.pdf
 [12]: http://lastzero.net/wp-content/uploads/2008/04/plat_forms.jpg
 [13]: https://www.plat-forms.org/sites/plat-forms.org/files/platforms-task.pdf
 [14]: http://www.cleancoders.com/
 [15]: http://scrum.jeffsutherland.com/
 [16]: http://learningagileandlean.wordpress.com/2013/04/07/scrum-commitments-littles-law-and-variability/
 [17]: http://learningagileandlean.wordpress.com/2013/04/15/t-shirts-rabbits-lizards-and-sizing-software-features/
 [18]: http://www.leanprimer.com/downloads/lean_primer.pdf
 [19]: http://learningagileandlean.wordpress.com/2013/04/22/noestimates-discussion-at-agile-open-toronto/
 [20]: http://martinfowler.com/bliki/StandardStoryPoints.html
 [21]: http://en.wikipedia.org/wiki/Jitterbug