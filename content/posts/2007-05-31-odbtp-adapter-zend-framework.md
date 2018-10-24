---
title: 'Zend Framework: Unicode DB adapter for SQL Server'
author: Michael Mayer
type: post
date: 2007-05-31T13:26:06+00:00
excerpt: |
  |
    Yeah, I finally got it managed to publish my proposal for the Zend Framwork ODBTP database adapter component:
    
    http://framework.zend.com/wiki/display/ZFPROP/Zend_Db_Adapter_Odbtp_Mssql
    
    The default MS SQL database driver does not work with Unicode, as SQL Server expects Unicode strings in the UCS-2 encoding (UCS-2 contains null bytes and the driver is not binary-safe). ODBTP works as layer between PHP and SQL Server and accepts Unicode strings in the UTF-8 encoding.
url: /2007/05/odbtp-adapter-zend-framework/
categories:
  - 'Databases &amp; XML'
  - Open Source
  - PHP
  - Zend Framework
tags:
  - SQL

---
Yeah, I finally got it managed to publish my proposal for the Zend Framwork ODBTP database adapter component:

[http://framework.zend.com/wiki/display/ZFPROP/Zend\_Db\_Adapter\_Odbtp\_Mssql][1]

The default MS SQL database driver does not work with Unicode, as SQL Server expects Unicode strings in the UCS-2 encoding (UCS-2 contains null bytes and the driver is not binary-safe). ODBTP works as layer between PHP and SQL Server and accepts Unicode strings in the UTF-8 encoding.

The required classes are attached bellow. Feel free to download, use and test them! Please note that they \*might\* need to be adapted for the latest framework release.

I also wrote an article about multi-lingual enterprise applications for the German PHP Magazine. Hope it will be published in the next issue.

 [1]: http://framework.zend.com/wiki/display/ZFPROP/Zend_Db_Adapter_Odbtp_Mssql