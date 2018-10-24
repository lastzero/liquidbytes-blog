---
title: Wie kann man die Suche im Web verbessern?
author: Michael Mayer
type: post
date: 2006-08-21T15:41:06+00:00
excerpt: |
  |
    Nachdem ich sehe wie hilflos die grossen Anbieter von Suchmaschinen sind und der PageRank von Google auch langsam in die Jahre kommt (sprich viel Spam bei Google auftaucht, um die Rankings hochzuschrauben), habe ich mir ein paar Verbesserungen ueberlegt:
    
    * Seiten mit **wenig Content und viel Werbung** sollten ein niedriges Ranking erhalten.
    * Seiten die nur **redundante Inhalte** anzeigen (z.B. News-Feeds) sollten ein niedriges Ranking erhalten.
    * Seiten die Wert auf **Accessibility und Usability** legen sollten einen hohen Rank erhalten.
draft: true
private: true
url: /2006/08/web-suche-verbessern/
categories:
  - Google
  - 'The Web, Apps &amp; Services'

---
Nachdem ich sehe wie hilflos die grossen Anbieter von Suchmaschinen sind und der PageRank von Google auch langsam in die Jahre kommt (sprich viel Spam bei Google auftaucht, um die Rankings hochzuschrauben), habe ich mir ein paar Verbesserungen ueberlegt:

  * Seiten mit **wenig Content und viel Werbung** sollten ein niedriges Ranking erhalten.
  * Seiten die nur **redundante Inhalte** anzeigen (z.B. News-Feeds) sollten ein niedriges Ranking erhalten.
  * Seiten die Wert auf **Accessibility und Usability** legen sollten einen hohen Rank erhalten.
  * Damit verbunden: Seiten mit **validem HTML Source** (idealerweise **XHTML mit CSS**) sollten einen hohen Rank erhalten.
  * Seiten mit bestimmten **Keywords** sollten nicht in den Index kommen (z.B. Viagra, Porn,&#8230;).
  * Daneben kann man natuerlich noch auf **[Googles PageRank][1]** setzen, wobei ich nicht weiss, ob man das einfach uebernehmen darf (Patente?).
  * Wenn ein User auf ein Suchergebnis klickt, sollte das gezaehlt werden, weil es dann scheinbar passt. Wenn ein Ergebnis nie angeklickt wird obwohl es schon lange im Index ist, wird es nicht so relevant fuer viele sein (z.B. weil man schon in der Uebersicht sieht, dass es wahrscheinlich Spam ist).
  * Es sollte fuer bekannte User eine einfache Moeglichkeit geben **Spam** zu melden.

Google, Yahoo, MSN, Ask und Co koennen sich solche strengen Regeln nicht leisten, weil zuviele Site-Betreiber mit entsprechend minderwertigen Angeboten klagen wuerden und ausserdem: Sie verdienen an der Werbung. Ich hingegen kann keine mit Google/Yahoo/Amazon/&#8230;-Werbung verseuchten Sites mehr sehen. Man weiss ja schon gar nicht mehr wo Inhalt und wo Werbung ist und muss kunstfertig [um die Anzeigen herumlesen][2].

* * *

Gerade habe ich im [Forum von Golem.de][3] den Tipp bekommen, mal einen Blick auf <http://clusty.com/> zu werfen. Scheint brauchbare Ergebnisse zu liefern. Sollte man im Auge behalten.

Richtig ist auch der Hinweis, dass Google noch nicht mal [valides HTML][4] liefert. Eigentlich eine Schande, aber solange es funktioniert: Sei&#8217;s drum.

* * *

Inzwischen ist es fast 23 Uhr. Verspielt wie ich bin, habe ich gleich einen Spider geschrieben der die Sites mit einem ContentRank bewertet. Dieser richtet sich nach der Menge der Werbung, dem Text und der Qualitaet des HTML-Source. Erste Experimente haben gezeigt: **Die Idee funktioniert prima!**

Beispiele (teilweise von <http://www.google.com/Top/Computers/Internet/Organizations/>):

  * [Linkfinder die neue Suchmaschine][5] bekommt den Rank -2 (weil es dort NUR Google Werbung gibt; es ist gar keine Suchmaschine! Bei Google selber kommt diese Website teilweise auf Seite 1 &#8211; wer merkt was?)
  * [NARALO.INFO][6] bekommt den Rank 0 (Domain steht zum Verkauf)
  * [Web Design and Developers Association][7] bekommt den Rank 0 (die Seite ist Muell)
  * [Juice.nl][8] bekommt den Rank 0 (ist fast leer)
  * [AGN Domain Name Service][9] bekommt den Rank 1 (sehr schlecht gemacht)
  * [Google.com][10] bekommt den Rank 2 (ist fair \*g\*)
  * [OpenStandards.net][11] bekommt den Rank 3
  * [Berkman Center for Internet & Society][12] bekommt den Rank 3 (weil es kein valides XHTML ist, sonst 4)
  * [Oxford Internet Institute][13] bekommt den Rank 4
  * [The Web Standards Project][14] bekommt natuerlich auch den Rank 4 :)

Die Bewertung geht momentan von minus Unendlich (wenn es unendlich viel Werbung gibt&#8230;) bis 4 (keine Werbung, viel Inhalt und keine HTML Fehler), kann aber auch nach oben erweitert werden wenn ich z.B. den PageRank von Google noch irgendwie einbaue.

Ich habe uebrigens 2 bis 3 Stunden fuer diese ueberaus nuetzliche Software gebraucht. War ganz einfach. Wenn ich Zeit habe schreibe ich ne nette Web Oberflaeche und dann kann&#8217;s losgehn :)

 [1]: http://de.wikipedia.org/wiki/Pagerank
 [2]: http://www.shmula.com/31/my-interview-job-offer-from-google
 [3]: http://forum.golem.de/read.php?12752,705886,706256#msg-706256
 [4]: http://www.validome.org/validate/?uri=http://www.google.de/
 [5]: http://www.advertiseman.de/suchmaschine/suche-.htm
 [6]: http://naralo.info/
 [7]: http://www.wdda.org/
 [8]: http://juice.nl/
 [9]: http://www.adns.net/
 [10]: http://www.google.com/
 [11]: http://www.openstandards.net/viewOSnet3C.jsp
 [12]: http://cyber.law.harvard.edu/home/
 [13]: http://www.oii.ox.ac.uk/
 [14]: http://www.webstandards.org/