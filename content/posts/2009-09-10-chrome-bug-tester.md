---
title: Chrome Bug Tester
author: Michael Mayer
type: post
date: 2009-09-10T16:06:50+00:00
draft: true
private: true
url: /2009/09/chrome-bug-tester/
categories:
  - Google
  - 'JavaScript, HTML &amp; CSS'
tags:
  - Chrome
  - 'JavaScript &amp; Rich Client'

---
What these tests do, is basically constructing Arrays and one Object (in the last test), and then output the data using a &#8220;for(var i in array)&#8221; loop. All browsers do handle objects and arrays as expected and return the data in the original order, just Google Chrome fails. That means there is no way to store data in a certain order in Chrome, if you don&#8217;t want to loop over it with &#8220;for(var i = 0; i < array.length; i++)&#8221;, which can result in significant code and/or processing overhead for a number of reasons.

If all tests are green, they passed. Red results indicate failures:

{{ /js/chrome.html }}

Especially this comment in JavaScriptCore (Apple Safari), indicates that all browsers should preserve the order of data, as this is a de-facto standard:

// lastIndexUsed is an ever-increasing index used to identify the order items
  
// were inserted into the property map. It&#8217;s required that getEnumerablePropertyNames
  
// return the properties in the order they were added for compatibility with other
  
// browsers&#8217; JavaScript implementations.

The ultimate reason behind the behavior of Chrome seems to be that a NumberDictionary is used for certain array/object keys and a StringDictionary for others (handles.cc line 554):
  
// Compute the element keys.
  
element_keys = Factory::NewFixedArray(current->NumberOfEnumElements());
  
current->GetEnumElementKeys(*element_keys);
  
content = UnionOfKeys(content, element_keys);
  
content = UnionOfKeys(content, GetEnumPropertyKeys(current));

Also the many type casts do look scary to me =)

Sure you could use non-numeric attributes only, but those are normally part of the inline cache. To cache offsets of arbitrary arrays does not make a lot of sense. The JavaScriptCode devs recognized just that and made it right.