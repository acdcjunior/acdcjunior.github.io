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
    
- If you do have the `NETWORK` section, and you are online, then your MANIFEST file may be currently cached by the browser. (Try opening the MANIFEST file URL directly in the browser, does the old version open?) The solution here is to either clean the cache yourself or to wait until the browser decides the previously downloaded file has expired :/
  - Some evidence of this:
     - Open the MANIFEST file URL in a new tab. The old file is shown, right?
     - Now on this very tab, open developer tools (F12) and move to the *Network* tab. Now reload (F5).
     - Check the `Size`/`Content` column as Chrome says it downloaded the file "`(from cache)`". Nasty.
  - *Not-so-useful workaround*: Some report that **restarting Chrome** will make the error go away. This is, of course, less than optimal, as we don't control our users' browsers, but at least it does give us some hope. Another fortunate detail is that if it is Chrome mobile, some seconds away from the app should reset it in iOS (I can't speak for Android, though).

<br>

That's it. Good luck!

<br>

PS.: Still talking about Chrome, to clear the appcache/MANIFEST files, try this URL, it may be of help:

> [chrome://appcache-internals/](chrome://appcache-internals/)

For more like it (all the config URLs Chrome has), check:

> [chrome://chrome-urls/](chrome://chrome-urls/)
