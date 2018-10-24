---
title: Object property ordering in Google Chrome
author: Michael Mayer
type: post
date: 2009-09-06T22:26:37+00:00
url: /2009/09/object-property-ordering-in-google-chrome/
categories:
  - Google
  - 'JavaScript, HTML &amp; CSS'
tags:
  - Chrome
  - Firefox
  - Google
  - 'JavaScript &amp; Rich Client'
  - Safari

---
Today, I prepared for the upcoming PHP/JS conferences and had a look at the mysterious bug #883 of Google Chrome and those related to it. Also I read though SquirrelFish source, which is used by Safari 4.

The reason for the odd behavior of Chrome seems to be a if/else construct that is repeated throughout the source of runtime.cc:

<pre>// Check if the name is trivially convertible to an index and get
// the element if so.
if (name-&gt;AsArrayIndex(&index)) {
  return GetElementOrCharAt(object, index);
} else {
  PropertyAttributes attr;
  return object-&gt;GetProperty(*name, &attr);
}
</pre>

Chrome makes a difference between properties and elements. And they do weird type casts. If you check JavaScriptCore, you see there is a better way:

<pre>inline JSValue JSObject::get(ExecState* exec, const Identifier& propertyName) const
{
  PropertySlot slot(this);
  if (const_cast(this)-&gt;getPropertySlot(exec, propertyName, slot))
    return slot.getValue(exec, propertyName);
  return jsUndefined();
}
</pre>