---
layout: single
title: Automated Testing Design and Code Design
category: tests
tags: [tests, testing, design]
lang: en-US
comments: true
share: true
mathjax: false
published: true
modified: 2019-09-25
---

It is really hard do dissociate the design of automated test code and the design of the software itself.

In other words, you can't really talk about good practices of test writing without considering how the sofware to be tested has been written.

For starters, some people prefer to write long e2e/integration tests instead of unit tests under the argument that the former are easier and more reliable to write because they don't use mocks.

I agree that mocks hinder the reliability of your tests. But testing each (important) corner of each (important) complex business rules of your software is a very hard feat to pull from 200m apart. The closer to the "source", which unit tests are, the better. The point is your software may be designed in a way it doesn't need mocks to test those important parts (long story short, you can "push" the code that needs mocking - aka has side effects - to the boundaries and keep the important business rules "pure").
