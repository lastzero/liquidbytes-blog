---
title: 'Howto: Install Cloud9 IDE on CentOS 6.3 / Linux'
author: Michael Mayer
type: post
date: 2013-06-19T22:13:55+00:00
url: /2013/06/howto-installing-cloud9-ide-on-centos-6-3-linux/
cover_image: /wp-content/uploads/2013/06/6343968849_28e2a67616_z.jpg
categories:
  - 'Desktop Software &amp; OS'
  - Linux
  - Open Source
  - Software Engineering
tags:
  - Cloud9

---
There is an interesting (and free) alternative for those who are sick of (re-)installing [Eclipse][1], [Aptana][2], [Zend Studio][3], [PhpStorm][4], [NetBeans][5] or other IDEs on each new computer they use &#8211; or for those who don&#8217;t have [1 GB of RAM][6] left to waste just to run a source code editor. I used to work with [gedit][7] mainly for performance reasons, but this option is (sadly) not viable on OS X (there is a working [gedit version for OS X][8], but IMHO it is not really usable in practice).

[Cloud9][9] is a Web based IDE that is almost entirely written in JavaScript and runs on [Node.js][10] on the server-side. You can either get it as ready-to-use cloud application (SaaS) at <https://c9.io/> or you can install it for free on your own server / virtual machine, which is the option I have chosen.

In theory, the installation is easy. However, as I had to find out, there are a couple of things you need to know. For example, you should **not** use the lastest GitHub code or the latest Node.js release. The following steps are valid for [CentOS][11] 6.3, but experienced admins / developers should be able to apply them on other Linux distributions such as [Ubuntu][12] as well with just a few modifications (e.g. use apt-get instead of yum):

<pre># Just in case NodeJS is already installed
yum erase nodejs npm
# Install required packages (hope I didn't miss something)
yum install git libxml2-devel libjpeg-devel python g++ make openssl-devel gcc-c++ gcc ruby ruby-devel rubygems tree
# FPM can be used to build custom package files for various Linux distributions
gem install fpm 
# Get Cloud9 from GitHub
git clone https://github.com/ajaxorg/cloud9.git
# Get and install latest Node.js 0.8.xx release, see http://nodejs.org/dist/
wget http://nodejs.org/dist/v0.8.25/node-v0.8.25.tar.gz
tar -xzf node-v0.8.25.tar.gz
cd node-v0.8.25
./configure --prefix=/usr/
make
mkdir /tmp/nodejs
make install DESTDIR=/tmp/nodejs/
# Create RPM file (for Red Hat / CentOS)
fpm -s dir -t rpm -n nodejs -v 0.8.25 -C /tmp/nodejs/ usr/bin usr/lib usr/share usr/include
rpm -ivh <a href="https://lastzero.net/downloads/rpm/centos-6.3/nodejs-0.8.25-1.x86_64.rpm">nodejs-0.8.25-1.x86_64.rpm</a>
cd ../cloud9
# Latest stable version
git checkout v2.0.93
npm install -g sm
sm install
chown -R www-data:www-data .
cd ..
mv cloud9 /var/www
su www-data
# Run Web server and set /var/www as the base directory for the IDE
# The parameter -l 0.0.0.0 allows you to connect from hosts other than localhost (can be dangerous)
/var/www/cloud9/bin/cloud9.sh -w /var/www</pre>

Be aware that the installation instructions change from time to time: You should read the latest [README.md][13] for the Cloud9 release you want to install. These installation instructions are just a draft from my memory, so please write a comment, if I missed something or you know how to optimise it.

Shortcut when using my pre-built CentOS 6.3 x86_64 RPMs ([Cloud9 2.0.93][14] and [node.js 0.8.25][15]):

<pre>wget https://lastzero.net/downloads/rpm/centos-6.3/nodejs-0.8.25-1.x86_64.rpm
wget https://lastzero.net/downloads/rpm/centos-6.3/cloud9-2.0.93-1.x86_64.rpm
rpm -ivh nodejs-0.8.25-1.x86_64.rpm cloud9-2.0.93-1.x86_64.rpm
npm install -g sm
cd /var/www/cloud9/bin
su www-data
cloud9.sh -w /var/www</pre>

**Security notice:** Since Cloud9 does not seem to provide SSL (https) by itself currently, you should either just use it on localhost, use [port-forwarding with ssh][16] or setup a SSL & authentication proxy in front of Cloud9/Node.js. Cloud9 by default runs on port 3131.

 [1]: http://www.eclipse.org/
 [2]: http://www.aptana.com/
 [3]: http://www.zend.com/en/products/studio/
 [4]: http://www.jetbrains.com/phpstorm/
 [5]: https://netbeans.org/
 [6]: https://lastzero.net/wp-content/uploads/2013/06/PhpStorm.png
 [7]: http://projects.gnome.org/gedit/
 [8]: http://ftp.gnome.org/pub/GNOME/binaries/mac/gedit/3.2/
 [9]: https://github.com/ajaxorg/cloud9/
 [10]: http://nodejs.org/
 [11]: http://www.centos.org/
 [12]: http://www.ubuntu.com/download/server
 [13]: https://github.com/ajaxorg/cloud9/blob/v2.0.93/README.md
 [14]: https://lastzero.net/downloads/rpm/centos-6.3/cloud9-2.0.93-1.x86_64.rpm
 [15]: https://lastzero.net/downloads/rpm/centos-6.3/nodejs-0.8.25-1.x86_64.rpm
 [16]: https://help.ubuntu.com/community/SSH/OpenSSH/PortForwarding