---
title: Dependent Symfony 2 Bundles and Testability
author: Michael Mayer
type: post
date: 2015-11-03T12:37:13+00:00
url: /2015/11/dependent-symfony-2-bundles-and-testability/
cover_image: /wp-content/uploads/2015/11/4659170840_00b7bb432a_b.jpg
categories:
  - Frameworks
  - PHP
  - 'Symfony &amp; Silex'
  - Unit Testing

---

I just came across a <a href="http://stackoverflow.com/questions/24251539/how-to-test-a-shared-symfony-2-bundle-without-a-full-project/33494810#33494810" target="_blank"> question concerning Symfony 2 bundles and testability</a> on Stack Overflow that I would like to share with you.

[<img class="alignright wp-image-2942" src="https://lastzero.net/wp-content/uploads/2015/11/dagdeps-500x375.png" alt="dagdeps" width="300" height="225" srcset="https://blog.liquidbytes.net/wp-content/uploads/2015/11/dagdeps-500x375.png 500w, https://blog.liquidbytes.net/wp-content/uploads/2015/11/dagdeps.png 800w" sizes="(max-width: 300px) 100vw, 300px" />][1]

When using Symfony, inexperienced or insecure developers tend to use **lots of existing bundles**, because this seems to be the recommend way of building an application. Later, they wonder, why it&#8217;s so **hard to write unit and component tests** or they write <a href="http://symfony.com/doc/current/book/testing.html#functional-tests" target="_blank">functional tests</a> instead and call them unit tests, because this really seems to be the only possible way to write tests.

However, functional tests are **not suitable for test driven development**, they are slow and fragile.

### Why are dependent bundles bad for testing?

Bundles are a Symfony specific way to share entire libraries incl. their respective dependency injection container configuration.

Therefore, bundles depend on the Symfony kernel and if one bundle depends on another bundle, you create heavy dependencies, which effectively prevents unit and component testing: To test a class in bundle A, you&#8217;ll need some classes from bundle B plus the Symfony kernel. Of course you can mock every single dependency, but that&#8217;s an awful lot of work and you need to understand them first. Not having to understand your dependencies is the number one reason to use bundles in the first place.

That&#8217;s <a href="http://stackoverflow.com/questions/24251539/how-to-test-a-shared-symfony-2-bundle-without-a-full-project/33494810#33494810" target="_blank">netmikey&#8217;s problem description</a> on Stack Overflow:

> So it feels like we&#8217;re gonna end up needing a whole Symfony2 project in our bundle&#8217;s repository anyway in order to bootstrap the whole framework to be able to eventually test our components.

### What are bundles good for?

Let me quote a great <a href="http://stackoverflow.com/questions/19064719/fosuserbundle-what-is-the-point" target="_blank">answer by Boris Guéry</a> on Stackoverflow:

> Most of the time, you will take much more time to &#8220;get it done&#8221; using community bundle than making your own (see Sonata bundles).
> 
> I don&#8217;t say they are bad bundles, not at all, but they **deserve different purposes**.
> 
> For me such bundles may help newcomers to have a quick implementation, to **get things done**, and in the case of a **Rapid Application Development**, it may be really easy to get a fully working application with all the registration process done.
> 
> But most of the time, you realize that **using third party codes ties you too much** to their own concept and that is wrong.

Bundles are certainly bad for testability, if there are any dependencies between bundles. They are good for effectively separating parts of an application, if there are no dependencies, e.g. running multiple individual applications on the same Symfony installation. It&#8217;s basically the opposite of thin server architecture and microservices. If you add enough bundles, you got a good chance of ending up with a fat, slow application who does about everything.

Ready-to-use bundles can be a starting point for new users and probably results in more configuration than actual coding. They are no foundation for fast and fully testable enterprise applications.

### Getting rid of bundles

The good news is: You don&#8217;t really need bundles. Most of the time, they are just a convenience feature that saves you from setting up your own dependency injection configuration for external libraries. Instead you have to read the documentation to know how to configure them.

If the class you want to test depends on classes in other bundles and you want to write unit / component tests, you have to understand the inner workings of those dependencies anyways. So why don&#8217;t understand them in the first place?

Let&#8217;s have a look at the Twig bundle. You can include it in the Symfony kernel like this:

<pre>public function registerBundles()
{
    $bundles = array(
        new Symfony\Bundle\TwigBundle\TwigBundle(),
        ...
    );

    return $bundles;
}
</pre>

What this code does is loading Symfony\Bundle\TwigBundle\TwigBundle.php via the composer autoloader. TwigBundle.php is then starting some hidden machinery built into the bundle to add parameters and services to your existing dependency injection container. Something you could have done yourself in [a few lines][2] of your own container configuration (e.g. parameters.yml and services.yml):

<pre>parameters:
    twig.path: '%app.path%/../src/App/View'
    twig.options:
        charset: 'UTF-8'
        debug: false
        strict_variables: false
        cache: '%app.cache_path%/twig'
        auto_reload: true

services:
    twig.loader:
        class: Twig_Loader_Filesystem
        arguments: [ %twig.path% ]

    twig:
        class: Twig_Environment
        arguments: [ "@twig.loader", %twig.options% ]        
</pre>

The difference is, this time you know what happens, with which classes you are actually working and how to mock them, if you need to. Also, you don&#8217;t need a full featured Symfony kernel now: Something lighter combined with the Symfony dependency injection will do as well. This is what I did when I combined Silex with the Symfony dependency injection container and called it <a href="https://github.com/lastzero/symlex" target="_blank">Symlex</a>. It almost feels like Symfony, but is much faster and fully testable. The downside is, you can not use bundles.

 [1]: https://lastzero.net/wp-content/uploads/2015/11/dagdeps.png
 [2]: https://github.com/lastzero/symlex/blob/master/app/config/twig.yml