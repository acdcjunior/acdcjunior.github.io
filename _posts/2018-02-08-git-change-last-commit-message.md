---
layout: single
title: "Git: change last commit's message"
category: git
tags: [git]
lang: en-US
comments: true
share: true
mathjax: false
published: true
modified: 2018-02-08
---

Run:

    git commit --amend -m "new commit message"
    
<!-- more -->

Notice this changes the last commit's message only. Also it will only work if you haven't pushed it yet.

<br>

(Note: Technically, it could work if you have already pushed it, but you'd need to do a forced push - which would rewrite the repository and possibly force other people who had already pulled the older-messaged-commit to, in the worst case, clone the repo again.)
