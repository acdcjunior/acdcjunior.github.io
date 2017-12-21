---
layout: single
title: 'Convert callback to promise'
category: javascript
tags: [javascript, function, callback, promise]
lang: en-US
comments: true
share: true
mathjax: false
published: true
modified: 2017-12-21
---

Say you have a function with the following signature, which requires a callback:

<!-- more -->

```
someFunctionWithCallback(argOne, argTwo, callback)
```
    
To convert it to a `Promise`'d function do:

```
function someFunctionWithPromise(argOne, argTwo) {
    return new Promise((resolve) => {
        someFunctionWithCallback(argOne, argTwo, resolve);
    });
}
```
    
Done.
