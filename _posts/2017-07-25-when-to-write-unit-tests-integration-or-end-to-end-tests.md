---
layout: single
title: 'When to write Unit Tests, Integration Tests or End-to-end Tests?'
category: tests
tags: [tests, unit tests, integration tests, e2e tests]
lang: en-US
comments: true
share: true
mathjax: false
published: true
modified: 2017-07-29
---

Who cares about tests?

If you run a rising startup with a now-or-never deadline coming up on the next few days, will you write tests?

No?

Why should you write tests at all, then?

I believe a team won't miss tests when they don't mind the occasional bug and are not used to doing refactoring.

What those points indicate?

For one, it tells us the team is not worried about being fast consistently. (It does want to go fast, but only when it matters, and at the cost of quality.)

# But before... what is your goal?

> Our goal is to deliver *quality* software **fast, consistently**.

Our goal as software devs is, ultimately, to deliver quality software faster... and faster! But also, an this is an important point, **consistently** faster.

Tests are useless when you are doing a quick one-off work.

But they are key when you want to be consistently fast.

# So, who needs tests?

> *"We have users, we don't need tests!"*

Indeed. Users are a very effective tool in finding bugs. But they are also the more stressful and costly one (maybe not the most costly to you, but certainly the most costly to the overall business).

Only those who:
- really don't like bugs
  - want to have more accurate estimates, because with bugs lying around, you never kwnow
- don't like rework
  - again, rework kills estimates (and is very boring... and unprofessional)
- refactor a lot
  - where do you draw the confidence from? How will you know that system-wide refactoring won't break some corner-but-important functinality?
- want to speed up delivery
  - Continuous Delivery is **unthinkable** without a reliable and complete suite of tests

In other words, you won't miss tests if you:
- are used to having bugs more often than not
- don't refactor a lot
- don't mind tons of manual testing (and back and forth develop-try cicles)

Of course, there are many kinds of testing. Manual testing is one of them -- that's actually why some say that you can't escape
from testing your apps, the difference is that too many will only resort to manual testing.

# Do you need unit tests? (aka "The Test Pyramid")

Who likes when tests break?

When an integration tests fail and you have no idea on how to fix it?

Repeat after me: not having tests will slow us down; x2.

> [this post is a work in progress!]
