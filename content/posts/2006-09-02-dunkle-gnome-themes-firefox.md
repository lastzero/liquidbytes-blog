---
title: 'Howto: Dunkle Gnome Themes und Firefox/Thunderbird'
author: Michael Mayer
type: post
date: 2006-09-02T17:51:57+00:00
excerpt: |
  |
    Eigentlich ist es ganz einfach ein [http://www.gnome-look.org/content/show.php?content=44495 dunkles Gnome-Theme] zu verwenden: Downloaden und per Drag-and-Drop installieren. Nur wird man, uebrigens auch unter OS X, alsbald feststellen, dass man die Menues von Firefox und Thunderbird 1.5 nicht mehr lesen kann, weil der Font dort unveraendert schwarz ist. Das macht sich auf einem schwarzen Hintergrund nicht wirklich gut. Es gibt jetzt 3 Moeglichkeiten:
    
    # Resigniert das schoene neue Theme deinstallieren. Nicht Sinn der Sache.
url: /2006/09/dunkle-gnome-themes-firefox/
categories:
  - 'Linux, BSD &amp; Unix'
  - 'Mac OS X &amp; iOS'

---
Eigentlich ist es ganz einfach ein [dunkles Gnome-Theme][1] zu verwenden: Downloaden und per Drag-and-Drop installieren. Nur wird man, uebrigens auch unter OS X, alsbald feststellen, dass man die Menues von Firefox und Thunderbird 1.5 nicht mehr lesen kann, weil der Font dort unveraendert schwarz ist. Das macht sich auf einem schwarzen Hintergrund nicht wirklich gut. Es gibt jetzt 3 Moeglichkeiten:

  1. Resigniert das schoene neue Theme deinstallieren. Nicht Sinn der Sache.
  2. Ein Firebird/Thunderbird Theme installieren, dass die Farben entsprechend anpasst. Will man eigentlich auch nicht, weil man damit dann auch 1000 andere Design-Aenderungen hat, die nicht zum Theme passen.
  3. Man aendert die userChrome.css :)

<img src="/files/images/images/elegance.thumbnail.png" alt="elegance.thumbnail.png" align="right" />

Ich habe keine Ahnung wie der Durchschnitts-User auf 3. kommen soll, aber deshalb schreibe ich das hier. Die userChrome.css muss man natuerlich erst anlegen, wobei man dazu userChrome-example.css als Vorlage verwenden kann. Die Datei liegt ueberlicherweise in

<tt>/home/[username]/.mozilla/firefox/[profile]/chrome/</tt>

Um den Menu-Font weiss statt schwarz anzuzeigen muss man nur die folgenden Zeilen einfuegen:

    
    menu {
       color: #fff !important;
       }

Unter OS X wird es entsprechend funktionieren. Windows-User haben keine dunklen Themes zur Auswahl &#8211; damit stellt sich das Problem nicht.

## OpenOffice.org {#toc0}

Bei OpenOffice bin ich leider noch nicht schlau geworden. Habe mal eine Frage ins Forum eingestellt:

<http://de.openoffice.info/viewtopic.php?t=8872>

 [1]: http://www.gnome-look.org/content/show.php?content=44495