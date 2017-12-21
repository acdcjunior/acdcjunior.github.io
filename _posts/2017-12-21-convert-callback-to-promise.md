---
layout: single
title: 'Convert callback to promise (JavaScript function)'
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

```javascript
someFunctionWithCallback(argOne, argTwo, callback)
```
    
To convert it to a `Promise`'d function do:

```javascript
function someFunctionWithPromise(argOne, argTwo) {
    return new Promise((resolve) => {
        someFunctionWithCallback(argOne, argTwo, resolve);
    });
}
```
    
That's it.


Check a [<kbd>running demo here</kdb>](https://jsfiddle.net/acdcjunior/jbe38chc/).

# If you have an error callback as well

You really should handle errors. Say the signature is, then:

```javascript
someFunctionWithCallback(argOne, argTwo, successCallback, errorCallback)
```
    
To convert it to a `Promise`'d function do:

```javascript
function someFunctionWithPromise(argOne, argTwo) {
    return new Promise((resolve, reject) => {
        someFunctionWithCallback(argOne, argTwo, resolve, reject);
    });
}
```

# Consuming the `Promise`'d function

Either:

```javascript
someFunctionWithPromise(1, 2).then((successArgs) => {
    console.log("Success :) ", successArgs);
}).catch((errorArgs) => {
    console.log("Error :( ", errorArgs);
});
```

Or use `async`/`await`:

```javascript
(async () => {
    
    try {
        let successArgs = await someFunctionWithPromise(1, 2);
        console.log("Success :) ", successArgs);
    } catch (errorArgs) {
        console.log("Error :( ", errorArgs);
    }
    
})();
```

And done deal.
