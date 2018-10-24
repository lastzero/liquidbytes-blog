---
title: 'Howto: Modify block format options dropdown in WordPress (TinyMCE)'
author: Michael Mayer
type: post
date: 2012-10-29T18:02:49+00:00
url: /2012/10/modify-block-format-options-dropdown-in-wordpress-tinymce/
categories:
  - WordPress
tags:
  - TinyMCE

---
There is an easy way to modify the **block format** options dropdown in the **WordPress editor**. Simply add those lines to your theme&#8217;s **functions.php** (wp-content/themes/{name}/functions.php) and **modify the list** according to your needs:

<pre>function extend_tiny_mce_defaults ($config) {
  // comma separated list of any block-level HTML tag 
  $config['theme_advanced_blockformats'] = 'p,h3,h4,pre,address'; 
  return $config;
}

add_filter('tiny_mce_before_init', 'extend_tiny_mce_defaults', 100);</pre>

<img class="alignnone size-full wp-image-2052" style="border: 1px solid #aaaaaa;" title="WordPress block format dropdown" src="http://lastzero.net/wp-content/uploads/2012/10/tinymce1.png" alt="" width="493" height="289" />