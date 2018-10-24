---
title: Updated version of Zend_Db_Adapter_Odbtp_Mssql
author: Michael Mayer
type: post
date: 2008-05-19T14:16:08+00:00
url: /2008/05/updated-version-of-zend_db_adapter_odbtp_mssql/
categories:
  - 'Databases &amp; XML'
  - Open Source
  - PHP
  - Zend Framework
tags:
  - ODBTP
  - SQL
  - SQL Server
  - Windows
  - Zend Framework

---
As people start asking me about that [ODBTP adapter][1] for [Zend Framework][2], I will publish it as attachment to this post now. It should work with the latest version of Zend Framework (as reported by a developer). If you want to use it, just copy the files to your include path (make sure the path comes before the ZF path). Of course, you need to install [ODBTP][3] as well and add _extension=php\_odbtp\_mssql.dll_ to your php.ini.

**[Download here][4]**

 [1]: http://framework.zend.com/wiki/display/ZFPROP/Zend_Db_Adapter_Odbtp_Mssql
 [2]: http://framework.zend.com/
 [3]: http://odbtp.sourceforge.net/
 [4]: /downloads/Zend.zip