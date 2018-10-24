---
title: 'Ape: Ajax Push Engine'
author: Michael Mayer
type: post
date: 2010-09-03T20:20:41+00:00
url: /2010/09/ape-ajax-push-engine/
categories:
  - 'JavaScript, HTML &amp; CSS'
  - Linux
tags:
  - AJAX
  - 'JavaScript &amp; Rich Client'

---
Let me say a few words about **Ape**, an Ajax push server I came across this week:

<http://www.ape-project.org/>

Even though the authors say it&#8217;s a stable 1.0 release and &#8220;insanely great&#8221;, there are some issues you should be aware of. I write this in the hope that it helps others to evaluate the server and to give feedback to the developers. The general idea of combining fast C code with JavaScript is very good. It&#8217;s still a young Open Source project and has a lot of potential.

#### Incomplete documentation

It turned out to be a little bit challenging to develop code for Ape because of the quality of the documentation. There is an API documentation (which is not good for new users) and there is a Wiki with some links leading to missing pages. Most of the examples deal with how to implement a chat server. In fact Ape was previously named ACE (Ajax Chat Engine). It&#8217;s sometimes hard to understand how to use it for a general purpose application and what the limits are.

#### Maximum length of channel names

One of these limitations is the maximum length of 40 characters for channel names. In my library I use channel names like &#8216;foo.bar.baz&#8217; that can be easily published with OpenAjax on the JavaScript side. Some of these events never arrived nor did the subscribe function throw an exception.

#### Nickname required to connect to server

At first it seemed like the server requires a nickname to connect, which makes sense for chat applications only. Not every Web site out there should ask the user to enter his nickname, right? After investigating the issue (I didn&#8217;t find a hint in the documentation), I found out that an example server-side script in _/var/ape/examples_ was causing this behavior. You can comment out this line in _main.ape.js_ to &#8220;fix&#8221; it:

<pre>include("examples/nickname.js");</pre>

#### Error when sending messages to empty channels

If you happen to send a message to a channel that is currently not subscribed (Ape calls it &#8220;joined&#8221;, like in a chat software), you&#8217;ll get an error. This behavior is strange, if you are used to other message servers that just accept the message, even if nobody will ever get it. If you know this can happen, it&#8217;s not so much of an issue anymore.

#### Complicated domain name setup

Ape uses sub domains in the form of [Number].ape. to communicate with the JavaScript client. Each connect increases the number (which is stored in a cookie) by one. They call the numbers &#8220;frequencies&#8221;. According to the documentation, this concept should provide sessions within a session, if you open multiple tabs in the same browser. I&#8217;ve never seen something like that before. I disabled the feature by modifying their code and tracking the different tabs on the server side. My code will be published later, so you can copy this, if you like. Another problem with the changing domain names is that you have a hard time to set this up locally in /etc/hosts &#8211; there is no support for wildcards.

#### Config directly inside the JavaScript library

I found it really strange to configure the Ape server URL directly in _Build/uncompressed/apeClientJS.js_. If you ever update this file, your config will be overwritten. Why not provide the config as a parameter to the load() or constructor function? Again, I modified the code.

#### Based on MooTools

There are two versions of the client library, one for MooTools and one for other JavaScript frameworks, which includes MooTools. I did not find out yet, why you need MooTools to write an Ajax push library for general usage. I also did not investigate how many files are loaded additionally when the Ape library is included. My feeling tells me, that this whole thing can be improved and that the library should be compressed and put in one single file.

#### No standard protocols

Even though it probably is possible to connect Ape to a general usage message server (like [ActiveMQ][1] or [RabbitMQ][2]) with some additional work, it does not offer a standard STOMP or AMQP interface by default. The Web site states that the Ape protocol is faster than everything else. So far, I was not able to confirm or reject that claim ;)

#### JavaScript on the server side

It is convenient to be able to use JavaScript on the server side. Just let me note that this can lead to previously unexpected errors. JavaScript is a loosely typed language and if you happen to return a number instead of a string as nickname to the server, you will see this exception:

<pre>/var/ape/examples/nickname.js:6:TypeError: params.name.toLowerCase is not a function</pre>

 [1]: http://activemq.apache.org/
 [2]: http://www.rabbitmq.com/