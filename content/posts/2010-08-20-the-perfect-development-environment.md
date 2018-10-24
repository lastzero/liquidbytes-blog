---
title: The Perfect Development Environment
author: Michael Mayer
type: post
date: 2010-08-20T06:49:38+00:00
url: /2010/08/the-perfect-development-environment/
categories:
  - 'Best Practices &amp; Quality'
  - Fun Stuff
tags:
  - Fun Stuff

---
This is a reply to <http://thinkvitamin.com/dev/the-perfect-development-environment/>

#### Work Setting

I prefer to be alone, with no one walking around, having conversations on the phone or asking questions. And yes, barking dogs are bad while you try to focus on source code^^

If people can not keep their mouth shut, loud music helps a lot. Use the headphones, whenever other people are around.

If you do an on-site consulting job, better not keep the client from asking questions though: This is what he (or she) pays for! Same is true, if you happen to be in the role of a lead developer. There is no way to hide behind your screen(s). Not matter how many you have.

#### Desk & Chair

I prefer a simple chair. All the fancy furniture didn&#8217;t work for me:

[<img class="alignnone size-full wp-image-1154" title="Fancy Chair" src="http://www.nulldevice.de/wp-content/uploads/2010/08/variable_mystic1.jpg" alt="" width="254" height="219" />][1]

And a desk made of real wood, not that crappy and cheap IKEA stuff made of plastic and particle board. No dinning room table, those are usually too high (76cm). Remember that the keyboard/notebook has a certain height too. The perfect desk is 73cm high. I agree it should be simple, without &#8220;cubby holes, drawers and cord hiders&#8221;.

#### Monitor Setup

As a freelance developer, I need a lot of space on my desk to draw diagrams and sign my invoices. Or just to put the Amazon Kindle. It&#8217;s a good replacement for the obligatory PDF readers or word processors that are open in the background and hold the customer requirements.

There are some scientific results that suggest that any screen larger than 17 inch will decrease productivity. Not sure about that. But certainly I don&#8217;t want to move my head all the time to collect information from different screens. I was able to work on a JavaScript project with more than 50k lines of code on a 10 inch netbook without problems.

#### Mouse & Keyboard

I normally have to use the keyboard built into my ThinkPad, which does it&#8217;s job quite well. The best keyboard I ever had was a Cherry G80-3000 with MX gold crosspoint technology and without Windows keys. Those times are gone forever. Everything has to be flat in this century and you can get used to it.

As a PHP/JS/C/Perl developer, you will be happy with a US layout. As a consultant not living in the States, you might want to use a local layout, so that you can easily access non-ascii chars while writing your important business documents.

The best mouse I found so far is the Logitech Basic mouse and it is very cheap at the same time. It is available in gray and black. Perfect.
  
[<img class="alignnone size-full wp-image-1155" title="Logitech Mouse" src="http://www.nulldevice.de/wp-content/uploads/2010/08/Logitech-Optical-Wheels-Mou.jpg" alt="" width="300" height="300" srcset="https://blog.liquidbytes.net/wp-content/uploads/2010/08/Logitech-Optical-Wheels-Mou.jpg 300w, https://blog.liquidbytes.net/wp-content/uploads/2010/08/Logitech-Optical-Wheels-Mou-150x150.jpg 150w" sizes="(max-width: 300px) 100vw, 300px" />][2]

#### Minimizing Distractions

I usually outperform other developers, even those with 3 screens, not because I am cool, but because I don&#8217;t use Windows when not working on some Office document. This reduces the times when I have to explain my customer or co-worker that &#8220;it does not work and I don&#8217;t know why&#8221;. Also it&#8217;s easy to get rid of 3D effects, playful window borders and desktop widgets that distract you. Skype looks less like a computer game too, but works equally well. The UMTS modem works every time, not not just every second time (if it fails, you will see a meaningful error message). There is no need to think a lot about which applications to use and there is a standard way for pretty much everything. Last but not least most servers run Unix too, so you don&#8217;t experience those strange &#8220;file not found&#8221; problems after the code was deployed to the production environment. Windows isn&#8217;t case sensitive.

#### System Shortcuts & Project Management

You normally have 3 or 4 windows open that matter:

  1. the console (to run the unit tests and do svn/git commits)
  2. the text editor (gedit)
  3. the Web browser (2 tabs, one with the app and one with google open to search for documentation)
  4. and maybe GIMP (if you work on graphics too) or Skype for talking with other people about the project

Remember that we outsourced requirements documents to the Kindle or real paper where you can scratch around.

Those windows fit into any task bar, even on small screens. You don&#8217;t want to see your desktop wallpaper, while you&#8217;re working. Maximize your windows and use the full space available (Mac users will complain now, as far as I remember).

Tortoise SVN is crap, but the best you can get on Windows, I guess. Better use the command line applications on Unix. If you do Open Source or want to be cool, you use git and tell all your friends that svn is bad.

#### IDE & Other Programs

Most editors fail when working on large projects. Eclipse (also known as Aptana, Zend Studio, PDT) used to have a CSS editor that was so slow, that it took several minutes to open large CSS files. The memory management did not work really well &#8211; eventually I found a garbage collection plugin, which added small trash button in the bottom right corner that I had to press every time, the memory usage went to high (WTF!?). Just today I enabled the option &#8220;insert spaces for tabs&#8221;, pressed the tab key and it inserted a&#8230; tab. Crap.

Besides those annoyances, the Eclipse file/folder tree does not update automatically and the SVN plugin (there are many with different bugs to chose from, right?) seems as waste of time compared to the straight forward usage of the default command line tools.

Therefore my recommendation is to use gedit, the default editor that comes with Gnome. It&#8217;s only downside is that it can not save files on SMB shares (VirtualBox shared folders) because of a bug, and that really is the only reason for me to use Aptana from time to time.

gedit&#8217;s major features:

  * It is stable
  * You see the character on the screen, directly after you pressed a key (no delay)
  * You write nice looking code that is readable, even without additional tools, filters and beautifiers
  * The file/folder tree updates automatically
  * Syntax highlighting for JavaScript, PHP and other languages
  * Automatic indentation
  * UTF-8 is default &#8211; you never accidentally break the encoding again and get hurt by your co-workers for this
  * Low memory usage
  * The save button works every time (not true for Eclipse, as I had to find out painfully)
  * It doesn&#8217;t occupy a lot of the valuable space on the screen

And yes, it can use plug-ins and you can write your own, if you feel something is missing. I am happy with how it is.

#### Conclusion

I don&#8217;t know.

 [1]: http://www.nulldevice.de/wp-content/uploads/2010/08/variable_mystic1.jpg
 [2]: http://www.nulldevice.de/wp-content/uploads/2010/08/Logitech-Optical-Wheels-Mou.jpg