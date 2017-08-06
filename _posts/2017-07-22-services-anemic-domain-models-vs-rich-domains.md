---
layout: single
title: 'When to use Anemic Domain Models or Rich Domains Models? DDD?'
category: ddd
tags: [ddd, design, anemic domain models]
lang: en-US
comments: true
share: true
mathjax: false
published: true
---

Anemic Domain Models (ADM) can be used when the application is too simple. But they don't scale.

*Rich* Domain Models (RDM) are powerful, but also undeniably of higher cost in comparison to ADMs.

Domain-Driven Design (DDD) tells you to use Rich Domain Models, right?

Not quite.

> If anything, DDD asks you to identify the more critial subdomains of your domain (the _core_ domains) and spend time (aka use RDM) on those.

On the less important subdomains, going the extra mile to apply RDMs frequently doesn't pay off.

### Anemic Domain Models
- Frequently implemented as data-only entities (devoid of logic) + service classes which contain the business rules.
- Allows you to easily put the entities in an inconsistent state
- Requires you to remember every detail of every operation -- and tests don't help here: if you don't know you have to do it, you don't write tests for it.
- Higher cognitive load (you have, at any given time, to worry about more in order to make less mistakes)

### Rich Domain Models
- Require more communication over the abstractions and responsibilities of the entities involved.

> [to be expanded.]
