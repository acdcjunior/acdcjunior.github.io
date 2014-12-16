---
layout: post
title: 'Application Cache Error event: Manifest fetch failed (6) and Resource fetch failed (6)'
maintag: 'html5'
tags: [html5, chrome, cache manifest]
lang: 'en_US'
---
Did you get:

> "Application Cache Error event: Manifest fetch failed (6)"

Or

> "Application Cache Error event: Resource fetch failed (6)"

in Chrome, even though you are online? Once I got that. Adding this solved it:

    NETWORK:
    *

Good luck!