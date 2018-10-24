---
title: 'Howto: Write an iPhone app with PhoneGap'
author: Michael Mayer
type: post
date: 2012-10-18T07:32:04+00:00
url: /2012/10/howto-write-an-iphone-app-with-phonegap/
categories:
  - 'JavaScript, HTML &amp; CSS'
  - 'Mac OS X &amp; iOS'
tags:
  - Apple
  - iPhone

---
[PhoneGap][1] lets you write smartphone apps with **HTML, CSS and JavaScript**. No need to learn Objective-C or get used to proprietary C/C++ libraries. Sounds good in theory, but how easy is it really?

I found the official documentation a little bit confusing, so I wrote this streamlined howto while I&#8217;ve been testing PhoneGap myself. If you got about an hour of time, these are the steps to follow to compile & run your own iPhone app:

Get an iMac / MacBook, if you don&#8217;t have one yet. **You won&#8217;t be able to write iPhone apps without a Mac.**

**Download the latest version** (currently 2.1.0) of PhoneGap from <http://phonegap.com/download> and extract it to Applications/PhoneGap/ (for example).

**Register** for an Apple [developer account][2]. You can use your existing Apple ID. It&#8217;s free.

**Install Apple Xcode** from the App Store. Start it and go to Xcode -> Preferences&#8230; -> Downloads. **Install &#8220;Command Line Tools&#8221;** and, if you like, &#8220;iOS 5.1 Simulator&#8221; (the iOS 6 Simulator should already be part of the latest Xcode). Wait until the installation is finished (takes a while, depending on your internet connection).

[<img class="alignnone size-medium wp-image-1921" title="Xcode downloads" src="http://lastzero.net/wp-content/uploads/2012/10/2012-10-17_22-42-271-500x143.png" alt="" width="500" height="143" srcset="https://blog.liquidbytes.net/wp-content/uploads/2012/10/2012-10-17_22-42-271-500x143.png 500w, https://blog.liquidbytes.net/wp-content/uploads/2012/10/2012-10-17_22-42-271.png 750w" sizes="(max-width: 500px) 100vw, 500px" />][3]

**Open the Terminal** app and type:

<pre>cd /Applications/PhoneGap/lib/ios/bin
mkdir /Users/[username]/PhoneGap
./create /Users/[username]/PhoneGap/Example com.domain.example "Example Project"</pre>

**Open the project directory** (/Users/[username]/PhoneGap/Example) in Finder and click on &#8220;Example Project.xcodeproj&#8221; (automatically opens in Xcode).

Make sure the build target is &#8220;iPhone 6.0 Simulator&#8221;. **Press Run.**

[<img class="alignnone size-full wp-image-1903" title="2012-10-18_08-56-23" src="http://lastzero.net/wp-content/uploads/2012/10/2012-10-18_08-56-23.png" alt="" width="383" height="52" />][4]

Click &#8220;Enable&#8221;, if Xcode asks you about whether to enable &#8220;Developer Mode on this Mac&#8221;.

You should see the screen below:

[<img class="aligncenter size-medium wp-image-1897" title="iPhone Simulator" src="http://lastzero.net/wp-content/uploads/2012/10/2012-10-17_22-56-01-256x500.png" alt="" width="256" height="500" />][5]

Stop the application.

You can now start to **modify the application** using CSS, HTML and JavaScript. The files can be found in /Users/[username]/PhoneGap/Example/www. Press Run every time you want to test your app in the simulator. Remember to read the [documentation][6].

**Happy coding!**

### Deploy to your iPhone device

<img class="size-medium wp-image-1922 alignright" style="margin-left: 20px; margin-bottom: 20px;" title="Deploy to iPhone" src="http://lastzero.net/wp-content/uploads/2012/10/2012-10-18_08-47-191-500x159.png" alt="" width="500" height="159" srcset="https://blog.liquidbytes.net/wp-content/uploads/2012/10/2012-10-18_08-47-191-500x159.png 500w, https://blog.liquidbytes.net/wp-content/uploads/2012/10/2012-10-18_08-47-191.png 667w" sizes="(max-width: 500px) 100vw, 500px" />

  1. Register for the [iOS developer program][7] for **99 US-$/year**.
  2. **Connect your iPhone** via USB. If iTunes opens, close it. A dialog (&#8220;Organizer &#8211; Devices&#8221;) opens where you should see your phone. Click on &#8220;Use for development&#8221;. Make sure the **provisioning profiles** are configured/installed (this is what you actually pay for), otherwise you will see a &#8220;Code Signing Error&#8221; error while building the app. Also make sure the CFBundleIdentifier in Resources/Example Project-Info.plist is set to the identifier provided by Apple.
  3. **Set the build target** to your iOS device and press Run.

As you can see, I never actually deployed to my iPhone, since I don&#8217;t want to pay 99 $ for a simple test (maybe later). But this is how it works in theory ;)

 [1]: http://phonegap.com/
 [2]: https://developer.apple.com/
 [3]: http://lastzero.net/wp-content/uploads/2012/10/2012-10-17_22-42-271.png
 [4]: http://lastzero.net/wp-content/uploads/2012/10/2012-10-18_08-56-23.png
 [5]: http://lastzero.net/wp-content/uploads/2012/10/2012-10-17_22-56-01.png
 [6]: http://docs.phonegap.com/en/2.1.0/index.html
 [7]: https://developer.apple.com/programs/ios/