---
layout: single
title: 'This feature requires ASM8_EXPERIMENTAL - task bootJar - Gradle/SpringBoot'
category: spring-boot
tags: [spring-boot, gradle]
lang: en-US
comments: true
share: true
mathjax: false
published: true
modified: 2020-04-24
---

So you get:


> Execution failed for task ':bootJar'

When running `gradlew build`:

```
$ ./gradlew build

> Task :compileJava
Note: file.java uses preview language features.
Note: Recompile with -Xlint:preview for details.

> Task :bootJar FAILED

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':bootJar'.
> This feature requires ASM8_EXPERIMENTAL

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 8s
```

## Fix

Update spring-boot to the latest version. The minimum is `2.2.6.RELEASE`.

[The reason](https://github.com/spring-projects/spring-framework/issues/24722) is the ASM dependency that needed to be updated. The ASM is referenced by the spring framework, which is referenced by spring-boot.
