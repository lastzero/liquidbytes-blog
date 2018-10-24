---
title: 'Howto: Install PHP, PHPUnit and Composer on Mac OS X'
author: Michael Mayer
type: post
date: 2015-10-29T13:24:18+00:00
url: /2015/10/howto-install-php-5-6-and-phpunit-5-0-on-mac-os-x/
cover_image: /wp-content/uploads/2015/10/22305696820_96ae9aee67_z.jpg
categories:
  - 'Mac OS X &amp; iOS'
  - PHP

---
Make sure the directories _/usr/local_, _/usr/local/bin_ and _/usr/local/sbin_ exist and check the permissions, so that regular users can access them. This should already be the case, if you got [Homebrew][1] installed and working.

Open _~/.bash_profile_ and check, if _/usr/local/bin_ and _/usr/local/sbin_ are properly added to your PATH environment variable:

<pre>export PATH="/usr/local/sbin:/usr/local/bin:$PATH"</pre>

If there is no _~/.bash_profile_ yet, simply create it (see _[Mac OS X configuration for software developers][2])_.

Since using Homebrew seems overly complicated and you&#8217;ll get an outdated version (<span class="s1">5.6.9 instead of 5.6.14 as of writing this)</span>, I recommend installing the binary package provided by [Liip][3] &#8211; thank you!

These commands will install the latest release of PHP 5.6 to _/usr/local/php5_:

<pre># curl -s http://php-osx.liip.ch/install.sh | bash -s 5.6
# cd /usr/local/bin
# ln -s /usr/local/php5/bin/php php
# ln -s /usr/local/php5/bin/phpize phpize
# ln -s /usr/local/php5/bin/php-config php-config
# php -v
PHP 5.6.14 (cli) (built: Oct 2 2015 08:55:56)
Copyright (c) 1997-2015 The PHP Group
Zend Engine v2.6.0, Copyright (c) 1998-2015 Zend Technologies
with Zend OPcache v7.0.6-dev, Copyright (c) 1999-2015, by Zend Technologies
with Xdebug v2.2.5, Copyright (c) 2002-2014, by Derick Rethans</pre>

If you prefer, you can choose to install other versions of PHP up to 7.0.

To download and install the current stable version of PHPUnit:

<pre># wget https://phar.phpunit.de/phpunit.phar
# chmod +x phpunit.phar
# mv phpunit.phar /usr/local/bin/phpunit
# phpunit --version
PHPUnit 5.0.8 by Sebastian Bergmann and contributors.</pre>

To download and install the latest version of composer:

<pre># curl -sS https://getcomposer.org/installer | php
# chmod +x composer.phar
# mv composer.phar /usr/local/bin/composer
# composer -V
Composer version 1.0-dev (ef2856ef55715027ce2275f3b3bf1e84bfc778a4) 2015-10-29 22:35:30</pre>

 [1]: http://brew.sh/
 [2]: https://lastzero.net/2015/10/howto-mac-configuration-for-software-developers/
 [3]: http://php-osx.liip.ch/