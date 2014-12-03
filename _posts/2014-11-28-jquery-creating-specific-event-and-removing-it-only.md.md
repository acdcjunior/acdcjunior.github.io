---
layout: post
title: 'Creating (binding) a specific event and removing (unbinding) it only'
maintag: 'jquery'
tags: [jquery]
lang: 'en_US'
---
Say you want to add some specific event and want to unbind just it (and not others) later.
<!--more-->

A an example, consider you binding the <kbd>ESC</kbd> key to a function that closes a modal you are about to open:

{% gist b88f2a355f51584121c9 regularKeyUpBinding.js %}

and, later on:

{% gist b88f2a355f51584121c9 regularKeyUpUnbinding.js %}

The problem here is just that you may remove some other bindings as well. Any `keyup` binding before will be removed. This may not seem troublesome now, but may bring some unpredictable behavior in the future, the kind of trouble that makes the developer shout: ***"Who da heck did this!?"*** - and we don't want that karma.

The solution is simple: jQuery allows the attachment of **"namespaces"** to the events - just like a label - so you can refer specifically to it later.

The format is: `event.[namespace]`.
Our code above could then do the binding just like:

{% gist b88f2a355f51584121c9 namedKeyUpBinding.js %}

And the removal:

{% gist b88f2a355f51584121c9 namedKeyUpUnbinding.js %}

All clean. Awesome.

Check out a [working JSFiddle demo](http://jsfiddle.net/acdcjunior/79ms0xp6/).
More on [`event.namespace`](http://api.jquery.com/event.namespace/).
