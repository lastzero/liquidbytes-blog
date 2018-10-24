---
title: Rettung in letzter Sekunde
author: Michael Mayer
type: post
date: 2006-07-10T14:01:30+00:00
excerpt: |
  |
    Nach einen PHP Update hat der Apache Web-Server nicht mehr gestartet. Die Fehlermeldung war wie folgt:
    
    <code>
    [error] (28)No space left on device: Cannot create SSLMutex
    [error] (28)No space left on device: mod_python: Failed to create 
                global mutex 1 of 32 (/tmp/mpmtx121851).
    Configuration Failed
    </code>
    
    Die Loesung ist entweder den Server neu zu starten oder sich mit {{ipcs}} mal die Kernel Resourcen anzusehen und diese dann mit {{iprm}} freizugeben. 
    
    Auf einer Website wurde
    
    {{ipcs -s | awk '/www-data/ {print $2}' | xargs ipcrm sem}}
    
    vorgeschlagen.
url: /2006/07/linux-mutex-error/
categories:
  - Linux

---
Nach einen PHP Update hat der Apache Web-Server nicht mehr gestartet. Die Fehlermeldung war wie folgt:

<pre>[error] (28)No space left on device: Cannot create SSLMutex
[error] (28)No space left on device: mod_python: Failed to create
            global mutex 1 of 32 (/tmp/mpmtx121851).
Configuration Failed</pre>

Die Loesung ist entweder den Server neu zu starten oder sich mit <tt>ipcs</tt> mal die Kernel Resourcen anzusehen und diese dann mit <tt>iprm</tt> freizugeben.

Auf einer Website wurde

<tt>ipcs -s | awk '/www-data/ {print $2}' | xargs ipcrm sem</tt>

vorgeschlagen.

Bitte nicht mit laufendem Apache machen ;)