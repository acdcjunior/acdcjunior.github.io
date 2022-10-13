---
layout: single
title: "Application Services Best Practices"
category: architecture
tags: ['architecture', 'ddd', 'domain driven design', 'design']
lang: en-US
comments: true
share: true
mathjax: false
published: true
modified: 2022-02-26
---

Application services are an integral part of popular layered architectural styles, such as
_ports & adapters (hexagonal)_, _onion architecture_ or _clean architecture_.

In this post I suggest some quick design guidelines to improve the design of your application services.

<!--more-->

⦁⦁⦁

Separating the code in your project by concerns simplifies maintenance (e.g. understanding/reviewing,
fixing bugs, upgrading dependencies) and evolution (e.g. adding features) in the future.

At least three kinds of concerns (or layers) are generally accepted:

- presentation (user interface)
- application (sometimes divided into application _and_ domain)
- infrastructure

<table border="0"><tr><td>

<img src="/images/posts/ddd-layered-architecture.jpg">

</td></tr><tr><td>
<sup><em>Layers as presented in the Domain-Driven Design book</em></sup>
</td></tr></table>

They manifest themselves as **layers** in your architecture (or, actually, in a [_module view_](https://www.youtube.com/watch?v=xDi_6vwfhIY) of your architecture). In the end, these layers become
packages or folders in your app (depending on your language, naturally).

**Application** is where your code is. It's where your "business rules", however you decide to implement
them, are. In more complex systems, it is usually worthwhile to break this layer further into two: *application*
and *domain*. More on that later.

**Presentation** is where you put all code that converts requests from the "outside world" into the
internal representation you application requires. For instance, a REST presentation layer
is composed of endpoint controllers that would receive HTTP requests and parse them into objects. Next, this
layer would call the appropriate application layer method and (maybe) await for a response. If there's
a response from the application, the presentation will convert it to whatever content format the HTTP request
needs and send it back to the client.

**Infrastructure** is where you put everything else. Utility classes/functions, plumbing/platform code
and whatnot.

## Application vs Application + Domain

As stated, we can further separate application code into two distinct modules _application_ and _domain_.
When doing this separation, the actual _business rules_ go into the _domain_ layer and the _application_
layer becomes responsible for the _coordination_ code (aka _application_ or _use cases_ code). In other words, the latter
contains what your app can do and the former organizes _how_ your app does things.

In this article I'm going to lay down a quick list of good practices for application services, which are the
kind of objects that generally live in the application layer.

### Separate their steps

Application services methods generally contain a very specific sequence of steps in the format "hydrate" -> "execute" -> "dehydrate".
More specifically, they do the following tasks:

- 1) Hydrate aggregates
- 2) Invoke methods on aggregates
- 3) Dehydrate aggregates 

### Make them thin, they should not contain heavy logic

Naturally, should not contain domain logic, but application logic

### Avoid branching logic (no `if`s)

The application services are the part of your app that should contain most heavyweight integration logic (such as calling repositories or external services). This
means their tests are going to be more complicated, likely integration tests. Therefore:
- The application methods should be straightforward, keeping branching to a minimum
  - For instance, without any branches (no `if`s), a single (integration) test will suffice
- If you have logic that implies branching, move them to external (standalone) functions, and test them in isolation. This allows you to test these with unit tests, which
will make it easy to test all logic branches.
  
To be continued...
