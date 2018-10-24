---
title: Configuring Ubuntu/Xubuntu and Apache 2 for local development environments
author: Michael Mayer
type: post
date: 2012-10-23T19:10:12+00:00
url: /2012/10/configuring-ubuntu-and-apache-2-for-development-environments/
categories:
  - Linux
  - PHP
tags:
  - Apache
  - DNS
  - Ubuntu
  - Xubuntu

---
Most Web server howtos out there are concerned with production environments, where you need a high level of performance and security. As a developer who runs Apache 2 on localhost, you have other requirements, such as **quick configuration and flexibility**. It&#8217;s inconvenient to edit (usually copy & paste) your virtual hosts configuration and add entries to **/etc/hosts** whenever you are working on new projects (e.g. on GitHub) &#8211; especially, if you just want to test something.

Here&#8217;s a complete guide for how to set up Apache 2 on Ubuntu/Xubuntu 12.10. Other distributions should not be much different, if they provide the same packages. You should be able to just copy & paste most of this into a terminal window (make sure to replace {username} with your actual username) :

1) Install the Apache Web server software (if not done yet):

<pre>sudo apt-get install apache2.2-bin apache2.2-common apache2-mpm-prefork apache2-utils</pre>

2) Install additional packages, such as PHP 5 (if needed):

<pre>sudo apt-get install libapache2-mod-php5 php5-cli php5-common php5-dev php5-suhosin</pre>

3) Install dnsmasq (a DNS forwarder), so that you can use wildcard subdomains on localhost:

<pre>sudo apt-get install dnsmasq</pre>

Configure dnsmasq to resolve *.localhost to 127.0.0.1 in **/etc/dnsmasq.d/localhost.conf**:

<pre>address=/localhost/127.0.0.1</pre>

Make sure to execute the editor with sudo, so that you have write permissions (applies to all steps, in which you have to edit files in /etc). Example for **nano**:

<pre>sudo nano /etc/dnsmasq.d/localhost.conf</pre>

_Hint: Control-X closes the editor and Control-O saves the current file._

4) Configure the DHCP client to use the DNS forwarder in **/etc/dhcp3/dhclient.conf**:

<pre>prepend domain-name-servers 127.0.0.1;</pre>

5) Configure Apache in **/etc/apache2/sites-available/localhost**:

<pre>&lt;VirtualHost *:80&gt;
 &lt;Directory /home/{username}/coding&gt;
  Options Indexes FollowSymLinks MultiViews
  AllowOverride All 
  Order allow,deny
  allow from all
 &lt;/Directory&gt;
 VirtualDocumentRoot /home/{username}/coding/hosts/%0
 ServerName localhost
 ServerAlias *.localhost
 ErrorLog /home/{username}/coding/logs/error.log
 CustomLog /home/{username}/coding/logs/access.log combined
&lt;/VirtualHost&gt;</pre>

Don&#8217;t forget to create the directories:

<pre>mkdir ~/coding
mkdir ~/coding/logs
mkdir ~/coding/hosts</pre>

6) Although not strictly required, I found it very convenient to execute Apache with the permissions of my own user (I don&#8217;t want files that belong to &#8220;www-run&#8221; in my home directory). You can configure this in **/etc/apache2/envvars**:

<pre>export APACHE_RUN_USER={username}
export APACHE_RUN_GROUP={username}</pre>

_Warning: This means Apache can access all your files. Don&#8217;t do this, if you are not sure about the implications._

7) Enable/disable Apache modules/sites and restart all services:

<pre>sudo service dnsmasq restart
sudo dhclient
sudo a2enmod alias vhost_alias rewrite
sudo a2dissite default
sudo a2ensite localhost
sudo service apache2 restart</pre>

8) I suggest creating a directory named **~/coding/github** for your GitHub projects and something similar for other sites/repositories you can group. You can then easily link your subdirectories to hostnames like this, without touching any config files:

<pre>cd ~/coding/hosts
ln -s ../github/test/htdocs test.localhost</pre>

**~/coding/github/test/htdocs** can be accessed with any local Web browser at **http://test.localhost/**

_Hint: Apache was configured to allow the use of .htaccess files for project specific settings. You normally find an example .htaccess file in the project documentation. In step 7, we already enabled RewriteEngine because it is commonly used in .htaccess files._

That&#8217;s it :)