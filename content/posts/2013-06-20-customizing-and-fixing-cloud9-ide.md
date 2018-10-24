---
title: 'Cloud9 IDE: My first impression'
author: Michael Mayer
type: post
date: 2013-06-20T14:18:02+00:00
url: /2013/06/customizing-and-fixing-cloud9-ide/
cover_image: /wp-content/uploads/2013/06/Cloud9_WordPress.png
categories:
  - 'Desktop Software &amp; OS'
  - 'JavaScript, HTML &amp; CSS'
  - Linux
  - Open Source
tags:
  - Cloud9

---
After I could gather some experience with Cloud9 IDE today, I&#8217;m in the process of customizing it to my needs. For example, the run and preview buttons seem useless when using Cloud9 as editor only: Most PHP/JavaScript Web apps are constantly running in another tab anyways and usually don&#8217;t require compilation (as a developer, I know how to use the reload button).

The basic editor settings are accessible via Preferences and/or the Views menu. More advanced config options and the list of plugins that are loaded can be found in <tt>cloud9/configs/default.js</tt>. The preview and run plugins can simply be commented out:

<pre>//"ext/preview/preview",
//"ext/run/run", //Add location rule
//"ext/runpanel/runpanel", //Add location rule
//"ext/debugger/debugger", //Add location rule</pre>

For some reason, that doesn&#8217;t remove the preview button, which can be hidden using CSS in <tt>cloud9/plugins-client/ext.main/style/style.css</tt>:

<pre>.c9-menu-bar .c9-toolbarbutton-glossy.preview {
    display: none;
}</pre>

[<img class="size-medium wp-image-2631 alignright" alt="Cloud9 IDE" src="https://lastzero.net/wp-content/uploads/2013/06/Cloud9_WordPress-500x359.png" width="500" height="359" srcset="https://blog.liquidbytes.net/wp-content/uploads/2013/06/Cloud9_WordPress-500x359.png 500w, https://blog.liquidbytes.net/wp-content/uploads/2013/06/Cloud9_WordPress.png 964w" sizes="(max-width: 500px) 100vw, 500px" />][1]

Cloud9 2.0.93 seems to **crash in Chrome** from time to time. If you reload the file system tree on Chrome, the files and folders are not sorted alphabetically anymore. This is probably related to Chrome&#8217;s (V8) implementation of arrays and objects, which share the same code instead of using inheritance to separate the code in a clean way (iterating over array items is different than iterating over object properties &#8211; sometimes that gets mixed up).

Cloud9 was very stable on **Firefox 21** on OS X without any add-ons/plugins such as Flash, Firebug, Adblock. However, **create file/folder didn&#8217;t work**.

<p style="text-align: left;">
  Right now, I&#8217;m testing the latest <strong>Safari</strong> without any plugins/modifications. It seems stable, the themes look better than in Firefox and create file/folder works perfectly. Sometimes, the session can not be initialized properly, as it seems: It is not possible to open files or folders and the server log contains &#8220;Error &#8216;SyntaxError: Unexpected end of input&#8217; reading session&#8221;. Reloading Cloud9 usually helps. Safari is also nice because you can disable all header and footer elements, so that only the IDE is visible.
</p>

Note that Cloud9 does not allow the usage of space characters in file and folder names; this is independent of the Web browser.

**Conclusion:** Cloud9 is a very interesting and innovative project. The editor can already be used, if you work around some issues. At the moment, I can not recommend it to developers, who don&#8217;t like to experiment a little. It is well possible, that I picked a release from GitHub which contains more issues than normally or that I should have used an older Node.js version on the server side to avoid certain bugs or error messages.

**Update:** Changing the session handler [from file to memory][2] seems to fix the errors on first login and the &#8220;unexpected end of input&#8221; errors.

There are also pre-built .deb packages for Ubuntu Server 12.04 available for download now:

  * [/downloads/deb/ubuntu-12.04/cloud9\_2.0.93\_amd64.deb][3]
  * [/downloads/deb/ubuntu-12.04/nodejs\_0.8.25\_amd64.deb][4]

 [1]: https://lastzero.net/wp-content/uploads/2013/06/Cloud9_WordPress.png
 [2]: https://github.com/ajaxorg/cloud9/commit/73ab96d273124b2ddab71b8f08038a2d696b06b8
 [3]: https://lastzero.net/downloads/deb/ubuntu-12.04/cloud9_2.0.93_amd64.deb
 [4]: https://lastzero.net/downloads/deb/ubuntu-12.04/nodejs_0.8.25_amd64.deb