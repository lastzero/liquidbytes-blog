---
title: XSS Probleme in PEAR::Text_Wiki 1.1.0
author: Michael Mayer
type: post
date: 2006-06-10T16:52:12+00:00
excerpt: |
  Gestern habe ich durch Zufall einen [http://de.wikipedia.org/wiki/Cross-Site_Scripting XSS] Bug in Text_Wiki entdeckt... wundert mich, dass das vor mir niemand aufgefallen ist... mal sehen, ob es auch eine News-Site melden wird - so oft verwendet wird Text_Wiki wohl nicht...
  
  Siehe:
  * http://pear.php.net/bugs/bug.php?id=7847
  * http://cvs.php.net/viewcvs.cgi/pear/Text_Wiki/Text/Wiki/Render/Xhtml/Raw.php?view=log
url: /2006/06/pear_text_wiki_xss/
categories:
  - PHP

---
Gestern habe ich durch Zufall einen [XSS][1] Bug in Text_Wiki entdeckt&#8230; wundert mich, dass das vor mir niemand aufgefallen ist&#8230; genau genommen geht es um eine unsichere Konfigurations-Option&#8230;

Siehe:

  * <http://pear.php.net/bugs/bug.php?id=7847>
  * <http://cvs.php.net/viewcvs.cgi/pear/Text_Wiki/Text/Wiki/Render/Xhtml/Raw.php?view=log>

 [1]: http://de.wikipedia.org/wiki/Cross-Site_Scripting