---
layout: single
title: "Application Services: DOs and DON'Ts"
category: architecture
tags: ['architecture', 'ddd', 'domain driven design', 'design']
lang: en-US
comments: true
share: true
mathjax: false
published: true
modified: 2021-08-18
---

A list of quick design guidelines for application services.

<!--more-->

<br>

- Make then thin, they should not have heavy logic
  - Naturally, should not contain domain logic, but application logic
- The application services are the part of your app that should contain most heavyweight integration logic (such as calling repositories or external services). This
means their tests are going to be more complicated, likely integration tests. Therefore:
  - Keep the application methods straightforward; don't allow branching (`if`s) on them, so that a single (integration) test will suffice
  - If you have logic that implies branching, move them to external (standalone) functions, and test them in isolation. This allows you to test these with unit tests, which
  will make it easy to test all logic branches.
  
More to come soon...
