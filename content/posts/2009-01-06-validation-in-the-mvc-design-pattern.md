---
title: Validation in the MVC design pattern
author: Michael Mayer
type: post
date: 2009-01-05T22:38:06+00:00
url: /2009/01/validation-in-the-mvc-design-pattern/
categories:
  - 'Best Practices &amp; Quality'
  - 'JavaScript, HTML &amp; CSS'
  - PHP
tags:
  - MVC
  - Validation

---
Hello Martin,

your article on Notification implies that validation should be done in
  
the Model layer. There are numerous voices that see the need for
  
validation in the Controller, as it receives user input in the first
  
place. I argue that actually both should be done in Web applications:

&#8211; First you want to make sure that data integrity is given. You should
  
not outsource this essential task to the Controller or the View. If
  
integrity is not maintained by the database anyway, it MUST be done in
  
the model. An exception is an acceptable way to respond to invalid
  
data that is passed to the model.

&#8211; For usability reasons, you also want to have validation on the
  
controller level. This however should be mainly for usability reasons,
  
especially as the naming and number of model properties must not match
  
form fields in every case. In a form, an email address might be split
  
up in two input fields, whereas the model just uses one data field to
  
store the email address. The user expects feedback on whether the
  
username or domain part of the address are not valid. Also a modern
  
web form should be able to list multiple validation error at one
  
(which does not work that well when working with simple exceptions
  
that are thrown by models).

In (fat client) Rich Internet Applications, you might not just access
  
models in server-side controllers but you want to expose the model API
  
to your client side JavaScript models (which is then a web service).
  
If validation would be done in server-side controllers only, this
  
would lead to a security risk or you would need to create a controller
  
action per API function, which is basically repeated code.

Do you agree?

Merry Christmas and a happy new year,
  
Michael Mayer

> Broadly yes. The domain model should be fundamentally responsible for validation, but presentations often need validation too. We need to support usability without introducing duplication.
> 
> For years now, I&#8217;ve been intending to capture and write about validation patterns. They are still on the horizon, although sadly distant.
  
> <span style="color: #888888;"><br /> Martin Fowler<br /> <a href="http://martinfowler.com/" target="_blank">http://martinfowler.com</a></span>