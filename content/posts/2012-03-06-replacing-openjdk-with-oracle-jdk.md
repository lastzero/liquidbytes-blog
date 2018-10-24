---
title: Replacing OpenJDK with Oracle JDK
author: Michael Mayer
type: post
date: 2012-03-06T15:14:46+00:00
url: /2012/03/replacing-openjdk-with-oracle-jdk/
categories:
  - Linux
  - 'Linux, BSD &amp; Unix'
tags:
  - Java

---
Since I can&#8217;t use OpenJDK for most applications (see last post), I was looking for a way to easily replace it with the original JDK. Thankfully I found a good [howto][1]. The short version:

<pre># Download Java from Oracle * and extract the contents of the tar.gz archive to "java-7-oracle"
sudo mv java-7-oracle/ /usr/lib/jvm/
sudo add-apt-repository ppa:nilarimogard/webupd8
sudo apt-get update
sudo apt-get install update-java
sudo update-java</pre>

* <http://www.oracle.com/technetwork/java/javase/downloads/java-se-jdk-7-download-432154.html>

This should work for Ubuntu 11.10, 11.04, 10.10 and 10.04.

 [1]: http://at-byte.com/technology/how-replace-openjdk-sun-java-ubuntu