---
title: Why less mocking can improve everyone’s testing experience
author: Michael Mayer
type: post
date: 2015-11-21T05:39:16+00:00
url: /2015/11/mocks-are-evil/
cover_image: /wp-content/uploads/2015/11/6996747396_f995a49477_b.jpg
categories:
  - 'Best Practices &amp; Quality'
  - PHPUnit
  - Unit Testing

---
There&#8217;s some confusion in the community concerning the use of mocks for unit testing. Mocking is creating objects that simulate the behaviour of real objects. I personally don&#8217;t mock class dependencies by default but use real objects and test doubles via dependency injection.

Despite the success of this approach, many developers are still plagued by concerns that the resulting tests are just some sort of component or integration tests and not true unit tests.

### Are tests without mocks still real unit tests? Yes!

These apparently conflicting approaches are referred to as the classic and mockist styles of unit testing:

> **The classical TDD style is to use real objects if possible and a double if it&#8217;s awkward to use the real thing.** So a classical TDDer would use a real warehouse and a double for the mail service. The kind of double doesn&#8217;t really matter that much.
> 
> **A mockist TDD practitioner, however, will always use a mock for any object with interesting behavior.** In this case for both the warehouse and the mail service.
  
> <cite><a href="http://martinfowler.com/articles/mocksArentStubs.html">Martin Fowler</a></cite>

Mocks and [test doubles][1] are necessary for writing tests sometimes, but creating and maintaining mocks can be a time-consuming endeavour. If you care about productivity, you should think about avoiding their widespread use and prefer using real objects instead. From my experience, they do no harm &#8211; quite the contrary: You can instantly see, how the real objects interact with each other instead of waiting for functional tests. Indeed, the need for excessive mocking can be in indicator for bad software design.

### Finding the broken line of code is not an issue in practice

The mockist style might be a bit more precise when it comes to finding a broken line of code, because all classes are tested in complete isolation. In practice, classic unit tests will also provide you with a stack trace that points you to the right line of code:

> We didn&#8217;t find it difficult to track down the actual fault, even if it caused neighboring tests to fail. So we felt isolation wasn&#8217;t an issue in practice.
  
> <cite><a href="http://martinfowler.com/bliki/UnitTest.html">Martin Fowler</a></cite>

In the worst case, more than one test case fails, if just one class or function is broken. This will give you even more information about the issue and allows to find and fix affected code easily.

### Think of a unit not as an isolated class but as a certain functionality

<p class="graf graf--p">
  Good classes abstract away their dependencies and inner workings (encapsulation), so you don’t have to care or to worry about them in your tests. The only exception are databases and other external services that you should replace with test doubles like <a class="markup--anchor markup--p-anchor" href="https://martinfowler.com/bliki/SelfInitializingFake.html" target="_blank" rel="noopener nofollow" data-href="https://martinfowler.com/bliki/SelfInitializingFake.html">self-initializing fakes</a>. Fixtures that return the same data every time are perfectly fine, since unit tests don’t like state by definition. If you have to test state, use functional tests of the user interface or API instead.
</p>

### TestTools for PHPUnit

To improve the testing productivity of my team, I created a library called [TestTools for PHPUnit][2]. It contains two independent components: A test case class with integrated service container for **easy dependency injection** using YAML config files and **self-initializing fixtures** as test doubles for storage backends such as SQL databases or REST services (record and replay). We&#8217;ve been using them for many years with great success in projects large and small.

<img class="wp-image-3273 size-large aligncenter" src="https://lastzero.net/wp-content/uploads/2015/11/testtools-2-1024x555.png" width="1024" height="555" srcset="https://blog.liquidbytes.net/wp-content/uploads/2015/11/testtools-2-1024x555.png 1024w, https://blog.liquidbytes.net/wp-content/uploads/2015/11/testtools-2-500x271.png 500w, https://blog.liquidbytes.net/wp-content/uploads/2015/11/testtools-2-768x416.png 768w, https://blog.liquidbytes.net/wp-content/uploads/2015/11/testtools-2.png 1152w" sizes="(max-width: 1024px) 100vw, 1024px" />

Here&#8217;s an example of a test case &#8211; note the **setUp()** method, which get&#8217;s the ready-to-use object from the dependency injection container:

    use TestTools\TestCase\UnitTestCase;
    
    class FooTest extends UnitTestCase
    {
        protected $foo;
    
        public function setUp()
        {
            $this->foo = <strong>$this->get('foo')</strong>;
        }
    
        public function testBar()
        {
            $result = $this->foo->bar('Pi', 2);
            $this->assertEquals(3.14, $result);
        }
    }

You&#8217;ll get **fresh instances** in every test, so there is **no global state** that could harm our tests. From that point of view, they run in isolation. The compiled service definitions in the container are reused however for performance reasons.

This approach let&#8217;s you create tests **much faster**, you&#8217;ll get a **higher code coverage** and need to invest **less effort in maintenance**. It can be applied to all programming languages and is not limited to PHP.

### Self-initializing fixtures

The concept of [self-initializing fakes][3] as test doubles can be applied to all types of external data stores (databases) and services like SOAP or REST APIs.

`SelfInitializingFixtureTrait` enables existing classes to work with file based fixtures (record and playback):

    use TestTools\Fixture\SelfInitializingFixtureTrait;
    
    class Foo extends SomeBaseClass
    {
        use SelfInitializingFixtureTrait;
    
        public function bar($name, $type, array $baz = array())
        {
            return $this->callWithFixtures('bar', func_get_args());
        }
    }
    

To cover some of the most common use cases, **Doctrine DBAL** (SQL) is supported out of the box.

### GitHub repository

If you&#8217;re developing in PHP and like to give the tools a try, you can find them on GitHub:

<a href="https://github.com/lastzero/test-tools" target="_blank" rel="noopener">https://github.com/lastzero/test-tools</a>

 [1]: http://martinfowler.com/bliki/TestDouble.html
 [2]: http://lastzero.github.io/test-tools/
 [3]: http://martinfowler.com/bliki/SelfInitializingFake.html