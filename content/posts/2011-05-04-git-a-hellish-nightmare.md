---
title: 'Git: A hellish nightmare!'
author: Michael Mayer
type: post
date: 2011-05-04T15:52:10+00:00
url: /2011/05/git-a-hellish-nightmare/
categories:
  - Open Source
tags:
  - Flot
  - Git
  - 'JavaScript &amp; Rich Client'
  - PHP
  - PHPUnit

---
Even though I am the master of procrastination, I managed to fix 3 issues in <a href="https://github.com/smashedpumpkin/flot/branches" target="_blank">flot</a> (JS charting plugin for jQuery) and <a href="https://github.com/smashedpumpkin/phpunit/commit/9087b0a4321af3b2a36e28b8dd0efcf54aed76e1" target="_blank">PHPUnit</a> this week. Of course they are hosted on github and everyone who knows me, knows that I hate git because it is sooo different from svn and my brain frequently explodes when I see all the branches and connections between them. Every time I try to explain that to more or less experienced git users, they try to convince me from the opposite. Anyhow, it shouldn&#8217;t be a mission impossible to checkout the source, fix the bugs and send pull request &#8211; one for each fix &#8211; to the maintainers, right?

After committing the second flot fix, I found out that you can only send ONE pull request per branch and I didn&#8217;t even know how to create new branches. Not to speak about how to move the commits to the right branches. Without the help of Alexandre Salomé from Sensio Labs I would have been totally lost! Here is what he did:
  
`<br />
git status<br />
git checkout origin/master -b fix-fonts<br />
git remote<br />
git remote -v<br />
git checkout upstream/master -b tmp<br />
git branch -D fix-fonts<br />
git checkout -b fix-fonts<br />
git branch -D tmp<br />
git log<br />
git cherry-pick 82583fc<br />
git cherry-pick 082e991<br />
git push origin fix-typos<br />
git push origin fix-fonts<br />
git checkout 40d886f9<br />
git checkout -b fix-issue-520<br />
git push origin fix-issue-520<br />
git checkout origin/master<br />
git checkout upstream/master<br />
git branch -D master<br />
git checkout -b master<br />
git push -f origin master<br />
` 
  
Simple, isn&#8217;t it?

I **really** have to read (and understand) a book about git soon.