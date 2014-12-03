---
layout: post
title: 'Creating (binding) a specific event and removing (unbinding) it only'
maintag: 'jquery'
tags: [jquery]
lang: 'en_US' # _
---
##Creating (binding) a specific event and removing (unbinding) it only

Say you want to add some specific event and want to unbind just it (and not others) later.
<!--more-->

A an example, consider you binding the <kbd>ESC</kbd> key to a function that closes a modal you are about to open:

```javascript
function letESCKeyCloseMyModal() {
    $(document).on("keyup", function(e) {
        if (e.keyCode === 27) { // ESC key
            closeMyModal();
        }
    });
}
```

later on:

```javascript
function closeMyModal() {
	$("#myModal").dialog("close"); // closes the modal
    $(document).off("keyup"); // removes ESC key bind
}
```

The problem here is just that you may remove some other bindings as well. Any `keyup` binding before will be removed. This may not seem troublesome now, but may bring some unpredictable behavior in the future, the kind of trouble that makes the developer shout: ***"Who da heck did this!?"*** - and we don't want that karma.

The solution is simple: jQuery allows the attachment of **"namespaces"** to the events - just like a label - so you can refer specifically to it later.

The format is: `event.[namespace]`.
Our code above could then do the binding just like:

```javascript
$(document).on("keyup.escKeyClosesModal", function(e) { ... });
```

And the removal:

```javascript
$(document).off("keyup.escKeyClosesModal");
```

All clean. Awesome.

See demo here: http://jsfiddle.net/acdcjunior/79ms0xp6/
More on `event.namespace`: http://api.jquery.com/event.namespace/
