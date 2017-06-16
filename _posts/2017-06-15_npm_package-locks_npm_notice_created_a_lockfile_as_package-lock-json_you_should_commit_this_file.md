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

About package-lock.json [here][1]:
> package-lock.json is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.

More info about what that file means and the reasoning behind it: https://docs.npmjs.com/files/package-locks


  [1]: https://docs.npmjs.com/files/package-lock.json
