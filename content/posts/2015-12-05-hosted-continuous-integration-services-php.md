---
title: Hosted continuous integration services for PHP
author: Michael Mayer
type: post
date: 2015-12-04T23:28:34+00:00
url: /2015/12/hosted-continuous-integration-services-php/
cover_image: /wp-content/uploads/2015/12/droneio6.png
categories:
  - PHP
  - 'The Web, Apps &amp; Services'
  - Unit Testing

---
Today, I&#8217;ve been evaluating popular hosted CI services to see how well they&#8217;re working with PHP and how much they cost.

## drone.io

<a href="https://drone.io/" target="_blank">https://drone.io/</a>

drone.io is free for Open Source projects (one concurrent build). <a href="https://drone.io/admin/plan" target="_blank">Paid plans</a> for private repositories start at 25 $ / month. Builds are configured on the Web site. PHP support is marked as &#8220;beta&#8221; for good reasons: PHP 5.5.1 and composer are pretty much outdated. By default, builds are triggered by commits to all branches (can be limited).

[<img class="aligncenter size-medium wp-image-3057" src="https://lastzero.net/wp-content/uploads/2015/12/droneio6-500x426.png" alt="drone.io" width="500" height="426" srcset="https://blog.liquidbytes.net/wp-content/uploads/2015/12/droneio6-500x426.png 500w, https://blog.liquidbytes.net/wp-content/uploads/2015/12/droneio6.png 980w" sizes="(max-width: 500px) 100vw, 500px" />][1]

If you don&#8217;t mind the old PHP version, you can update composer and run phpunit like this:

<pre>curl -sS https://getcomposer.org/installer | php
php composer.phar update --prefer-source --no-interaction
phpunit
</pre>

## Codeship

<a href="https://codeship.com/" target="_blank">https://codeship.com/</a>

Codeship is free for private projects (up to 100 builds / month). Open Source projects get unlimited builds. <a href="https://codeship.com/pricing" target="_blank">Paid plans</a> start at 49 $ / month. Just like drone.io, build scripts are configured on the Web site. Since builds are triggered by commits to all branches, you&#8217;ll get &#8220;[Build failed]&#8221; notification mails even if branches are changed, that don&#8217;t contain code (for example &#8220;gh-pages&#8221; for GitHub Pages). PHP versions 5.3, 5.4, 5.5 and 5.6 are available.

[<img class="aligncenter size-medium wp-image-3058" src="https://lastzero.net/wp-content/uploads/2015/12/Codeship-500x356.png" alt="Codeship" width="500" height="356" srcset="https://blog.liquidbytes.net/wp-content/uploads/2015/12/Codeship-500x356.png 500w, https://blog.liquidbytes.net/wp-content/uploads/2015/12/Codeship-1024x729.png 1024w, https://blog.liquidbytes.net/wp-content/uploads/2015/12/Codeship.png 1109w" sizes="(max-width: 500px) 100vw, 500px" />][2]

My setup commands for PHP 5.6 and fetching composer dependencies look like this:

<pre>phpenv local 5.6
composer update --prefer-source --no-interaction
</pre>

The next version of Codeship is supposed to <a href="http://stackoverflow.com/questions/31772306/doesnt-codeship-support-yaml-configure-file" target="_blank">support YAML files</a> in a similar fashion as CircleCI and Travis CI.

## CircleCI

<a href="https://circleci.com/" target="_blank">https://circleci.com/</a>

CircleCI offers unlimited builds for free (one concurrent build). <a href="https://circleci.com/pricing" target="_blank">Paid plans</a> start at 50 $ / month. The user interface can be a bit confusing at first.

[<img class="aligncenter size-medium wp-image-3060" src="https://lastzero.net/wp-content/uploads/2015/12/CircleCI-500x290.png" alt="CircleCI" width="500" height="290" srcset="https://blog.liquidbytes.net/wp-content/uploads/2015/12/CircleCI-500x290.png 500w, https://blog.liquidbytes.net/wp-content/uploads/2015/12/CircleCI-1024x595.png 1024w, https://blog.liquidbytes.net/wp-content/uploads/2015/12/CircleCI-1170x679.png 1170w, https://blog.liquidbytes.net/wp-content/uploads/2015/12/CircleCI.png 1190w" sizes="(max-width: 500px) 100vw, 500px" />][3]

Builds are configured on the Web site or in a circle.yml file that&#8217;s checked into the repository (like Travis CI):

<pre>general:
  branches:
    ignore:
      - gh-pages

dependencies:
  override:
    - 'composer update --prefer-source --no-interaction'

test:
  override:
    - phpunit

machine:
  php:
    version: 5.6.14
</pre>

Currently <a href="https://circleci.com/docs/environment#php" target="_blank">supported PHP versions</a> are 5.3.3 up to 7.0.0RC7.

## Travis CI

<a href="https://travis-ci.org/" target="_blank">https://travis-ci.org/</a>

Travis CI is by far the most mature and popular service. It&#8217;s completely free for Open Source projects. <a href="https://travis-ci.com/plans" target="_blank">Paid plans</a> start at 129 $ / month.

[<img class="aligncenter size-medium wp-image-3059" src="https://lastzero.net/wp-content/uploads/2015/12/Travis-CI-500x280.png" alt="Travis CI" width="500" height="280" srcset="https://blog.liquidbytes.net/wp-content/uploads/2015/12/Travis-CI-500x280.png 500w, https://blog.liquidbytes.net/wp-content/uploads/2015/12/Travis-CI-1024x574.png 1024w, https://blog.liquidbytes.net/wp-content/uploads/2015/12/Travis-CI.png 1113w" sizes="(max-width: 500px) 100vw, 500px" />][4]

Builds are configured in a .travis.yml file that&#8217;s checked into the repository:

<pre>language: php

sudo: false

php:
  - 5.5
  - 5.6
  - 7.0
  - hhvm

before_script:
  - composer install --dev

script: phpunit --configuration phpunit.xml.dist
</pre>

You can run your tests on multiple PHP versions in parallel and don&#8217;t need to provide exact version strings like &#8220;5.5.9&#8221;. Even Facebook&#8217;s HHVM (HipHop Virtual Machine) is supported. Tests are only executed (and a notification email sent) if a .travis.yml file was found.

## Conclusion

While Travis CI certainly is the best hosted continuous integration service for Open Source projects, it&#8217;s also the most expensive one for private repositories. Budget-oriented users save some money with Codeship or CircleCI, if they can accept minor trade-offs. drone.io can not be recommended for PHP projects.

 [1]: https://lastzero.net/wp-content/uploads/2015/12/droneio6.png
 [2]: https://lastzero.net/wp-content/uploads/2015/12/Codeship.png
 [3]: https://lastzero.net/wp-content/uploads/2015/12/CircleCI.png
 [4]: https://lastzero.net/wp-content/uploads/2015/12/Travis-CI.png