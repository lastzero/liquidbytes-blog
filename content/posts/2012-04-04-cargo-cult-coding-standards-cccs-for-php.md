---
title: Cargo Cult Coding Standards (CCCS) for PHP
author: Michael Mayer
type: post
date: 2012-04-04T18:50:37+00:00
url: /2012/04/cargo-cult-coding-standards-cccs-for-php/
categories:
  - 'Best Practices &amp; Quality'
  - PHP
tags:
  - PHP

---
Cargo cult means that you copy some (previously) successful behavior from others and expect something good to happen to you (or your project) as well. For coding standards, that&#8217;s a very good starting point. Especially since formatting standards are often not based on any science &#8211; life is just easier, if everyone is using the same formatting for source code and we all hate the discussions at the start of projects, when some junior developer tries to promote it&#8217;s own fancy ideas.

However, during my work as Web software developer and consultant, I found a couple of standards that should be re-discussed. Not so much because they uglify code (sometimes they do), but because they can be truly counterproductive for code quality and developer efficiency. Often these standards had their reasons in the past, were borrowed from other programming languages such as _C_ or apply to certain types of software only (e.g. framework libraries).

#### **1. Document all source elements: Files, classes, methods, variables and annotate with comments, type hints, and other useful data.**

That&#8217;s the worst of all recommendations! Is it possible to create more confusion and duplication any other way? No. I agree with Robert C. Martin who says: <span style="text-decoration: underline;">The code is the only source of truth.</span> Why would I prefer to read a comment instead the actual source code? Why would I want to waste my time commenting bad code instead of refactoring it? Why would I want to risk outdated comments that lead other developers in the wrong direction? It&#8217;s way better to use good class, function and variable names than using phpDoc comments for each and every element of your class:

<pre>/**
 * Add a CD to the list
 *
 * @param string $title The title of the CD
 * @param string $author The author of the CD
 * @param int $numberOfTracks The number of tracks on the CD
 * @param int $durationInMinutes The duration of the CD in minutes
 */
public function addCD ($title, $author, $numberOfTracks, $durationInMinutes) {
    $cd = new CD();
    $cd-&gt;title = $title;
    $cd-&gt;author = $author;
    $cd-&gt;tracks = $numberOfTracks;
    $cd-&gt;duration = $duration;
    $this-&gt;cdList-&gt;add($cd);
}</pre>

Also, if there are comments everywhere, you won&#8217;t notice the really important comments like &#8220;// Don&#8217;t run this code on the production server! It deletes all data!&#8221;. Zend Studio sometimes needs a type hint &#8211; in that case you can easily add a phpDoc block where needed without cluttering all your code upfront, wasting your developers time and your customers money for no good reason.

It&#8217;s OK to add lots of phpDoc comments to _public libraries_ such as Zend Framework or Symfony, but that&#8217;s a very special case that should not be generalized. Public libraries often use those comments to create API documentation on their Web site &#8211; although I have to admit, that I never read the automatically created documentation (Maybe others do? If there is no &#8220;real&#8221; documentation available?).

In my opinion, it is way more helpful to have an _external documentation_ (a Wiki, or even a constantly updated Word file) than inline documentation that just duplicates class and function declarations without giving you true insights about how the whole system works or is supposed to work (that is often more interesting than the actual implementation).

My advice: If you really want to &#8220;comment&#8221; your code, write good _unit tests_, that show how to use it, instead of adding endless phpDocs. Lots of inline documentation is no sign of good quality. (That may be true for C code, because it is difficult to read even if the developer tries his best.)

#### **2. Non-public class members should be _underscorePrefixed.**

This is a common standard in the PHP world, but absolutely unnecessary since PHP 5 was released. <span style="text-decoration: underline;">PHP 5 has built-in visibility support</span>. Underscores not only make your code look ugly, but they also complicate refactorings: You always have to rename all (!) occurrences of a function/variable each time to change the visibility. Last but not least, it is an obvious duplication (don&#8217;t repeat yourself). Just because the standard was a necessary evil for PHP4 projects doesn&#8217;t mean we need to do it for the next 20 years, even though there are better ways now. As far as I know, this convention was dropped for Zend Framework 2 &#8211; that&#8217;s a good thing, but shows how long obvious issues need to be discussed by the community until something changes.

My advice: Simply don&#8217;t use that underscore. Everything will be good.

#### **3. Functions and Classes should have the opening brace on the line following the declaration, at the same indentation level.**

When I saw this the first time in PEAR, I didn&#8217;t like it. But more importantly: I didn&#8217;t understand why somebody would waste that much vertical space for no reason.

Later I found out that there actually is a very plausible reason for this convention: You can clearly see where the function/class body starts, if the declaration uses multiple (!) lines, e.g. if the class names are extremely long (should not happen with PHP 5.3 namespaces) or a function has a lot of parameters.

<pre>class My_Db 
    extends Zend_Db 
    implements ExampleInterface
{
    public function foo($arg)
    {
        return 'something';
    }

    protected function _bar($arg1, $arg2, $arg3,
        $arg4, $arg5, $arg6
    ) {
        $result = $this->_doSomething($arg1, $arg2, $arg3, 
            $arg4, $arg5, $arg6);

        return $result;
    }
}
</pre>

This is exactly, why I don&#8217;t like it: <span style="text-decoration: underline;">A function/method should not have that many parameters</span>, because it&#8217;s very difficult to test (and to use) functions with &#8211; let&#8217;s say &#8211; more than 3 parameters. A more detailed discussion can be found in the book _Clean Code_ by Robert C. Martin. Rather you should instantly notice that a refactoring is needed, when you reach the defined line length limit. In my perfect world, the code should look like this (the extra space after the method name is intentional to make declarations optically different from invocations):

<pre>class My_Db extends Zend_Db implements ExampleInterface {
    public function foo ($arg) {
        return 'something';
    }

    protected function bar (My_ValueObject $values) {
        $result = $this->doSomething($values);

        return $result;
    }
}
</pre>

Note how readable and compact this is. Another major reason not to waste vertical space (by adding useless comments or new lines after declarations) is to display as much context (functions related to the current function) as possible in the editor. If you use a lot of small functions (as it should be), you will notice that not adding new lines or useless comments helps tremendously. I know comments can be hidden in some editors, but if you ever used Eclipse, you should have noticed that using it is an impediment by itself (&#8220;Please wait for the background operation to complete&#8221;).

My advice: This small difference from the Zend Framework/PEAR standards usually is not a big deal and many developers will agree it looks better and saves space. Just don&#8217;t mix the styles in the same file.

#### **4. Keep lines 75-85 characters in length, maximum.**

That (still often used) rule is questionable in the year 2012, considering that it&#8217;s almost impossible to buy a computer or notebook without a wide (!) screen. Vertical space is very valuable and limited but horizontally you can easily allow 120 characters without getting into trouble. Of course, your code shouldn&#8217;t use it very often &#8211; it&#8217;s just the maximum. Readability of the code usually is reduced because of bad function/variable names and huge function bodies. I never had trouble reading PHP code because the line was too long.

My advice: Define a maximum level of nesting instead of limiting the line length to 80 characters fixed.

#### **5. Use the Singleton pattern, if you need only a single instance of an object to be accessed during the request.**

****Guess I don&#8217;t have to say much here. The modern version of this advice should read: &#8220;<span style="text-decoration: underline;">Use dependency injection to create shared objects.</span>&#8221;

My advice: Use the mature dependency injection container of [Symfony Components][1].

 [1]: http://symfony.com/doc/current/components/dependency_injection.html