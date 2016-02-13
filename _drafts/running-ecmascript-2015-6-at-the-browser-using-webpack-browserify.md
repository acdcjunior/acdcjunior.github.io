---
layout: post
title: Running a ECMAScript 2015 (ES 6) module at the browser (today!)
category: JavaScript
tags: [javascript]
lang: 'en_US'
description: Step-by-step run ES2015 code in a browser
headline: Architectures must be awesome!
comments: true
# modified: 2015-12-13
imagefeature: picture-26.jpg
---

Initiate `package.json`:

    $ npm init
	
Install Babel (globally, so the `babel` command is available):

    $ npm install -g babel-cli

Now Babel needs to know we are transpiling from ES2015.

Create `.babelrc` and add the es2015 preset:

    {
        "presets": ["es2015"]
    }

When you run Babel now, it will look for that preset, reason why you must install it before running Babel:

    $ npm install --save-dev babel-preset-es2015

Now you are ready to transpile:

    $ babel src --out-dir target
	
That's it, your files are now transpiled to ECMAScript 5. Now you gotta load them at the browser.

You'll notice you can't just load them at the browsers through `<script>` tags as usual mostly because they contain
some `require()` commands.

So we need to give them a `require()` implementation. I'm gonna show two ways you can satisfy that need: Browserify and WebPack.


# Browserify

    $ npm install -g browserify

    $ browserify ./target/app.js -o ./target/bundle.js


# WebPack

    $ npm install webpack --save-dev
