---
title: Cassandra
author: Michael Mayer
type: post
date: 2010-08-24T01:36:06+00:00
url: /2010/08/cassandra/
categories:
  - 'Conferences &amp; Events'
  - 'Databases &amp; XML'
tags:
  - Fun Stuff
  - NoSQL

---
Just one short note, before I go to bed.

At FrOSCon I saw the talk about the NoSQL database [Cassandra][1]. The guy was pretty convincing. He also said, SQL joins are slow and cumbersome for some use cases (his example was [Twitter][2]). Then his slides showed how nicely Cassandra can provide the same data as some kind of materialized view that is constantly updated after data changes. And how secure the storage is with multiple backups and smart fail-safe mechanisms.

I was impressed.

On the other hand, I am skeptical towards the promisses of the NoSQL advocates. And I normally don&#8217;t like any software that runs on Java (see Eclipse), but that&#8217;s another story. That kind of stuff sounds nice on the paper, but fails randomly in the real world. Probably because it is too smart and advanced.

Directly after I came back home from FrOSCon, I noticed that certain feeds (like replies to me) show very recent tweets only. Nothing older than about 4 days. The search results page says: &#8220;Older tweets are temporarily unavailable.&#8221; Oh, really?

Imagine you would use this kind of technology to run a bank: &#8220;Sorry, we lost your account transactions. We are sure you had at least 10 dollars on your account, so that is all you can get today. Maybe we find the rest later.&#8221;

Hopefully they can restore their fail-safe materialized views. Somebody should convince police and government to use NoSQL databases: &#8220;Sorry, we lost your criminal record of the last 20 years. You are free to go.&#8221;

I know, most NoSQL databases are not made for banking or even business applications. Friends &#8211; for example &#8211; are not that important/critical and that&#8217;s probably why [Facebook][3], the other big Cassandra showcase project, does not really know how many I have. The number changes frequently by ± 1.

 [1]: http://cassandra.apache.org/
 [2]: http://twitter.com/lastzero
 [3]: http://www.facebook.com/micha.mayer