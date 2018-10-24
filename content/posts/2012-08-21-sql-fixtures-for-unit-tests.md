---
title: Using SQL fixtures for database related unit tests
author: Michael Mayer
type: post
date: 2012-08-21T11:19:03+00:00
url: /2012/08/sql-fixtures-for-unit-tests/
categories:
  - 'Best Practices &amp; Quality'
  - 'Databases &amp; XML'
  - Unit Testing
tags:
  - PHP
  - PHPUnit
  - SQL

---
This is a short tutorial to show how to use fixtures for database related unit tests. The inspiration for this post came from a conversation I had at the recent PHP Unconference in Hamburg, Germany.

From my experience, the usual way to test database related classes is to use a special test database, that needs a reset before each run (drop the existing tables and import the test dump). That approach has several severe drawbacks, all observed in real life projects many, many times:

  * Importing the database dump **may take some time**, but unit tests should run quickly.
  * Running queries against a database server **requires a running server and slows down the tests**, depending on the speed of your server and your network (some developers may use remote connections).
  * **Each developer needs it&#8217;s own test database**, otherwise there may be conflicts, if one developer resets the database while tests are running.
  * You **need to ensure the test dump is always in sync with the latest database structure**. This is something that usually breaks several times a month, because it&#8217;s hard to automate and there always is a lack of time for tasks like these.
  * Even if you reset the database once before running the test suite, you still got **state in your database** while the tests are running. That means **the successful execution of your tests may depend on the order they are called**. Possible problems are hard to discover without investing a significant amount of time. Imagine a test that counts the rows in a table and expects a certain number. Another test may insert a row in that table, so the number of rows changes. If you run the second test before the first one, it breaks.

The alternative should be really easy to come up with, but I&#8217;ve rarely seen it anywhere*: Use traditional **fixture files** to record and replay the result of database queries. Just like you would deal with tests for classes that use a SOAP or REST service in the background. Some developers also use manually created mock objects for that purpose, but automatically creating fixture files seems to be the easier way for me and (again) it saves a lot of time you can use to develop features or improve your source code.

How does that look like in reality? First, you should use some fixture class to compose the fixture file name and to read/write/serialize the data (for example source code, see <a title="Opens github.com in a new window" href="https://github.com/smashedpumpkin/liquidlibrary/blob/master/Liquid/Fixture.php" target="_blank">Liquid_Fixture</a> on github). Second, you must modify your database adapter class to support optional fixtures:

<pre class="code">$fixturePath = dirname(__FILE__) . '/_fixtures/';
$db = new My_Db();
$db-&gt;useFixtures($fixturePath);
</pre>

Internally, the database adapter might look something like this (the example &#8211; which you can of course copy & paste into your application &#8211; is based on Zend_Db, but most adapters are similar):

<pre class="code">class Liquid_Db extends Zend_Db_Adapter_* {
    private $_fixturePath = false;

    public function __construct ($config) {
        parent::__construct ($config);

        if(isset($config['fixtures'])) {
            $this-&gt;useFixtures($config['fixtures']);
        }
    }

    public function useFixtures ($fixturePath) {
        $this-&gt;_fixturePath = Liquid_Fixture::normalizePath($fixturePath);
    }

    public function disableFixtures () {
        $this-&gt;_fixturePath = false;
    }

    protected function callWithFixtures ($functionName, $params) {
        if($this-&gt;_fixturePath) {
            $fixture = new Liquid_Fixture($this-&gt;_fixturePath . Liquid_Fixture::getFilename($functionName, $params));

            try {
                $result = $fixture-&gt;getData();
                return $result;
            } catch (Liquid_Fixture_Exception $e) {
                // No fixture found, the query has to be executed
            }
        }

        $result = call_user_func_array(array('parent', $functionName), $params);

        if($this-&gt;_fixturePath) {
            $fixture-&gt;setData($result);
        }

        return $result;
    }

    public function fetchAll ($sql, $bind = array(), $fetchMode = null) {
        return $this-&gt;callWithFixtures('fetchAll', array($sql, $bind, $fetchMode));
    }

    public function fetchPairs ($sql, $bind = array()) {
        return $this-&gt;callWithFixtures('fetchPairs', array($sql, $bind));
    }

    public function fetchAssoc ($sql, $bind = array()) {
        return $this-&gt;callWithFixtures('fetchAssoc', array($sql, $bind));
    }

    public function fetchOne ($sql, $bind = array()) {
        return $this-&gt;callWithFixtures('fetchOne', array($sql, $bind));
    }

    public function fetchRow ($sql, $bind = array(), $fetchMode = null) {
        return $this-&gt;callWithFixtures('fetchRow', array($sql, $bind, $fetchMode));
    }

    public function fetchCol ($sql, $bind = array()) {
        return $this-&gt;callWithFixtures('fetchCol', array($sql, $bind));
    }

    public function insert ($table, array $bind) {
        return $this-&gt;callWithFixtures('insert', array($table, $bind));
    }

    public function update ($table, array $bind, $where = '') {
        return $this-&gt;callWithFixtures('update', array($table, $bind, $where));
    }
}
</pre>

Also see this general PHPUnit guide I wrote a while ago (German): <a href="http://www.chaoticpattern.net/#wiki/PHP%20Unit-Tests" target="_blank">http://www.chaoticpattern.net/#wiki/PHP%20Unit-Tests</a>

* _&#8220;There is no time to save time.&#8221; (Gaylord Aulke)_