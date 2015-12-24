---
layout: post
# type: <nothing> | quote | status | video | photo
title: 'Java Unit Tests Maven dependencies snippet'
maintag: 'test'
tags: [test, junit, hamcrest, mockito, maven, java]
lang: 'en_US'
description: Test dependencies are very common. Here they go.
category: Test
headline: Awesome snippet, let's begin testing ASAP!
comments: true
modified: 2015-12-13
share: true
mathjax: false
# tags:
#  - alternate
#  - way
# imagefeature: picture-38.jpg
image:
  feature: picture-38.jpg
  credit: example.com
  creditlink: "http://example.com/blog/stuff/"
# link: http://some-link-for-a-link-post
featured: true
published: true
---

Pretty much every Java project I have uses these dependencies: JUnit + Hamcrest + Mockito.

So, from time to time, this `pom.xml` snippet containing them proves needed.

<!--more-->

{% gist e333d02f5afb830aea88 %}

The dependencies above avoid having multiple hamcrest versions on the classpath (as JUnit or Mockito may require a different Hamcrest version at a given point in time).

Latest versions of each lib can be checked at the [The Maven Central Repository Search Engine](http://search.maven.org/):

- JUnit: [`junit`](http://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22junit%22%20AND%20a%3A%22junit%22);
- Hamcrest: [`hamcrest-junit`](http://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22org.hamcrest%22%20AND%20a%3A%22hamcrest-junit%22);
- Mockito: [`mockito-core`](http://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22org.mockito%22%20AND%20a%3A%22mockito-core%22).

Some possible questions:

- *"Why `hamcrest-junit` and not `hamcrest-all`?"*
    - Hamcrest folks have recently changed the way they handle releases. Their goal was to decouple Hamcrest from JUnit. The impact in our life is that we now use `hamcrest-junit` instead of `hamcrest-all`. See [Hamcrest-JUnit's repo](https://github.com/hamcrest/hamcrest-junit) for more details.

- [*"Why `mockito-core` and not `mockito-all`?"*](https://code.google.com/p/mockito/wiki/DeclaringMockitoDependency)
    - Basically `mockito-all` is sort of a [*fat jar*](https://www.google.com.br/search?q=fat%20jar), containing all its dependencies (such as Hamcrest), embedded. As we want to fine tune its dependencies (that's what the `<exclude>` tag is!), then `-core` is the way to go.

<br>

Should any other questions arise, I'll address them here. I'll also try to keep the snippet's versions up to date.

Cya!
