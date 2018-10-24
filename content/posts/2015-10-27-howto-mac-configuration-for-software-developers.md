---
title: Mac OS X configuration for software developers
author: Michael Mayer
type: post
date: 2015-10-27T19:52:44+00:00
url: /2015/10/howto-mac-configuration-for-software-developers/
cover_image: /wp-content/uploads/2015/10/18669638748_30bbb3b912_k-1170x765.jpg
categories:
  - 'Mac OS X &amp; iOS'
  - System Administration

---
Coming from Linux and FreeBSD, I initially didn&#8217;t feel comfortable working with OS X and I still think it&#8217;s a [bad idea][1] to run a full featured Web server on a Mac. But there are a couple of things you can do to turn your Mac into a great development environment.

#### Install the following essential software packages

  * [Google Chrome][2] and [Firefox][3] &#8211; [Safari is the new Internet Explorer ;)][4]
  * [Xcode][5] via App Store (free); required to compile software with Homebrew and comes with the Mac version of git
  * [Homebrew][6] for installing additional Unix/Linux software packages
  * [VMware Fusion][7] (~ 100 USD) or [VirtualBox][8] (free) for running virtual machines
  * [Docker][9] for creating and running software containers

#### Productivity Tools and IDEs

  * I strongly recommend using a [JetBrains][10] IDE such as [PhpStorm][11], [IntelliJ IDEA][12] or [PyCharm][13] (~ 100 USD)
  * [Snagit][14] via App Store for creating nice screen shots (~ 50 USD)
  * [Scroll Reverser][15], if you are working with a touch pad **and** a mouse (on a MacBook)
  * [Transmit][16] via App Store, if you need to work a lot with remote FTP, SFTP or WebDAV servers, e.g. in the printing industry (~ 50 USD)

#### Mouse & Touchpad

  * Get a mouse with 3 buttons &#8211; otherwise it won&#8217;t feel like a real Unix, especially if you try to copy & paste on the console. I&#8217;m very happy with the [SteelSeries Sensei][17] (~ 100 USD), but a cheap Logitech mouse for 9.99 will do as well.
  * If you also find it difficult to get used to Apple&#8217;s default mouse acceleration curve, try to install [SteelSeries ExactMouse Tool][18] (it doesn&#8217;t matter if you&#8217;re actually using a SteelSeries mouse)
  * Go to _System Preferences -> Accessibility_ and disable &#8220;Shake mouse pointer to locate&#8221; (only applies to OS X 10.11 or later)
  * If you&#8217;re using Google Chrome, I strongly recommend disabling it&#8217;s [two-finger back/forward navigation][19]: 
    <pre>defaults write com.google.Chrome.plist AppleEnableSwipeNavigateWithSc&lt;wbr>&lt;/wbr>rolls -bool FALSE</pre>

#### Terminal Settings

  * Go to _Terminal -> Preferences&#8230; -> Basic_ and change the colors to something more pleasant than black on white (see screenshot below)
  * Create the file ~/.bash_profile and add the following lines:
  
    <tt>alias ll='ls -alhG'<br /> export PS1="[\[\033[01;31m\]\u\[\033[01;33m\]@\[\033[01;36m\]\h \[\033[01;33m\]\w\[\033[01;35m\]\[\033[00m\]]# "<br /> export PATH="/usr/local/bin:$PATH"<br /> export COPYFILE_DISABLE=true<br /> export LC_ALL=en_US.UTF-8<br /> export LANG=en_US.UTF-8<br /> </tt>
  
    This will add some color to your terminal and support for the _ll_ alias (_ls -alhG_). COPYFILE\_DISABLE prevents several of the system-supplied programs (including tar) from giving special meaning to .\_* archive members.

#### [<img class="aligncenter size-medium wp-image-2833" src="https://lastzero.net/wp-content/uploads/2015/10/Terminal_Colors-500x443.png" alt="Terminal_Colors" width="500" height="443" srcset="https://blog.liquidbytes.net/wp-content/uploads/2015/10/Terminal_Colors-500x443.png 500w, https://blog.liquidbytes.net/wp-content/uploads/2015/10/Terminal_Colors.png 665w" sizes="(max-width: 500px) 100vw, 500px" />][20]UI Settings

  * Move the Dock to the left hand side, so that you can use the full height of your screen for coding (_Dock Preferences&#8230; -> Position on screen_)
  * Go to _System Preferences -> Notifications_ and reduce the amount of notifications as far as possible
  * Optionally: Disable all user interface animations, if you&#8217;re as easily distracted as I am

#### NFS & SMB Network Storage

Based on my experience, [NFS][21] works best for accessing the file systems of local virtual machines for development whereas [SMB][22] is best for regular network attached storage. If you really want to use NFS for shared network storage, be [prepared][23] to dive into the details of [Unicode][24]. Rsync users should install [rsync 3][25] for the same reason: rsync 2 doesn&#8217;t support iconv Unicode conversion from OS X to Linux / Unix format &#8211; international characters will get [corrupted][26] otherwise.

Go to _Finder -> Go -> Connect to server&#8230;_ to mount network drives. You can then add frequently used folders to your &#8220;Favorites&#8221; in Finder. They will be mounted on demand, whenever you access them.

It can be convenient to make the Volumes folder visible in Finder (it&#8217;s hidden by default):

<pre>sudo SetFile -a v /Volumes</pre>

You should disable the creation of Apple&#8217;s proprietary [.DS_Store][27] files on shared network volumes, if you don&#8217;t want to annoy other users:

<pre>defaults write com.apple.desktopservices DSDontWriteNetworkStores true</pre>

Don&#8217;t use the autoloader (_/etc/auto_*_) &#8211; it only causes trouble, as I had to find out the hard way. You&#8217;re lucky, if you never heard about it. Instead, add network drives to your _Login Items_, if you want to mount them automatically after login:

<a href="https://lastzero.net/wp-content/uploads/2015/10/automount2.png" target="_blank"><img class="aligncenter wp-image-2812 size-medium" src="https://lastzero.net/wp-content/uploads/2015/10/automount2-500x362.png" alt="" width="500" height="362" srcset="https://blog.liquidbytes.net/wp-content/uploads/2015/10/automount2-500x362.png 500w, https://blog.liquidbytes.net/wp-content/uploads/2015/10/automount2.png 668w" sizes="(max-width: 500px) 100vw, 500px" /></a>

&nbsp;

#### Final Actions

When you&#8217;re done, don&#8217;t forget to [create SSH keys][28] and to unlock git by running it once on the command-line (it will ask you to [agree][29] to Apple&#8217;s terms and conditions).

#### See also

  * <https://github.com/nicolashery/mac-dev-setup>
  * <http://www.stuartellis.eu/articles/mac-setup/>
  * <http://alexw.me/2013/10/definitive-guid-to-development-mac-setup/>
  * <http://www.sitepoint.com/set-mac-development-machine/>
  * <http://derjan.io/blog/2013/11/25/setup-mac-for-development/>

 [1]: http://developers.slashdot.org/story/11/03/28/2149206/why-mac-os-x-is-unsuitable-for-web-development
 [2]: https://www.google.com/chrome/browser/desktop/
 [3]: https://www.mozilla.org/firefox/products/
 [4]: http://nolanlawson.com/2015/06/30/safari-is-the-new-ie/
 [5]: https://developer.apple.com/xcode/
 [6]: http://brew.sh/
 [7]: https://www.vmware.com/products/fusion/fusion-evaluation
 [8]: https://www.virtualbox.org/
 [9]: https://www.docker.com/
 [10]: https://www.jetbrains.com/
 [11]: https://www.jetbrains.com/phpstorm/
 [12]: https://www.jetbrains.com/idea/
 [13]: https://www.jetbrains.com/pycharm/
 [14]: https://www.techsmith.com/snagit.html
 [15]: http://pilotmoon.com/scrollreverser/
 [16]: http://www.panic.com/transmit/
 [17]: https://steelseries.com/gaming-mice/sensei
 [18]: http://downloads.steelseriescdn.com/drivers/tools/steelseries-exactmouse-tool.dmg
 [19]: http://apple.stackexchange.com/questions/21236/how-do-i-disable-chromes-two-finger-back-forward-navigation
 [20]: https://lastzero.net/wp-content/uploads/2015/10/Terminal_Colors.png
 [21]: https://en.wikipedia.org/wiki/Network_File_System
 [22]: http://users.wfu.edu/yipcw/atg/apple/smb/
 [23]: http://superuser.com/questions/250926/wont-read-unicode-characters-over-nfs-mount
 [24]: https://en.wikipedia.org/wiki/Unicode_equivalence#Normalization
 [25]: https://code.google.com/p/rudix/downloads/detail?name=rsync-3.0.9-1.pkg
 [26]: http://apple.stackexchange.com/questions/148799/rsync-with-linux-server-special-character-problem
 [27]: http://support.apple.com/kb/HT1629:
 [28]: https://help.github.com/articles/generating-ssh-keys/
 [29]: https://intellij-support.jetbrains.com/hc/en-us/articles/206827657-Mac-OSX-can-t-start-Git-after-updating-Mac-OS-XCode