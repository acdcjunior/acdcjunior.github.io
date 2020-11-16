---
layout: single
title: "Simple is better: Don't optimize, unless measured"
category: design
tags: [design, performance]
lang: en-US
comments: true
share: true
mathjax: false
published: true
---

Hold your impulse to prematurely optimize your code.

Optimization usually comes at the cost of understandability, so keep it to moments when benefits are real. For that to happen, for you to know the benefits are real, you have to **measure** first.

If you are optimizing without measuring, you are not optimizing, you are only engaging in performance-oriented wishful thinking.

But why postpone, really? Because optimized code is harder to write, takes a toll on readability, and may even go against important design guidelines (e.g. let go of the DRY principle in a specific point of the code\*\*). Due to that, optimized code is more error-prone and, since optimizations are usually context-dependent (and context may change over time), has a shorter lifespan.

In the end of the day, most code we write is not performance-sensitive, and attempts to saving those extra CPU cycles at the cost of keeping the code from being clean are almost never worth it.

So don't waste yours (writing) or anyone else's (reading) time doing that.

> “If it doesn’t work, it doesn’t matter how fast it doesn’t work.” - Mich Ravera

:D

<sub>\*\* Often, the compiler/VM can optimize the code (e.g. some sort of inlining), so your supposed optimization makes the code ugly but is worth nothing -- which is why, again, you should always measure before anything.</sub>
