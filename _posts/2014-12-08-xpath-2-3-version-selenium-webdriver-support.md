---
layout: post
title: 'What XPath version does a given WebDriver support?'
maintag: 'selenium'
tags: [selenium, xpath, java, webdriver]
lang: 'en_US'
---
Ever wondered what version of XPath does a given `WebDriver` support?
We certainly wished it would be 2.0 or 3.0, but **most likely the version is 1.0**. Don't take my word for it, though, let's see some data.
<!--more-->

As [Selenium wiki](https://code.google.com/p/selenium/wiki/XpathInWebDriver) states, `WebDriver` uses the browser's native XPath capabilities wherever possible. When the browser does not support XPath (IE 6/7/8, I'm looking at you), Selenium provides its own implementation, supporting XPath 1.0 (with some caveats, see wiki).

If you needed a "generic" method that'd decide if the `WebDriver` you're using supports XPath 1.0 or 2.0, here's something that may work for you:

{% gist e0ea8e8446e299dc4d46 SeleniumXPathVersion2.java %}

The principle is simple: try a function specific to the XPath version you want to know if the browser supports. It could even test for XPath 3.0 support:

{% gist e0ea8e8446e299dc4d46 SeleniumXPathVersion3.java %}

The bad news are even XPath 2.0 support is very poor among browsers. I couldn't find any supporting it. Can you?

<br>

<sub>PS.: I do know those snippets are [coding by exception](http://en.wikipedia.org/wiki/Coding_by_exception). Trust me, though, other than making a table enumerating all `WebDriver`s XPath versions, to this date, there is no other way of knowing it.</sub>
