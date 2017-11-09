---
layout: single
title: 'Git: Get first line of commit message from shell'
category: git
tags: [git, shell]
lang: en-US
comments: true
share: true
mathjax: false
published: true
modified: 2017-11-09
---

You should have an empty line after the first line to separate title from body of the message, like:

    this is my commit message title
    
    some details
    go here
    yadda yadda
    
If you did that, then this should work for you:

    $ git log --oneline -n 1 HEAD

> d53468c this is my commit message title


But say you didn't. So, for the given commit message:

    getting one line git commit msg
    second
    third line 
    
    fifth line 

You get:

    $ git log --oneline -n 1 HEAD

> c43b68c getting one line git commit msg second third line 
    
Don't want hash:

    $ git log --oneline --format=%B -n 1 HEAD

> getting one line git commit msg<br>
> second<br>
> third line<br> 
>     <br>
> fifth line

    
Just the **first line** of the **message**:
    
    $ git log --oneline --format=%B -n 1 HEAD | head -n 1

> getting one line git commit msg

