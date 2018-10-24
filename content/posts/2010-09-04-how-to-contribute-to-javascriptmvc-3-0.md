---
title: How to contribute to JavaScriptMVC 3.0
author: Michael Mayer
type: post
date: 2010-09-04T12:25:33+00:00
url: /2010/09/how-to-contribute-to-javascriptmvc-3-0/
categories:
  - 'JavaScript, HTML &amp; CSS'
  - Open Source
tags:
  - 'JavaScript &amp; Rich Client'
  - JavaScriptMVC

---
If you are reading this, I can safely assume you know what JavaScriptMVC (JMVC) is, what its features are, and what components it consists of, namely:

  * FuncUnit (the test framework)
  * DocumentJS (the documentation engine)
  * jQuery (JavaScriptMVC uses a special fork with added bugfixes)
  * JavaScriptMVC  (the core framework)
  * Steal (the code manager / script loader; sometimes referred to as “StealJS”)
  * Phui  (component library for JavaScriptMVC, not part of the core)

These partly independent components (together with Selenium) are bundled using git submodules (<http://book.git-scm.com/5_submodules.html>) in a repository called “framework” for your convenience:

<http://github.com/jupiterjs/framework>

A detailed description of the components can be found on the Jupiter JS blog:

<http://jupiterjs.com/#news/javascriptmvc-features>

#### Release 2.0

You should be aware that release 2.0 is still out there. Don’t get confused. It is hosted on Google Code at <http://code.google.com/p/javascriptmvc/> and uses Subversion instead of git. Don’t use the issue tracker there for bugs you find in 3.0.

The respective project Web sites are:

  * <http://www.javascriptmvc.com/> for 2.0
  * [http://v3.javascriptmvc.com/index.html][1] for 3.0

#### Ways to contribute

There is a number of ways to contribute:

  1. You can fork the project repositories on github (<http://github.com/jupiterjs/>) into your own repository and send a “pull request”, every time you want to submit changes (pull requests replace patches and preserve your authorship)
  2. After contributing for a while, you can become a member of the JavaScriptMVC team and ask for direct write access to the project repositories
  3. You can just checkout/download  the latest framework version and report bugs to the developers (<http://github.com/jupiterjs/javascriptmvc/issues>) or answer questions on the mailing list (<http://groups.google.com/group/javascriptmvc?hl=en>)

#### A few words about git

In every case you should become more or less familiar with git (the distributed version control system) and github (the project hosting Web site).  The Git Community Book is a great reference: <http://book.git-scm.com/index.html>. If you are already familiar with Subversion, you might want to read the “Git &#8211; SVN Crash Course” (<http://git.or.cz/course/svn.html>). The main idea of git is that everyone has its own repository (that’s why it’s called distributed). It allows everyone to contribute easily to Open Source projects and was initially designed and developed by Linus Torvalds for Linux kernel development.

In contrast to “normal” version control systems, a commit is happening on your local computer only. If you want to actually send your code to the server, you have to push it back to the remote repository. If this is not the main repository of the project but your own fork, you additionally have to send a “pull request” to the project owner (jupiterjs in that case). As a previous user of Subversion I found the whole process of checking out the source, committing my changes and pushing it back to the repository tremendously complicated, even though I understand the need for distributed version control. In part this is because git sometimes comes up with error messages that look pretty scary and that don’t help to understand the actual problem.

#### Setup your github account

After you created your free github account at <http://github.com/>, you need to go to the Account Settings page, click on “SSH Public Keys” in the left hand side navigation and then enter your public key. If you don’t have one yet, you open a text terminal on the local computer and enter:

> ssh-keygen -t rsa -C &#8220;youremail@address.com&#8221;

There is a more detailed howto at <http://help.github.com/msysgit-key-setup/>.

If you run Windows, you are probably out of luck. Try to ask Google for assistance ;)

Next step is to fork the repositories you want to work on. This process is pretty convenient – you simply click the fork button on the main repository page. The complete list is visible on:

<http://github.com/jupiterjs>

#### Install Git and Java

If not yet done, you should also install Git and Java on the local computer by using the package management software that comes with your Linux distribution. On Ubuntu you can use the “Synaptic Package Manager” for example. At least in the past, I had bad experiences with OpenJDK and Rhino (the engine that executes JMVC’s command line scripts), so I recommend installing the “original” Sun/Oracle Java version. The Selenium server also needs Java.

#### Clone the repositories

I recommend cloning (that means checkout) the “framework” repository as the first step. The build script in there allows creating the downloadable packages you see on <http://github.com/jupiterjs/framework/downloads>. To do this, follow these 4 easy steps:

  1. Create an empty local directory that should contain all your github repositories and change into it
  2. git clone git://github.com/jupiterjs/framework.git
  3. git submodule init
  4. git submodule update

That’s it!

The procedure to clone your forked project repositories is similar. First you need the URL that you have to provide to Git.

Go to your Git home page ( [http://github.com/[username]/][2]) and then click on the forked respository, e.g. javascriptmvc. On the top you’ll see 3 different URLS:

  * SSH with read and write access: This is what you want to use
  * HTTP: This is slower and offers read only access
  * Git Read-Only: Since we want to push (write) our changes to the server, this does not make sense

Now simply clone it into your local github directory by typing:

git clone [git@github.com:[username]/[repository].git][3]

#### Push changes

With Git, you can do as many commit as you want locally. Please note that the equivalent to “svn commit” is “git commit –a”. Please be nice and provide a commit message every time, for example:

> git commit -a &#8211;message &#8216;Changed github URLs from pinhook to jupiterjs&#8217;

To see what would be commited or to see your changes since the last commit you can use “git status” and “git diff”.

After testing all your changes locally (this is probably worth another article, but I’m running out of time now), you are free to commit your changes to the remote repository:

> git push origin master

You can also configure git to always push to the matching remote branch (there are other options as well, but I’m not that much into git to fully understand them, to be honest):

> git config push.default matching

Next time you push something into that repository, it is enough to use “git push”.

As mentioned earlier, you have to do send a “pull request” (there is a nice button on github to do just that), if you want to send your changes from your fork to the original project repository.

#### Pull changes for submodules

In my naïve thinking, I assumed that Git will automatically update the submodule directories in the framework repository when you type “git submodule update”. This is not the case.

You have to manually pull the latest changes in each sub directory that contains a submodule like this:

> cd funcunit/
> 
> git checkout master (only required the first time)
> 
> git pull

You will only get the changes in the submodules via “git pull” in the main framework directory if somebody with write access to framework does this “cd [submodule]; git pull” procedure locally and then pushes back to the repository on github:

<http://github.com/jupiterjs/framework/commit/1affd96d632b34621e9e0d06707ea83d1d4c3b9d>

#### Thanks

Thanks for reading this. You see, I’m not a Git expert yet and I really hope I didn’t give any bad advice concerning its usage. As I improve my knowledge and find best practices how to do things most efficiently, I will update this page or post a follow-up. Especially testing is not covered in this article, which is a shame.

 [1]: http://v3.javascriptmvc.com/index.html%20for%203.0
 [2]: http://github.com/%5busername%5d/
 [3]: mailto:git@github.com:[username]/%5brepository%5d.git