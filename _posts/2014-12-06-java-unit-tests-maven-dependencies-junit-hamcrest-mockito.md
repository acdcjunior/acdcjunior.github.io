---
layout: post
title: 'Java Unit Tests Maven dependencies snippet'
maintag: 'test'
tags: [test, junit, hamcrest, mockito, maven, java]
lang: 'en_US'
---
### Last updated: 2015-10-29

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
    - Hamcrest guys have recently changed the way they deal with their packages. Their goal was to decouple hamcrest from JUnit. The impact in our life is that we now use `hamcrest-junit` instead of `hamcrest-all`. See [Hamcrest-JUnit's repo](https://github.com/hamcrest/hamcrest-junit) for more details.

- [*"Why `mockito-core` and not `mockito-all`?"*](https://code.google.com/p/mockito/wiki/DeclaringMockitoDependency)
    - Basically `mockito-all` is sort of a [*fat jar*](https://www.google.com.br/search?q=fat%20jar), containing all its dependencies (such as Hamcrest), embedded. As we want to fine tune its dependencies (that's what the `<exclude>` tag is!), then `-core` is the way to go.

<br>

Should any other questions arise, I'll address them here. I'll also try to keep the snippet's versions up to date.

See ya!
