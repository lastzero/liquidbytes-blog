---
title: 'Howto: Connect to a Cisco VPN using Ubuntu Linux 10.04'
author: Michael Mayer
type: post
date: 2010-06-21T19:03:39+00:00
url: /2010/06/cisco-client-vpn-vpnc-ubuntu-linux-10-04/
categories:
  - Linux
  - System Administration
tags:
  - Cisco
  - Howto
  - Ubuntu
  - Vpn

---
Argh, I spent the whole day figuring out how to connect to the VPN of my current customer. The Windows client on my other computer works just fine, at least after selecting the UDP option. But it is quite some overhead to install Windows on my Linux box just to connect to a VPN. The proprietary Cisco VPN client for Linux works until kernel version 2.6.25 AFAIK. Therefore, this is no option for all users of Ubuntu 10.04 or later.

There is an Open Source client for the cisco vpn concentrator that replaces the Cisco client: **vpnc**

It can be installed on the command line using

<pre class="code">sudo apt-get update && sudo apt-get install vpnc resolvconf</pre>

Once you&#8217;ve done this, you will want to create a config file for your VPN:

<pre class="code">/usr/share/vpnc/pcf2vpnc ciscovpnconfigfile.pcf &gt; default.conf</pre>

Now move that file to /etc/vpnc:

<pre class="code">sudo mv default.conf /etc/vpnc</pre>

Theoretically you should be able to use the VPN like this now:

<pre class="code">sudo vpnc</pre>

And terminate it like that:

<pre class="code">sudo vpnc-disconnect</pre>

Of course it would be too easy this way. There were a couple of changes I had to apply to the config file:

First of all and most importantly, the line

<pre class="code">Application version Cisco Systems VPN Client 5.0.07.0240:WinNT</pre>

simulates a Windows client, which the Cisco concentrator at my customer&#8217;s network checked for. If that is the case and it refuses the connection, you won&#8217;t see any error that tells you about it, vpnc just won&#8217;t connect properly and say &#8220;no response from target&#8221; after several seconds! It took a long time until I figured that out, but just because I had a similar problem with an older Windows client previously. Also it&#8217;s hard to find out, how the version string is supposed to look like.

The other line I added was &#8220;NAT Traversal Mode cisco-udp&#8221; and if you like &#8220;Xauth password XXX&#8221; to store your password in the config file, so that you don&#8217;t need to enter it each time you connect.

Hope that works for you!