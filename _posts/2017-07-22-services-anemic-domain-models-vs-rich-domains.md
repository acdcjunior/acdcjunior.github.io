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

Anemic Domain Models (ADM) can be used when the application is too simple. Their drawback is: they don't scale.

*Rich* Domain Models (RDM) are powerful, but also undeniably of higher cost in comparison to ADMs.

Domain-Driven Design (DDD) tells you to use Rich Domain Models, right?

Not quite.

> If anything, DDD asks you to identify the more critial subdomains of your domain (the _core_ domains) and spend time (aka use RDM) on those.

On the less important subdomains, going the extra mile to apply RDMs frequently just doesn't pay off.

Here are some characteristics of these approaches:

### Anemic Domain Models

- Usually implemented as data-only entities (devoid of logic) + service classes which contain the business rules (also known as the the [Transaction Script](https://martinfowler.com/eaaCatalog/transactionScript.html) pattern).
- Allows you to (too) easily put the entities in an inconsistent state
- Higher cognitive load (you have, at any given time, to worry about more in order to make less mistakes), because the code allows you (and anyone else, including programmers less familiar with the code base) to do too much
  - Example: setters for everything. E.g. you could set the birth date, but forget to also set the age field.
- Requires you to remember every detail of every operation, exactly because the code will let you do anything you want without hinting
  - And tests don't help here: if you *don't know* you have to do it (to implement a given detail), you don't write tests for it (since you didn't know you had to handle it in the first place).


### Rich Domain Models

- Require more communication (people/documentation kind of communication) over the abstractions and responsibilities of the entities involved.
  - What good are standards if no one follows them?
- Demand a somewhat higher level of technical expertise/experience from the programmers involved (you can't just follow the simplest path, abstractions must make sense; modularity and boundaries must be well thought out).
- Scales much better than the ADM
  - Because objects tend to be self-validating, methods that would put them in inconsistent states won't even exist.
- Naming (classes, methods, properties) tend to make much more sense from the business point of view.
  - It will be `person.walk()`, not `person.setStep(person.getStep()+1)`.
  - Naming also is not free, you have to put effort into it.

Still, even a RDM can help you so much. The most important lesson is to keep your models boundaries at check. With good boundaries, you can focus on a (hopefully smaller) ***core*** part of your domain. With it running smooth, you can use ADM, CRUD (or whatever suits the situation) in the supporting parts/modules.
