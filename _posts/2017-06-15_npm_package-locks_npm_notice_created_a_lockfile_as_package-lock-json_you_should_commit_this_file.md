---
layout: single
title: 'NPM Package Locks: "npm notice created a lockfile as package-lock.json. You should commit this file."'
category: NPM
tags: [npm, node, javascript]
lang: en-US
comments: true
share: true
mathjax: false
imagefeature: picture-38.jpg
published: true
---

So you just got

> npm notice created a lockfile as package-lock.json. You should commit this file.

What is it, and what to do?
<!--more-->

In case you are wondering, yes, you should commit `package-lock.json`.

But what is it? [In the docs](https://docs.npmjs.com/files/package-lock.json) you get:

> `package-lock.json` is automatically generated for any operations where npm modifies either the `node_modules` tree, or `package.json`. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.

But I too didn't find that so enlightening.

# Really, in human terms, what da &#^$#& is `package-lock.json`?

Ok, ok. Calm down. Let me give a stab at it.

In few words, every time you use `npm install`, NPM will read your `package.json` file and download your dependencies (and their dependencies) to your `node_modules` folder.

Ideally, if you didn't change your `package.json` file, anywhere you run `npm install` you should get the exact same content at `node_modules` folder.

But for [several reasons](https://docs.npmjs.com/files/package-locks#description), that is not always the case.

That's where `package-lock.json` comes in. It is basically a record of what files where actually downloaded.

So, now, everytime you run `npm install`, you (or your fellow devs, or the CI server) will get the exact same dependency tree downloaded.

Simple, isn't it?
