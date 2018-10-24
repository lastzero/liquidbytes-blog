---
title: 'Howto: vsftpd mit virtuellen Usern einrichten'
author: Michael Mayer
type: post
date: 2007-06-22T13:15:17+00:00
excerpt: |
  |
    This is a small vsftpd howto I wrote some months ago, while installing it on a **SuSE Linux 10** server - sorry to those who don't understand German or use another Linux distribution! Some hints may be useful anyways...
    
    The official vsftpd home page is: http://vsftpd.beasts.org/
    
    +++ vsftpd installieren und anpassen
    
    Zunaechst sollte man sicherstellen, dass man vsftpd ueberhaupt installiert hat:
    <code>
    walrus:~ # rpm -q vsftpd
    vsftpd-2.0.2-3
    </code>
url: /2007/06/vsftpd-mit-virtuellen-usern/
categories:
  - Linux

---
This is a small vsftpd howto I wrote some months ago, while installing it on a **SuSE Linux 10** server &#8211; sorry to those who don&#8217;t understand German or use another Linux distribution! Some hints may be useful anyways&#8230;

The official vsftpd home page is: <http://vsftpd.beasts.org/>

### vsftpd installieren und anpassen

Zunaechst sollte man sicherstellen, dass man vsftpd ueberhaupt installiert hat:

<pre>walrus:~ # rpm -q vsftpd
vsftpd-2.0.2-3</pre>

Falls nicht, wie gewohnt ueber yast installieren (die Suchfunktion erspart Scrollen in der Paketliste!). Bei anderen Linux Distributionen entsprechend (z.B. yum unter Fedora).

Als naechstes legt man in /etc/passwd (bzw. ueber den Befehl <tt>useradd</tt>) einen user fuer vsftpd an:

<tt>useradd --system --home /var/run/vsftpd/ ftpsecure</tt>

In <tt>/etc/xinetd.d/vsftpd</tt> setzt man <tt>disable = no</tt>.

Die <tt>/etc/vsftpd.conf</tt> kann beispielsweise so aussehen (die Strings fuer guest\_username und ftpd\_banner sind ggf. anzupassen):

    
    dirmessage_enable=YES
    guest_enable=YES
    guest_username=someuser
    user_sub_token=$USER
    write_enable=YES
    anon_mkdir_write_enable=YES
    anon_upload_enable=YES
    nopriv_user=ftpsecure
    ftpd_banner="Welcome to MY_HOSTNAME"
    hide_ids=YES
    local_enable=YES
    chroot_local_user=YES
    anonymous_enable=NO
    anon_world_readable_only=YES
    pam_service_name=vsftpd

### FTP User anlegen

Um vsftpd mit virtuellen Accounts betreiben zu koennen, benoetigt man einen richtigen User Account (guest_username) und ein Verzeichnis (Home Verzeichnis dieses Users). Grundsaetzlich kann man dazu auch bereits bestehende Accounts aus der <tt>/etc/passwd</tt> verwenden (wie z.B. wwwrun oder apache, wenn man Webhosting betreibt):

<tt>someuser:x:1234:100:Virtual FTP User Account:/home/virtual/$USER:/bin/false</tt>

Zum Anlegen eines neuen Users kann wie oben ggf. <tt>useradd</tt> verwendet werden.

Wichtig ist das $USER, damit jeder User ein eigenes Verzeichnis hat. Man kann es selbsverstaendlich auch weglassen, aber dann landen alle Benutzer im selben Verzeichnis. Die $USER Verzeichnisse werden uebrigens, anders als in der vsftpd Doku angegeben, NICHT automatisch erstellt! Scheint ein Bug zu sein, ueber den man auch ueber Google einiges findet. Loesung habe ich noch keine gefunden.

### PAM

Wo kommen nun die virtuellen Accounts her? Die Authentifizierung wird (leider nicht ganz trivial) ueber PAM (pam_pwdfile) und eine Apache-kompatible Account-Datei realisiert. Diese kann grundsatzlich ueberall liegen, sollte aber nur von root gelesen werden koennen. Im Beispiel heisst sie <tt>/etc/ftp/users</tt> und hat das einfache Format <tt>user:password_crypt</tt>. Sie kann mit dem Tool htpasswd bzw. htpasswd2 verwaltet werden. Auf [debianhowto.de][1] ist auch ein Perl Script zur Userverwaltung zu finden.

Da wir oben <tt>pam_service_name=vsftpd</tt> gesetzt haben, muss die Konfiguration in <tt>/etc/pam.d/vsftpd</tt> erfolgen:

    
    #%PAM-1.0
    
    auth    required pam_pwdfile.so pwdfile /etc/ftp/users
    account required pam_permit.so

Wir waeren nun fertig, wuerde SuSE das benoetigte PAM Modul <tt>pam_pwdfile.so</tt> mitliefern &#8211; dies ist jedoch bei OpenSuSE 10 ganz offensichtlich nicht der Fall :(

Aber kein Problem&#8230; man kann es hier [downloaden][2]:

<http://cpbotha.net/pam_pwdfile.html>

Zusaetzlich muss man zum Kompilieren noch Linux-PAM selbst [herunterladen][3]:

<ftp://ftp.kernel.org/pub/linux/libs/pam/pre/library>

Anschliessend pam_pwdfile-0.XX.tar.gz in Linux-PAM-0.XX/modules/ entpacken:

    
    tar -xzf Linux-PAM-0.78.tar.gz
    cd Linux-PAM-0.XX/modules/
    tar -xzf pam_pwdfile-0.XX.tar.gz

Jetzt kann man das Modul kompilieren und kopieren:

    
    cd ..
    ./configure
    make all
    Auf 64-bit Systemem:
    cp modules/pam_pwdfile-0.XX/pam_pwdfile.so /lib64/security/
    oder auf 32-bit Systemem:
    cp modules/pam_pwdfile-0.XX/pam_pwdfile.so /lib/security/

### Das wars {#toc3}

Restart des xinetd ueber <tt>/etc/init.d/xinetd restart</tt> sollte nun zum gewuenschten Ergebnis fuehren. Bitte nicht vergessen User in /etc/ftp/users und die entsprechenden Unterverzeichnisse in /home/virtual anzulegen (wenn keine Schreibrechte da sind, funktioniert der Upload natuerlich nicht&#8230; also darauf achten, dass die Rechte ueberall stimmen).

Wenn noch eine Firewall da ist, dann muss Port 21 uebrigens freigegeben werden ;)

 [1]: http://archiv.debianhowto.de/de/vsftpd/installation_konfiguration.html
 [2]: http://cpbotha.net/files/pam_pwdfile/pam_pwdfile-0.99.tar.gz
 [3]: ftp://ftp.kernel.org/pub/linux/libs/pam/pre/library/Linux-PAM-0.78.tar.gz