---
title: VMware Server on Fedora Core 6
author: Michael Mayer
type: post
date: 2007-06-04T20:11:37+00:00
excerpt: |
  |
    If you want to install the free [http://www.vmware.com/products/server/ VMware Server 1.0.3] on Fedora Core 6 with the latest kernel, you need to change the kernel module source as follows:
    <code>
    cd /usr/lib/vmware/modules/source/
    tar -xvf vmmon.tar
    vi vmmon-only/include/compat_kernel.h
    </code>
    
    Change the line
    <code>
    static inline _syscall1(int, compat_exit, int, exit_code);
    </code>
    
    to
    <code>
    int compat_exit(int exit_code);
    </code>
    
    Then recreate the archive:
    <code>
    cp vmmon.tar vmmon.tar.orig
    tar -cf vmmon.tar vmmon-only
    </code>
url: /2007/06/vmware-fedora-core/
categories:
  - Linux

---
If you want to install the free [VMware Server 1.0.3][1] on Fedora Core 6 with the latest kernel, you need to change the kernel module source as follows:

<pre>cd /usr/lib/vmware/modules/source/
tar -xvf vmmon.tar
vi vmmon-only/include/compat_kernel.h</pre>

Change the line

<pre>static inline _syscall1(int, compat_exit, int, exit_code);</pre>

to

<pre>int compat_exit(int exit_code);</pre>

Then recreate the archive:

<pre>cp vmmon.tar vmmon.tar.orig
tar -cf vmmon.tar vmmon-only</pre>

Now, you should be able to run the config script as described in the installation manual:

<pre>/usr/bin/vmware-config.pl</pre>

 [1]: http://www.vmware.com/products/server/