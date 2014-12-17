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

in Chrome?

One cause is: You are offline. Solution: be online!

What if you **are** online?

- Did you add the `NETWORK` section of the `CACHE MANIFEST` file? It will tell the browser what files will be always downloaded.

        CACHE MANIFEST
        
        # ...
        
        NETWORK:
        *
    
- If you do have the `NETWORK` section, and you are online, then your `.appcache` file may be currently cached by the browser. (Try opening the `.appcache` file URL directly in the browser, does the old version open?) The solution here is to either clean the cache yourself or to wait until the browser decides the previously downloaded file is expired :/

Good luck!
