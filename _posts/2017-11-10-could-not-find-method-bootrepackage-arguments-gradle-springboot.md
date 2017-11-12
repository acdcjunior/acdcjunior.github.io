---
layout: single
title: 'Could not find method <b>bootRepackage()</b> for arguments - Gradle/SpringBoot'
category: spring-boot
tags: [spring-boot, gradle]
lang: en-US
comments: true
share: true
mathjax: false
published: true
modified: 2017-11-10
---

So you get:


> Could not find method *bootRepackage()* for arguments...


```
$ ./gradlew clean

FAILURE: Build failed with an exception.

* Where:
Build file '...\build.gradle' line: 25

* What went wrong:
A problem occurred evaluating project ':my-project'.
> Could not find method bootRepackage() for arguments [build...] on project ':...' of type org.gradle.api.Project.

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output.

* Get more help at https://help.gradle.org

BUILD FAILED in 2s
```

# Fix

From:  https://spring.io/blog/2017/04/05/spring-boot-s-new-gradle-plugin#building-executable-jars-and-wars

> The *`bootRepackage` task has been replaced with `bootJar` and `bootWar` tasks* for building executable jars and wars respectively. Both tasks extend their equivalent standard Gradle jar or war task, giving you access to all of the usual configuration options and behaviour.
