---
layout: single
title: 'Anemic Domain Models ("Services") vs. Rich Domains Models ("DDD")'
category: ddd
tags: [ddd, design, anemic domain models]
lang: en-US
comments: true
share: true
mathjax: false
published: true
---

Anemic Domain Models can be used when the application is too simple. But it doesn't scale.

If you app is going to grow (do you really know it?), it pays to use a Rich Domain Model.

Anemic Domain Models
- Allows you to too easily put the entities in an inconsistent state
- Forces you to remember every detail of every operation -- and tests don't help here: if you don't know you have to do it, you don't write tests for it.

> [to be expanded.]
