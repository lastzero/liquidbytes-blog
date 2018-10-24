---
title: 'Why good code sometimes needs redundancy: The dynamic aspects'
author: Michael Mayer
type: post
date: 2010-12-11T15:15:09+00:00
url: /2010/12/good-code-sometimes-needs-redundancy-the-dynamic-aspects/
categories:
  - 'Best Practices &amp; Quality'
tags:
  - Clean Code
  - Software Design
  - Theory

---
## **Introduction**

There is a general rule in software development, which says you should avoid duplicated code and data. This is extremely simple to remember and many developers love to quote it. Popular code quality assessment tools use it as a metric. Because this rule sounds so inerrable, it is applied even in cases, where it is not appropriate for one or more reasons.

Another well-known fact is that inexperienced developers like to duplicate everything using copy & paste, which causes a lot of maintenance overhead afterwards. The reasoning for both diametrical-opposed attitudes originates from a somewhat static view on code.

In general, if two functions do the same, they should be merged. If a function is too big and therefore very likely does more than one thing, it should be broke down into smaller functions. If a value is stored in one table of a relational database, it should not also be in a second one. If you can normalize your data, you should do so. While this advice is very good in many cases, the reality is more complex.

The reason is this: Requirements and therefore your application normally changes over time. To optimize code and data structures can cause considerable efforts that have no return of investment, if you have to undo your optimizations frequently. Also, software must fulfill additional requirements concerning aspects like performance and long-term maintainability, besides just being &#8220;correct&#8221; at a given time.

The term maintainability shall also contain the possibility to be able to update parts of the application without requiring a major refactoring in other parts that should not be affected. If this happens, it does not only consume more time to apply changes, but also every developer must be an expert for the whole system. Most developers only know about a fraction of the code and that is how critical bugs are introduced very often. You can fight this with tests, but you can also try to prevent it from happening.

## A non-technical example

Imagine a house and let’s say five cars standing in front of it. The first thought you will probably have is: Why does this guy in there need that much cars?

The obvious optimization is to get rid of 4 cars, because they only produce costs and he can only use one car at a time. But wait: There is a family living in that house. You can still make an optimization, by observing where they are driving and what the maximum amount of cars they use in parallel is. Also people can share a car if they drive to the same destination anyways.

Let’s say after one week, you find out that you can get rid of two cars that are superfluous. But wait: One family member gets a new job at a different location next month and cannot share a car anymore and another one was on holidays during your observation.

Still you could sell one or two cars for the time period they are not used, but this creates transaction costs that far exceed what you save in maintenance. The lesson learned is, that even if it looks like you can get rid of some cars at first, it doesn’t make sense, if you look at it in detail.

## The limits of code optimization

Speaking in code, you can imagine two functions that are used for two separate parts of an application that is still under development. Maybe one of these functions is not even in use yet, because the code that will use it is not developed yet. These both functions might contain the same six lines of code. This is the static picture we see.

Before you start optimizing that by thinking about the right solution (a third function that contains these six lines and that is used by both functions? Or maybe just merge the functions into one and use that everywhere?), you should consider this: That code is just an approximation for the start.

For example, they both store data in a file, while you can expect that there will be more and different storage methods later on. Or they both contain a standard algorithm that is likely to be optimized for the specific use case later. If you merge them and they belong to distant parts of the application, then you need to consider that from now on: You need to keep those parts aligned because they depend on a single function. If you change the behavior of your single function, you need to adapt all code that uses it. Sure, there are certainly tools and ways around those problems, but those also need to be investigated, installed, applied, watched, considered, or whatever.

Therefore we save the maintenance costs of two functions that do something similar at a given point in time, but add the transaction costs for first optimizing the code and then refactoring the whole thing again, once they shall be different from each other. By then it might be too late, because lots of workarounds are in place as nobody dared to touch this central function that everything depends on. You are doomed.

## Function inlining

A special case exists in JavaScript, where you need to put a lot of work in performance optimization, so that the application even runs on the oldest browsers. In fact, a popular technique is to copy & paste code from different functions into one function (especially when the code is executed in a loop), so that the interpreter saves the time to look them up. For somebody new to JavaScript this might seem strange and you are immediately tempted to clean-up the code with the very best intentions – thus maybe making the application unusable for certain users.

## Moving redundancy from the library to the config

Another example everybody is familiar with are configuration files. Especially if the application was written by the same team or company, they are more or less the same for every project. Still they are full featured duplicates, just in case you want to apply changes. You cannot take for granted, that everybody is happy with the default configuration and it is way easier to change an existing setting in a file than to browse through a manual to find out which code is needed to modify the default setting. If a piece of code in the library requires a new option, you can see the developers adding the setting to all the projects on all the installations without complaining a lot. It turns bad, when the code in the library becomes so general and non-redundant that you start needing lots of options and basically start programming in your configuration file. This just moves redundancy from the library (where it could help to actually understand what some code is doing) into the configuration of each and every project.

## Redundancy in frameworks and libraries

If you plan to give away code that can be used separate from your existing library or framework, you are frequently forced to cut the ties for the cost of duplicating code – or you explain the dependencies to your users and accept that some of them might reject using your code.

## Legal aspects

Many Open Source projects provide a good example for how important redundancy is because of legal reasons. Just look at how much code that essentially does something that was already there got (re-)published under a different license, so that it’s safe to use it. Legal requirements by the way are also a driving force behind redundancy in the real life: Office and home, business and private mobile phone contract, multiple black-boxes in an aircraft and so on.

## Redundant data

When it comes to data, the justification of redundancy is mainly performance, availability or because it simply does not matter. There certainly are a few cases where you never have to change data (maybe you are not even allowed to), so why putting effort in making it easily updateable? Imagine a use case where you have to throw away your data every week. A powerful data structure that is flexible and can be used for the next 100 years is of no help in that case.

Another reason for storing the same information two times is that you want to store it once normalized and once in a processed form (maybe joined together with other data), because you have a lot of read-only requests. That can save the time needed to process the normalized data and therefore results in less server hardware to satisfy the same amount of users. Another example is to store the data using different technologies, maybe once on the hard disk (for long-term availability) and once in memory (for short-term availability). Or you have a copy that can be modified and another copy that is read-only etc. It depends on the properties of real-world hardware and most importantly on how the data is expected to be used over time.

## Conclusion

If you only look at things at a given time, you can hardly understand why the application was developed the way it is or make any suggestion for how it should be. Good software design must consider the business use case, carefully evaluate what parts should be independent from each other (therefore need some kind of redundancy) and cannot rely on general rules. This is a constant process and requires an experienced engineer.