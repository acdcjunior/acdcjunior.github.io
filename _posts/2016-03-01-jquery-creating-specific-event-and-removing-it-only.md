---
layout: single
title: 'Creating (binding) a specific event and removing (unbinding) it only'
category: jQuery
tags: [jquery]
---
Say you want to add some specific event and want to specifically unbind just it (and not others) later.
<!--more-->

As an example, consider the binding of the <kbd>ESC</kbd> key to close a modal of yours:

{% gist b88f2a355f51584121c9 regularKeyUpBinding.js %}

and, later on:

{% gist b88f2a355f51584121c9 regularKeyUpUnbinding.js %}

The problem here is just that the `.off()` snippet may remove some other bindings as well - not just the ones you made. Any `keyup` binding before will be removed. This may not seem troublesome now, but may bring some unpredictable behavior in the future, the kind of trouble that makes the developer shout: [***"WTF!?"***](https://pbs.twimg.com/media/BxxptxuIUAAgMGr.jpg:large) - and we don't want that karma.

The solution is simple: jQuery allows the attachment of **"namespaces"** to the events - just like a label - so you can refer specifically to it later.

The format is: `event.[namespace]`.
Our code above could then do the binding just like:

{% gist b88f2a355f51584121c9 namedKeyUpBinding.js %}

And the removal:

{% gist b88f2a355f51584121c9 namedKeyUpUnbinding.js %}

All clean. Awesome.

Check out a [working JSFiddle demo](http://jsfiddle.net/acdcjunior/79ms0xp6/).
More on [`event.namespace`](http://api.jquery.com/event.namespace/).
