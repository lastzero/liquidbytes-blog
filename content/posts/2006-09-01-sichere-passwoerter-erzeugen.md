---
title: Passwoerter fuer’s Web erzeugen
author: Michael Mayer
type: post
date: 2006-09-01T14:58:31+00:00
excerpt: |
  |
    Da es ja [http://crypto.stanford.edu/PwdHash/ gerade total angesagt] ist fuer jede Website ein anderes Passwort zu verwenden, habe ich ein kleines PHP Script geschrieben, dass einen Hash verwendet um aus einem einzigen Passwort und der Domain ein sicheres Passwort zu erzeugen:
    
    <code>
    #!/usr/local/bin/php
    < ?php
    
    if($argc < 2) {
    	echo "Usage: getpw [domain]\n";
    	}
    
    echo "Master Password: ".substr(base_convert(md5(fgets(STDIN).$argv[1]), 16, 36), 0, 8)."\n";
    ?>
    </code>
draft: true
private: true
url: /2006/09/sichere-passwoerter-erzeugen/
categories:
  - PHP

---
Da es ja [gerade total angesagt][1] ist fuer jede Website ein anderes Passwort zu verwenden, habe ich ein kleines PHP Script geschrieben, dass einen Hash verwendet um aus einem einzigen Passwort und der Domain ein sicheres Passwort zu erzeugen:

    
    #!/usr/local/bin/php
    <?php
    
    if($argc < 2) {
        echo "Usage: getpw [domain]\n";
        }
    
    echo "Master Password: ".substr(base_convert(md5(fgets(STDIN).$argv[1]), 16, 36), 0, 8)."\n";
    ?>

Viel Spass damit! Kann man beliebig anpassen und verfeinern. Warum ich keine oeffentliche Website dafuer aufsetze, duerfe ja wohl klar sein &#8211; oder will mir jemand sein Master Passwort geben? ;)

 [1]: http://crypto.stanford.edu/PwdHash/