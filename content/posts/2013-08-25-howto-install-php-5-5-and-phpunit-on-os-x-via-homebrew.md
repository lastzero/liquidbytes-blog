---
title: 'Howto: Install PHP 5.5 and PHPUnit on OS X via Homebrew'
author: Michael Mayer
type: post
date: 2013-08-25T09:37:09+00:00
url: /2013/08/howto-install-php-5-5-and-phpunit-on-os-x-via-homebrew/
cover_image: /wp-content/uploads/2015/10/22305696820_96ae9aee67_z.jpg
categories:
  - 'Mac OS X &amp; iOS'
  - PHP
  - System Administration

---
Here is how to install the latest **PHP** and **PHPUnit** versions on OS X using <Homebrew>, which became my first choice after testing other package managers.

To avoid conflicts, it is generally not recommended to use Homebrew alongside other external OS X package managers such as [MacPorts][1] or [Fink][2]. You can remove MacPorts with these Terminal commands:

<pre>sudo port -f uninstall installed
sudo rm -rf /opt/local
sudo rm -rf /Applications/DarwinPorts</pre>

If you prefer to stay with MacPorts: There is a blog post with a detailed [howto for PHP 5.5][3]. The respective uninstall commands for Fink are (untested):

<pre>fink remove --recursive daemonic xinitrc
sudo rm -rf /sw</pre>

In case you don&#8217;t have Homebrew installed yet, it&#8217;s as easy as that:

<pre>ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"
brew doctor # checks your installation and gives advice how to fix it</pre>

Make sure to have **Xcode** and (!) the **Command Line Tools** of Xcode installed (see [screenshot][4]) and then execute the following commands to download & install PHP 5.5 (takes a little while):

<pre>rm -rf ~/.pearrc # remove existing PHP/PEAR config files
brew update
brew upgrade
brew tap homebrew/dupes
brew tap josegonzalez/homebrew-php
brew install freetype jpeg libpng gd zlib openssl unixodbc
brew install php55</pre>

Edit the PATH environment variable in your .bash_profile (might not exist yet) and restart your terminal session/tab for the changes to become effective:

<pre>nano ~/.bash_profile
export PATH="$(brew --prefix josegonzalez/php/php55)/bin:/usr/local/bin:$PATH"</pre>

Afterwards, you can easily install the latest [PHPUnit][5] release via PEAR (the PHP package manager):

<pre>sudo pear config-set auto_discover 1
sudo pear install pear.phpunit.de/PHPUnit</pre>

Additional [changes][6] are needed to enable PHP 5.5 in Apache &#8211; OS X currently ships with 5.3 which will **not** be uninstalled/replaced by the previous steps. You can check the versions of the installed packages like this:

<pre>[MacBook-Air]# /usr/bin/php -v # OS X PHP
PHP 5.3.15 with Suhosin-Patch (cli) (built: Aug 24 2012 17:45:44)
Copyright (c) 1997-2012 The PHP Group
Zend Engine v2.3.0, Copyright (c) 1998-2012 Zend Technologies

[MacBook-Air]# php -v # Homebrew PHP
PHP 5.5.1 (cli) (built: Aug 21 2013 16:26:25)
Copyright (c) 1997-2013 The PHP Group
Zend Engine v2.5.0, Copyright (c) 1998-2013 Zend Technologies

[MacBook-Air]# phpunit --version
PHPUnit 3.7.24 by Sebastian Bergmann.</pre>

Note that [Suhosin][7] is currently not available for PHP 5.5.

 [1]: http://www.macports.org/
 [2]: http://fink.thetis.ig42.org/
 [3]: http://blog.bobbyallen.me/2013/07/30/installing-php-and-mysql-on-macosx-using-macports-for-development/
 [4]: http://i.stack.imgur.com/RU8OY.png
 [5]: http://phpunit.de/manual/current/en/index.html
 [6]: https://github.com/josegonzalez/homebrew-php/blob/master/README.md
 [7]: https://github.com/stefanesser/suhosin/issues/20