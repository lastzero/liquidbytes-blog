---
title: 'Howto: WWAN on a Lenovo ThinkPad X100e with Ubuntu 10.04'
author: Michael Mayer
type: post
date: 2010-06-19T13:08:06+00:00
url: /2010/06/wwan-lenovo-thinkpad-x100e-ubuntu-10-04/
categories:
  - 'Hardware &amp; Gadgets'
  - Linux
tags:
  - 'Hardware &amp; Gadgets'
  - Howto
  - Linux
  - Ubuntu

---
I could not find a single correct and useful description how to get the **Gobi™ 2000 PCI Express Mini Card**, that is built into some **Lenovo ThinkPad X100e** models, to work with **Ubuntu Linux 10.04 LTS &#8220;Lucid Lynx&#8221;** on Google (which is identical to the Internet). Therefore I want to share my knowledge with you, before I forget everything. This howto **might also work for other notebooks** that use the same WWAN/UMTS/3G card (like the **ThinkPad T410**).

  1. First you should **turn off** and open your notebook at the bottom by removing the 7 screws. Inside, you will see the **sim card socket** and instructions how to use it (it&#8217;s **not** too obvious). If you got another ThinkPad model like the T410, the sim card needs to be installed differently, for example behind the battery pack.
  2. If you did not install Ubuntu yet and Windows 7 is still there, then get the files **amss.mbn**, **apps.mbn** and **UQCN.mbn** from the directory _C:\Program Files (x86)\QUALCOMM\Images\Lenovo_ &#8211; the first two files are in the &#8220;UMTS&#8221; sub-directory, the other one is in &#8220;0&#8221;. As I didn&#8217;t have my Windows 7 partition on the X100e anymore, I simply copied the files from a ThinkPad T410. If you don&#8217;t have a copy of these files, you will find some advice at [http://www.thinkwiki.org/wiki/Talk:Qualcomm\_Gobi\_2000][1].
  3. **If you did not install Ubuntu yet, do it now!** The X100e has no DVD drive, so you need to download the ISO image from ubuntu.com and then create a **bootable USB stick**. The free tool http://unetbootin.sourceforge.net/ can be used for that. Use the **64bit version** of Ubuntu, as the X100e supports **up to 8GB** of memory and you don&#8217;t want to re-install everything after an upgrade. I know the Ubuntu Web site says that it is not recommended for daily desktop usage &#8211; this is nonsense.
  4. **Don&#8217;t use the proprietary ATI graphics driver.** Uninstall or disable it. It will break with the new kernel.
  5. **Download** the latest version of the gobi loader from <http://www.codon.org.uk/~mjg59/gobi_loader/download/>
  6. Untar the files using _tar -xzf gobi_loader-0.6.tar.gz_, change into the directory and then install the tool via the usual _make_ and _sudo make install_ procedure.
  7. Now **copy the files** amss.mbn, apps.mbn and UQCN.mbn to **/lib/firmware/gobi/**: _sudo cp amss.mbn apps.mbn UQCN.mbn /lib/firmware/gobi_
  8. **Get the latest mainline kernel** from <http://kernel.ubuntu.com/~kernel-ppa/mainline/> &#8211; I am using **v2.6.35-rc1-lucid**, but as kernel development does not stop, you should check if there is a later version available. The important thing is that the directory ends with -lucid for Ubuntu 10.04. If you use an older version, you can try v2.6.34-rc2, but I am not sure, if that will work as well. You need to download the kernel **headers** and **image for your architecture** (i386/32bit or amd64/64bit) **only**.
  9. Follow the instructions on <https://wiki.ubuntu.com/KernelTeam/MainlineBuilds> &#8211; if there are other .deb files in the current directory (where you downloaded the kernel files in the previous step), then you can not use _sudo dpkg -i *.deb_, but need to explicitly list the deb files: _sudo dpkg -i linux-headers-2.6.27-02062715-generic\_2.6.27-02062715\_amd64.deb linux-headers-2.6.27-02062715\_2.6.27-02062715\_all.deb linux-image-2.6.27-02062715-generic\_2.6.27-02062715\_amd64.deb_ (if you got the 64bit version of Ubuntu installed).
 10. After restart, you will notice that your wireless connection does not work anymore. Therefore, you should **wait** and **download the file rtl8192se\_linux\_2.6.0015.0127.2010.tar.gz** first, for example from [http://www.realtek.com.tw/downloads][2] &#8211; some people say downloads from this site were corrupted, so wish you good luck! Some people also say these drivers don&#8217;t work with a 64bit kernel. I did not experience any problems in that direction. But if you want to try, there seems to be another (older) driver for 64bit systems available for download at [http://launchpadlibrarian.net/34090404/rtl8192se\_linux\_2.6.0010.1012.2009_64bit.tar.gz][3]
 11. Of course, you need **the build-essential package** to compile the drivers: _sudo apt-get install build-essential &#8211;_ now it should be safe to restart.
 12. After restart, you will notice that the **ThinkPad hotkeys are working now**, which is another benefit of kernel 2.6.35. However you still need to compile those WLAN drivers: extract the files from the tar archive (_tar -xzf somefile.tar.gz_), change into the directory, say &#8220;_make_&#8221; and then **NOT** sudo make install. Instead you copy the file **HAL/rtl8192/r8192se_pci.ko** to /lib/modules/2.6.35-020635rc1-generic/kernel/drivers/net/wireless/ (depending on your kernel version, of course): _sudo cp HAL/rtl8192/r8192se_pci.ko /lib/modules/2.6.35-020635rc1-generic/kernel/drivers/net/wireless/_
 13. After a _sudo depmod -a_ or a restart you can use wireless networking again.
 14. Last but not least, you need to unlock your WWAN card via _rfkill unblock wwan_ and you&#8217;re done! You can now create new WWAN connections using the standard [Gnome Network Manager][4] in the top right corner.

Enjoy! xD

(I am not responsible for any damages)

**Update**

This table shows the contents of the individual Gobi 2000 firmware files:

<table style="font-size: 11px;" border="1" cellspacing="0" cellpadding="4">
  <tr>
    <th>
      Dir
    </th>
    
    <th>
      Image
    </th>
    
    <th>
      Remarks
    </th>
  </tr>
  
  <tr>
    <td>
    </td>
    
    <td>
      Vodafone Image
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      1
    </td>
    
    <td>
      Verizon Image
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      2
    </td>
    
    <td>
      ATT Image
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      3
    </td>
    
    <td>
      Sprint Image
    </td>
    
    <td>
      includes special Firmware
    </td>
  </tr>
  
  <tr>
    <td>
      4
    </td>
    
    <td>
      T-Mobile Image
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      6
    </td>
    
    <td>
      Generic UMTS Image
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      7
    </td>
    
    <td>
      Telefonica Image
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      8
    </td>
    
    <td>
      Telecom Italia Image
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      9
    </td>
    
    <td>
      Orange Image
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      12
    </td>
    
    <td>
      DoCoMo Image
    </td>
    
    <td>
      includes special Firmware
    </td>
  </tr>
  
  <tr>
    <td>
      UMTS
    </td>
    
    <td>
      Default Firmware
    </td>
    
    <td>
    </td>
  </tr>
</table>

 [1]: http://www.thinkwiki.org/wiki/Talk:Qualcomm_Gobi_2000
 [2]: http://www.realtek.com.tw/downloads/downloadsView.aspx?Langid=1&PNid=21&PFid=48&Level=5&Conn=4&DownTypeID=3&GetDown=false&Downloads=true
 [3]: http://launchpadlibrarian.net/34090404/rtl8192se_linux_2.6.0010.1012.2009_64bit.tar.gz
 [4]: http://projects.gnome.org/NetworkManager/