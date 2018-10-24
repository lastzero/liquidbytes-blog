---
title: Exporting users from DBMail to Postfix lookup table
author: Michael Mayer
type: post
date: 2008-05-11T13:25:11+00:00
url: /2008/05/exporting-users-from-dbmail-to-postfix-lookup-table/
categories:
  - Linux
tags:
  - DBMail
  - Email
  - Mail

---
I wrote so many scripts the last couple of years that I can&#8217;t remember anymore&#8230; anyways, I was working on my mail server config today and found this little PHP script that exports users from the DBMail database to a **Postfix lookup table**, so that unknown users can be rejected upfront by postfix (thus reducing the load on the mail server). It also outputs a list of domains.

<pre>#!/usr/local/bin/php
&lt;?php
$mysqli = new mysqli("localhost", "dbmail", "yourpassword", "dbmail");
/* check connection */
if (mysqli_connect_errno()) {
printf("Connect failed: %s\n", mysqli_connect_error());
exit();
}
$q = $mysqli-&gt;query("SELECT DISTINCT alias FROM dbmail_aliases");
$content = '';
$domains = array();
while($r=$q-&gt;fetch_assoc()) {
$content .= $r['alias']." OK\n";
$parts = explode('@', $r['alias']);
if(!in_array($parts[1], $domains)) {
$domains[] = $parts[1];
}
}
file_put_contents('myusers', $content);
file_put_contents('mydomains', join("\n", $domains));
exec('postmap myusers');
$mysqli-&gt;close();
?&gt;</pre>

Maybe it is of some use for anybody out there&#8230; the config in <tt>/etc/postfix/main.cf</tt> should look like:

<pre>mydestination = /etc/postfix/mydomains localhost
local_recipient_maps = hash:/etc/postfix/myusers $alias_maps</pre>