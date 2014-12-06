---
layout: post
title: 'Java Unit Tests Maven dependencies snippet'
maintag: 'test'
tags: [test, junit, hamcrest, mockito, maven, java]
lang: 'en_US'
---
Pretty much every Java project I have uses these dependencies: JUnit + Hamcrest + Mockito.

So from time to time this `pom.xml` excerpt snippet containing them proves needed.

<!-- more -->

{% gist e333d02f5afb830aea88 %}

The snippet avoids having multiple hamcrest versions on the classpath (as JUnit or Mockito may reference a different Hamcrest version at a given point in time).

Latest versions can be checked at the [The Maven Central Repository Search Engine](http://search.maven.org/):

- JUnit: [`junit`](http://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22junit%22%20AND%20a%3A%22junit%22);
- Hamcrest: [`hamcrest-all`](http://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22org.hamcrest%22%20AND%20a%3A%22hamcrest-all%22);
- Mockito: [`mockito-core`](http://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22org.mockito%22%20AND%20a%3A%22mockito-core%22).

Some possible questions:

- ["Why `mockito-core` and not `mockito-all`?"](https://code.google.com/p/mockito/wiki/DeclaringMockitoDependency)
 - Basically `mockito-all` is sort of an über-jar, containinig all its dependencies (such as Hamcrest), embedded. As we want to fine tune its dependencies (that's what the `<exclude>` tag is!), then `-core` is the way to go.

<br>

Should any other questions arise, I'll address them here. I'll also try to keep the snippet's versions up to date.

See ya!
