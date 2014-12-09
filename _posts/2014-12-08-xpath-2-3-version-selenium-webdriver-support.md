---
layout: post
title: 'What XPath version does a given WebDriver supports?'
maintag: 'selenium'
tags: [selenium, xpath, java, webdriver]
lang: 'en_US'
---
Ever wondered what version of XPath does a given `WebDriver` support?
We certainly wished it would be 2.0 or 3.0, but **most likely the version is 1.0**, but don't take my word for it, let's see some data.
<!--more-->

As [Selenium wiki](https://code.google.com/p/selenium/wiki/XpathInWebDriver) states, `WebDriver` uses a browser's native XPath capabilities wherever possible. When the browser does not support XPath though (IE 6/7/8, I'm looking at you), Selenium provides its own implementation, supporting XPath 1.0 (with some caveats, see wiki).

If you needed a "generic" method that'd decide if your WebDriver supports XPath 1.0 or 2.0, here's something that may work for you:

{% gist 300f2094176b5d8023d5 SeleniumXPathVersion2.java %}

The principle is simple: try a function specific to the XPath version you want to know if the browser supports. It could even test for XPath 3.0 support:

{% gist 300f2094176b5d8023d5 SeleniumXPathVersion3.java %}

The bad news are even XPath 2.0 support is very poor among browsers. I couldn't find any supporting it. Can you?
