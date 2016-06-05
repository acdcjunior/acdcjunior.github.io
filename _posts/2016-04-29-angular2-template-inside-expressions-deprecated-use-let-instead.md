---
layout: single
title: 'angular 2 - Template parse warnings: "#" inside of expressions is deprecated. Use "let" instead! (ngFor)'
description: "woot"
category: angular2
tags: [angular2, angular]
comments: true
lang: en-US
---

So you get on your console some warnings:

<!--more-->

```
Template parse warnings:
"#" inside of expressions is deprecated. Use "let" instead! ("
        <ul>
          <li [ERROR ->]*ngFor="#i of items">
            {⁣{i}}
          </li>
"): List@2:14
```

# Fix

Replace the `#` with `let`.

Instead of:

```xml
<li *ngFor="#i of items">
```

Use:

```html
<li *ngFor="let i of items">
            ^^^----------------------- notice change here
```

# Reason

Since version [2.0.0-beta.17 (2016-04-28)](https://github.com/angular/angular/blob/master/CHANGELOG.md#200-beta17-2016-04-28) this is needed:

> ### BREAKING CHANGES
>
> The reference `#...` now always means `ref-`.
>
> **Before:**
>
> - Outside of `ngFor`, a `#...` meant a reference.
> - Inside of `ngFor`, it meant a local variable. 
>
> This was pattern was confusing.
>
> **After:**
>
> - `<template #abc>` now defines a reference to a TemplateRef, instead of an input variable used inside of the template.
> - Inside of structural directives that declare local variables, such as `*ngFor`, usage of `#...` is deprecated. Use `let` instead.
>   - `<div *ngFor="#item of items">` now becomes `<div *ngFor="let item of items">`
> - `var-...` is deprecated. 
>   - use `#` or a `ref-` outside of `*ngFor`
>   - for `ngFor`, use the syntax:  `<template ngFor let-... [ngForOf]="...">`


