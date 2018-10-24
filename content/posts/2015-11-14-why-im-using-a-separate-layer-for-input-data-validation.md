---
title: Why I’m using a separate layer for input data validation
author: Michael Mayer
type: post
date: 2015-11-14T13:23:03+00:00
url: /2015/11/why-im-using-a-separate-layer-for-input-data-validation/
cover_image: /wp-content/uploads/2015/11/2536001835_ecfe327498_b.jpg
categories:
  - 'Best Practices &amp; Quality'
  - Software Engineering

---

While some developers seem to prefer to implement their user data validation rules directly in the model layer (or even worse, the ORM entity layer), this very often leads to problems as described by **Stefan Priebsch** in his blog post on [How to Validate Data][2].

[<img class="alignright size-medium wp-image-2968" src="https://lastzero.net/wp-content/uploads/2015/11/68747470733a2f2f7777772e6c7563696463686172742e636f6d2f7075626c69635365676d656e74732f766965772f35343631663836372d616531632d343461342d623536352d3666373830613030636632372f696d6167652e706e67-400x500.png" alt="Validation in the MVC pattern" width="400" height="500" srcset="https://blog.liquidbytes.net/wp-content/uploads/2015/11/68747470733a2f2f7777772e6c7563696463686172742e636f6d2f7075626c69635365676d656e74732f766965772f35343631663836372d616531632d343461342d623536352d3666373830613030636632372f696d6167652e706e67-400x500.png 400w, https://blog.liquidbytes.net/wp-content/uploads/2015/11/68747470733a2f2f7777772e6c7563696463686172742e636f6d2f7075626c69635365676d656e74732f766965772f35343631663836372d616531632d343461342d623536352d3666373830613030636632372f696d6167652e706e67-818x1024.png 818w, https://blog.liquidbytes.net/wp-content/uploads/2015/11/68747470733a2f2f7777772e6c7563696463686172742e636f6d2f7075626c69635365676d656e74732f766965772f35343631663836372d616531632d343461342d623536352d3666373830613030636632372f696d6167652e706e67.png 1003w" sizes="(max-width: 400px) 100vw, 400px" />][1]

In addition to the many issues he mentioned, you should consider the following **advantages of using a separate layer** to validate user input data:

  * While a certain **minimum level** of validation must be performed in the model and persistence layer for **security reasons**, many validation rules are high level and depend on the use case. For example, an admin user might have less strict validation rules than a regular user. In this case, the model would require the currently active user as a **dependency** to perform the validation, which adds unnecessary complexity. Even worse, the very same data might be valid or invalid, depending on whether it was loaded from the database (and stored there by the admin user) or if it is coming from the frontend and should be stored in the database by a regular user. I&#8217;ve seen code like this and it&#8217;s not fun to work with.
  * There are cases in which data validation rules for individual fields **depend on each other**, for example: If the email address is empty, you need to provide a phone number. If you&#8217;re working with exceptions and do the validation in individual setters, this doesn&#8217;t work well or at all.
  * Sometimes, you want to store invalid data with a **dirty flag** and fix the validation issues later. This might be the case, if you have to transfer values from a paper form and then call the customer later to complete missing fields.
  * More complex applications implement use-cases which store data in a number of **different models** at the same time. If validation is supposed to happen in the model layer, how do you decide which model is responsible?
  * Sharing validation rules between backend and frontend is much easier, if they can be **serialized**. This is not the case for explicit code in the model layer. Using plain arrays to describe validation rules and a separate form class that interprets them (at least partly), enables reuse in backend and frontend. True, that form class must be available in all applicable programming languages, but this can be solved and usually is much less work, than code duplication as the alternative solution.
  * There always comes the day, when you need to **refactor or replace your model layer**, for example when switching from database storage to a REST service. If your use-case related validation rules are not mixed with your model layer code, this will be much easier.

For semantic reasons, I call this additional validation layer the **forms layer** (see flow chart) in my own projects, but it really doesn&#8217;t matter. Just call it as you like, as long as you are able to leverage the advantage of using a separate validation layer. It helps a lot.

You&#8217;re welcome to check out my code on GitHub to see some practical examples:

  * [Interactive example forms][3] to play with (JavaScript)
  * <a href="http://lastzero.github.io/php-input-validation/" target="_blank">InputValidation for PHP – Easy & secure whitelist validation for input data of any origin</a>

 [1]: https://lastzero.net/wp-content/uploads/2015/11/68747470733a2f2f7777772e6c7563696463686172742e636f6d2f7075626c69635365676d656e74732f766965772f35343631663836372d616531632d343461342d623536352d3666373830613030636632372f696d6167652e706e67.png
 [2]: https://thephp.cc/neuigkeiten/2015/11/how-to-validate-data
 [3]: http://www.chaoticpattern.net/#forms/index