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

Optimization usually comes at the cost of understandability, so keep it to moments when benefits are real. For that to happen, for you to know benefits are real, you have to **measure**. If you are optimizing without measuring, you are not optimizing -- it is only wishful thinking.

Why so? Because optimized code is harder to write, takes a toll on readability, and may even go against important design guidelines (e.g. let go of the DRY principle in a specific point of the code -- assuming, of course, the VM doesn't do any sort of inlining already, which is why you should measure before anything). Due to that, optimized code is more error-prone and, since optimizations are usually context-dependent (and context may change over time), has a shorter lifespan.

In the end of the day, most code we write is not performance-sensitive, and those extra cycles at the cost of keeping the code clean almost never are worth it.

So don't waste yours (writing) or anyone else's (reading) time doing that.
