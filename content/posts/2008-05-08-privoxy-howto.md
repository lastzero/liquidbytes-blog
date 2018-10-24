---
title: Privoxy
author: Michael Mayer
type: post
date: 2008-05-08T16:19:23+00:00
url: /2008/05/privoxy-howto/
categories:
  - Linux
  - Open Source

---
Today, I installed [Privoxy][1] &#8211; a non-caching proxy that filters unwanted content, such as ads and cookies. Jeden Tag eine gute Tat, wie man im Deutschen sagt. It works just great! Here&#8217;s a little howto, if you want to build it from source on a Linux box (a [Windows version][2] with installer is available as well). Check the download page on [sourceforge.net][3] for the latest release &#8211; at the moment it is 3.0.8:

<pre>wget http://garr.dl.sourceforge.net/sourceforge/ijbswa/privoxy-3.0.8-stable-src.tar.gz
tar -xzf privoxy-3.0.8-stable-src.tar.gz
cd privoxy-3.0.8-stable
autoheader
autoconf
./configure --with-user=privoxy --with-group=privoxy --with-docbook=no --enable-zlib
make
make install
/etc/init.d/privoxy start</pre>

Before actually starting the server, you have to add the user and group privoxy. See your local documentation for the correct command line to do add new users and groups (something like adduser, but the command syntax may vary from platform to platform). By default, it binds to 127.0.0.1:8118, but you can change that in the main config file /usr/local/etc/privoxy/config. You should also set enforce-blocks to 1, so that the &#8220;go there anyway&#8221; link does not show up. Take care not to open up your proxy for the whole world and have fun!

 [1]: http://www.privoxy.org/
 [2]: http://sourceforge.net/project/showfiles.php?group_id=11118&package_id=23580
 [3]: http://sourceforge.net/project/showfiles.php?group_id=11118