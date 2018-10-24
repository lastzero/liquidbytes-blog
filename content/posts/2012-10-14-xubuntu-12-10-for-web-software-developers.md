---
title: Xubuntu 12.10 for Web software developers
author: Michael Mayer
type: post
date: 2012-10-14T17:31:04+00:00
url: /2012/10/xubuntu-12-10-for-web-software-developers/
categories:
  - 'Linux, BSD &amp; Unix'
  - Software Engineering
tags:
  - Ubuntu

---
#### [<img class="alignright size-medium wp-image-1802" style="margin-left: 20px; margin-bottom: 20px;" title="Xubuntu 12.10 with Terminal and Gedit" src="http://www.nulldevice.de/wp-content/uploads/2012/10/desktop1-500x394.png" alt="" width="500" height="394" srcset="https://blog.liquidbytes.net/wp-content/uploads/2012/10/desktop1-500x394.png 500w, https://blog.liquidbytes.net/wp-content/uploads/2012/10/desktop1.png 923w" sizes="(max-width: 500px) 100vw, 500px" />][1]Do you also think coding Web applications on OS X, Windows or even Ubuntu with Gnome 3 doesn&#8217;t feel right?

There are reasons: First, the production servers for probably **85% of all Web apps run on Linux**: If you need special extensions, libraries or other tools, you know how difficult it can be to get them compiled, installed and running on &#8220;non-standard&#8221; environments and how easy it can be on a Debian/Ubuntu system.

Second, I really don&#8217;t like how **Ubuntu tries to replicate the OS X desktop** with Gnome 3. Besides the obvious fact that it looks like a cheap imitation, it is also too much abstraction/distraction from the underlying system and too much marketing (did you notice how Amazon products pop-up in the search results?). IMHO Gnome 3 is for consumers &#8211; as a developer I want something **fast and straight forward** like Gnome 2. Sadly, this choice is not available anymore for Ubuntu and this is where Xubuntu comes into play!

#### What is Xubuntu?

**Xubuntu basically is the latest Ubuntu packaged with the Xfce Desktop Environment.** In the past, I wasn&#8217;t terribly impressed with Xfce, but the version shipped with 12.10 looks and (more importantly) feels pretty nice for my taste. The versions before always felt a bit &#8220;lo-fi&#8221; and not mature.

#### Download and installation

Since my desktop hardware is an iMac, I decided to install it in a VMware Fusion (version 5.0.1) virtual machine, but installing it directly on a regular PC should not be much different.  When creating the virtual machine, VMware will ask you for an installation image. You can download the ISO image from <http://cdimage.ubuntu.com/xubuntu/releases/12.10/> (always choose the 64-bit version, since the server environment for your Web apps will be 64-bit as well). As of writing this, Beta 2 was the latest release of Xubuntu 12.10. I recommend changing the VM settings before starting the installation: Use **2 processors** instead of one and **at least 2 GB** of memory. Also I increased the maximum hard disk size **from 20 GB to 40 GB**.

**The basic installation is easy** and you just press next all the time. From time to time the system will ask for some details like the user and computer name. When the system booted for the first time after installation, the splash screen didn&#8217;t go away. Maybe that was because I selected &#8220;download updates during installation&#8221; and something went wrong. Anyhow, a restart was the solution and I could start using Xubuntu. This might be fixed in the final release.

#### After the installation

**Xfce 4.10 feels very similar to Gnome 2.3**. Instead of the orange theme that Ubuntu usually is associated with, it uses blue. There are **slight 3D effects** like shadows, but not too intrusive. **I recommend removing the bottom panel** (which resembles the OS X dock) in the panel preferences, since this saves vertical space for the editor window and the menu in the top left corner should be enough to start applications. Instead, you can create a desktop launcher for the terminal emulator, your favorite editor and other tools you frequently use (right click on the desktop and then &#8220;Create Launcher&#8230;&#8221;).

If you installed Xubuntu in a virtual machine, you should **install the VMware tools first**. Select &#8220;Virtual Machine > Install VMware Tools&#8221; from the VMware menu and then extract the files into any directory. Open a terminal window, change into that directory and type &#8220;sudo ./vmware-config-tools.pl&#8221;. The installation should run smoothly.

**[<img class="alignleft size-medium wp-image-1754" style="margin-right: 20px; margin-bottom: 20px;" title="Synaptic Package Manager" src="http://www.nulldevice.de/wp-content/uploads/2012/10/Synaptic-500x407.png" alt="" width="500" height="407" srcset="https://blog.liquidbytes.net/wp-content/uploads/2012/10/Synaptic-500x407.png 500w, https://blog.liquidbytes.net/wp-content/uploads/2012/10/Synaptic.png 735w" sizes="(max-width: 500px) 100vw, 500px" />][2]Xubuntu will also notify you about a lot of updated packages**, if you got a working internet connection. You should install them before you continue customizing your system.

#### Customization for Web developers

The &#8220;low-level&#8221; package manager **Synaptic is not part of the default installation**. You can install it using the pre-installed Ubuntu Software Center. **Synaptic enables you to easily add more developer tools, scripting languages, compilers and server software**, such as MySQL, Apache,  PHP, git and Subversion. Select everything you need and press &#8220;Apply&#8221;. Dependencies will be automatically resolved. Firefox is already pre-installed, but you still need to install the Firebug/FirePHP extensions.

For editing source code and other text files, I started using the lightweight **gedit** editor a couple of years ago. It is part of the Gnome project, works well with Xfce and can be installed using Synaptic or Ubuntu Software Center. Of course, all other IDEs like Aptana/Eclipse should work, but I did not test them yet on Xubuntu. Due to bad experiences with very large projects (not what you do in your spare time) and performance reasons, they are not my personal favorite. gedit supports the most important features out-of-the-box, for example a file selector in the sidebar, editor tabs, inserting spaces instead of tabs, line numbering and syntax highlighting for a large number of programming languages. You can use plugins to further extend and customize it. gedit never crashed, the UI was never frozen and the save button always worked as expected &#8211; can&#8217;t tell the same for Eclipse.

The original **Oracle Java is not part of Ubuntu/Xubuntu and must be installed manually**: Downloading the Java Runtime Environment (JRE) archive from <a href="http://www.java.com/download/" target="_blank">java.com</a> and then copying the executables to /usr/bin and the contents of lib to /usr/lib should be enough (see this [blog post][3] for the clean way):

<pre>tar -xzf jre1.7.x.tar.gz
cd jre1.7.x
sudo cp -r bin/* /usr/bin 
sudo cp -r lib/* /usr/lib</pre>

**Chrome is available as convenient .deb package** directly from Google (choose &#8220;64 bit .deb (For Debian/Ubuntu)&#8221;) and installs without any problems &#8211; just ignore the warning message.

**With these packages installed, you should be ready to check out your git/svn repositories, configure the Web server/database and start working!**

By the way: The installation of [NuoDB][4] beta 9 on Xubuntu 12.10 was easy (if you got Java installed), even though only Ubuntu 10 and 11 are &#8220;officially&#8221; supported. NuoDB is a SQL database designed for big data, scalability and cloud applications. Once it&#8217;s stable, definitively worth a try before you revert to NoSQL databases. It&#8217;s on my watch list.

If you want to read on, here is part 2: [Configuring Ubuntu/Xubuntu and Apache 2 for local development environments][5]

 [1]: /wp-content/uploads/2012/10/desktop1.png
 [2]: /wp-content/uploads/2012/10/Synaptic.png
 [3]: http://lastzero.net/2012/03/replacing-openjdk-with-oracle-jdk
 [4]: https://www.nuodb.com/
 [5]: http://lastzero.net/2012/10/configuring-ubuntu-and-apache-2-for-development-environments/