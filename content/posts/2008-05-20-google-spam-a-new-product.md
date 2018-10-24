---
title: Google Spam – a new product?
author: Michael Mayer
type: post
date: 2008-05-20T20:36:01+00:00
url: /2008/05/google-spam-a-new-product/
categories:
  - Google
  - System Administration
tags:
  - Email
  - Google
  - Spam

---
[<img class="alignright size-full wp-image-782" title="Small blinking Google toy" src="http://www.nulldevice.de/wp-content/uploads/2008/05/blinking_google_toy_small.jpg" alt="" width="150" height="78" />][1]I know that mail logs are not the most interesting thing on earth, but I&#8217;m not used to get spam from Google Mail&#8230; from Yahoo and MSN maybe, but not from Google&#8230; never ever&#8230; so I try to understand this:

<tt>May 20 21:43:16 mail postfix/smtpd[30948]: connect from <strong>qb-out-0506.google.com</strong>[72.14.204.235]<br /> May 20 21:43:17 mail postfix/policyd-weight[2754]: weighted check: NOT_IN_SBL_XBL_SPAMHAUS=-1.5 NOT_IN_SPAMCOP=-1.5 NOT_IN_BL_NJABL=-1.5 CL_IP_EQ_HELO_IP=-2 (check from: .gmail. - helo: .qb-out-0506.google. - helo-domain: .google.) FROM/MX_MATCHES_HELO(DOMAIN)=-2 <client=72.14.204.235> <helo=<strong>qb-out-0506.google.com</strong>> <from=<strong>alexandrearw7@gmail.com</strong>> <to=michael@liquidbytes.net>, rate: -8.5<br /> May 20 21:43:17 mail postfix/policyd-weight[2754]: decided action=PREPEND X-policyd-weight: NOT_IN_SBL_XBL_SPAMHAUS=-1.5 NOT_IN_SPAMCOP=-1.5 NOT_IN_BL_NJABL=-1.5 CL_IP_EQ_HELO_IP=-2 (check from: .gmail. - helo: <strong>.qb-out-0506.google. - helo-domain: .google.</strong>) FROM/MX_MATCHES_HELO(DOMAIN)=-2 <client=72.14.204.235> <helo=<strong>qb-out-0506.google.com</strong>> <from=<strong>alexandrearw7@gmail.com</strong>> <to=michael@liquidbytes.net>, rate: -8.5; delay: 0s<br /> May 20 21:43:18 mail postfix/smtpd[30948]: 09CFB196802E: client=<strong>qb-out-0506.google.com</strong>[72.14.204.235]<br /> May 20 21:43:49 mail postfix/smtpd[30948]: disconnect from <strong>qb-out-0506.google.com</strong>[72.14.204.235]</tt>

Yes, these servers belong to&#8230;

<pre>OrgName:    Google Inc.
OrgID:      GOGL
Address:    1600 Amphitheatre Parkway
City:       Mountain View
StateProv:  CA
PostalCode: 94043
Country:    US
NetRange:   72.14.192.0 - 72.14.255.255
CIDR:       72.14.192.0/18
NetName:    GOOGLE</pre>

Other people are getting tons of spam from Google as well as it seems.

See also: [**Exploiting Google MX servers as Open SMTP Relays**][2]

So why is that? Mmmh&#8230; because the cool and smart engineers at Google can&#8217;t handle their job:

> We would like to clarify to the security community that we have contacted Google about the issue more than a week ago and **no response was provided despite our clear intent of cooperation** regarding this matter.
  
> We have plans to submit a paper about our work on the trust hierarchy of email providers to the [SBSEG&#8217;2008][3] over this weekend. Since the paper will necessarily include full details about the flaw, we see no point on withholding the full disclosure of our self-censored report.
  
>  **We are still waiting to hear from Google** and we sincerely hope that this flaw can be fixed before the full details about the problem are released. ([Source][4])

This was **8 days ago**. Hello? Somebody there!? I&#8217;m 99.99% sure that Google won&#8217;t answer to my spam report. They can&#8217;t even write a small mail to the team that found out how to use Google as open mail relay. Other large providers like T-Online are far more cooperative and they actually answer to your requests.

_&#8220;We are Google. Resistance is a good idea, because: You will be spammed. We will add our spam mail to your mailbox. Your culture will have to learn how to adapt its spam filters.&#8221;_

 [1]: http://www.nulldevice.de/wp-content/uploads/2008/05/blinking_google_toy_small.jpg
 [2]: http://www.securityfocus.com/archive/1/491779
 [3]: http://sbseg2008.inf.ufrgs.br/
 [4]: http://ece.uprm.edu/~andre/insert/index.html