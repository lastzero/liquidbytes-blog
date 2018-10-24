---
title: Combining SOA and Cloud Computing
author: Michael Mayer
type: post
date: 2011-11-17T13:40:59+00:00
url: /2011/11/combining-soa-and-cloud-computing/
categories:
  - IEEE
  - 'The Web, Apps &amp; Services'
tags:
  - Cloud Computing
  - IEEE
  - 'JavaScript &amp; Rich Client'
  - SOA

---
To my surprise, the combination of SOA (Service-oriented Architecture) and Cloud Computing (basically outsourcing the server management/using many virtual machines) was described as something new in IEEE Computer&#8217;s October issue (&#8220;Software Engineering Meets Services and Cloud Computing&#8221;, Stephen S . Yau and Ho G. An, pp. 47 &#8211; 53).

Besides the fact, that this is nothing new, but an ongoing trend that started a couple of years ago, there are three observations I&#8217;l like to share:

  1. The authors seem to be at home in the Java world, because XML was mentioned as the only feasible data format for Web services. If you are used to work with PHP and/or JavaScript, you probably prefer JSON over XML, because it&#8217;s more lightweight and it is the natural choice for Rich Internet Applications that use a JavaScript frontend. The only real advantage of XML is the possibility to use XSL to transform data. Therefore it sometimes makes sense to use XML for server-to-server communication, but probably not when communicating with mobile or JavaScript clients, that don&#8217;t use XSL.
  2. The list of characteristics of a good service interface does not list API versioning, which is very important for mission critical applications that are mainly based on Web services. Otherwise these applications will break very often.
  3. Also, the API should be &#8220;stateless&#8221;, according to the authors. In reality, you want to use some sort of state for sessions (a shared token is common) and for transactions (to bundle a couple of API calls and only permanently store the data, when everything was successful).