---
title: Form Validation vs Model Validation
author: Michael Mayer
type: post
date: 2015-11-15T06:28:07+00:00
url: /2015/11/form-validation-vs-model-validation/
cover_image: /wp-content/uploads/2015/11/4272386826_b35f366c3e_b.jpg
categories:
  - 'Best Practices &amp; Quality'
  - PHP
  - Software Engineering

---
This is a follow-up on [Why I’m using a separate layer for input data validation][1] that explains the key differences between client-side, input value (form) and model validation.

In general, **model validation** operates on **trusted** data (internal system state) and should ideally be **repeatable** at any point in time while **input validation** explicitly operates **once** on data that comes from **untrusted** sources (depending on the use case and user privileges).

This separation makes it possible to build **reusable models**, **controllers** and **forms** that can be **loosely coupled** through dependency injection:

    class UserController
    {
        protected $user;
        protected $form;
    
        public function __construct(User $user, UserForm $form)
        {
            $this->user = $user;
            $this->form = $form;
        }
    
        public function putAction($id, Request $request) // Update
        {
            $this->user->find($id); // Find entity (throws exception, if not found)
            
            $this->form->setDefinedValues($this->user->getValues()); // Initialization
            $this->form->setDefinedWritableValues($request->request->all()); // Input values
            $this->form->validate(); // Validation
    
            if($this->form->hasErrors()) {
                throw new FormInvalidException($this->form->getFirstError());
            }
            
            $this->user->update($this->form->getValues()); // Update values
    
            return $this->user->getValues(); // Return updated entity values
        }
    }

Think of input validation as **whitelist **validation (&#8220;accept known good&#8221;) and model validation as **blacklist** validation (&#8220;reject known bad&#8221;). Whitelist validation is **more secure** while blacklist validation prevents your model layer from being **overly ****constrained** to very specific use cases.

Invalid model data should always cause an **exception** to be thrown (otherwise the application can continue running without noticing the mistake) while invalid input values coming from external sources are **not unexpected**, but rather common (unless you got users that never make mistakes). Validation within a specific model may not be possible, if a set of input values must be validated together (because they depend on each other) but the individual values belong to different models &#8211; at least this can create **additional dependencies** between models that would not be there otherwise up to the point that all models depend on each other. In short: The application may still work as expected, but the code is a mess.

From a theoretical standpoint, any complex system has more **internal state** than it exposes to the outside, thus it is never sufficient to use model validation only &#8211; except the model provides two sets of methods: some that are used internally and some that can be exposed to arbitrary input data from any source. Aside from side-effects such as limited user feedback (exception messages) and bloated model code, this approach may easily lead to serious **security flaws**. Malicious input data is a much higher threat to **multi-user** Web applications than to classical **single-user** desktop applications. Simple blacklist model validation may be fully sufficient for desktop applications, which are in full control of the user interface (view layer).

Client-side (JavaScript or HTML) form validation is always just a convenience feature and **not reliable**. However, you can (at least partly) **reuse existing server-side form validation** rules to perform client-side validation, if they can be easily converted to JSON (for JavaScript) or be passed to template rendering engines such as Twig or Smarty (for HTML). Reusing model layer validation rules in a similar fashion is at least difficult, if not impossible.

See also:

  * <a href="https://www.owasp.org/index.php/Data_Validation#Where_to_include_business_rule_validation" target="_blank">OWASP &#8211; Where to include business rule validation</a>
  * <a href="http://lastzero.github.io/php-input-validation/" target="_blank">InputValidation for PHP &#8211; Easy & secure whitelist validation for input data of any origin</a>

 [1]: https://lastzero.net/2015/11/why-im-using-a-separate-layer-for-input-data-validation/