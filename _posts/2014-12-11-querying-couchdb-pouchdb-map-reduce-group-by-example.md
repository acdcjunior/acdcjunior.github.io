---
layout: post
title: 'Querying a CouchDB view using PouchDB: A map/reduce "GROUP BY" example'
maintag: 'pouchdb'
tags: [pouchdb, couchdb, map, reduce, view, 'group by']
lang: 'en_US'
---
If you are like me and do not read the docs before installing and setup up stuff, an example may help you.

CouchDB (and PouchDB) is (are) awesome. Querying will be awesome as well, unless... it is the first time you deal with those `map()`/`reduce()` stuff. I'm not gonna help you there, though, as there are plenty of docs around doing the job of explaining how to use them.
<!--more-->
What I **am** gonna do is give you a quick and dry example of how one could have a query that brings results similar to what a SQL `GROUP BY` would bring. There you go:

{% gist f8c9a6df7f3f41d600c4 pouchdbMapReduceGroupByExample.js %}

[Check an online demo of the code above.](http://jsbin.com/vijaga/1/edit?html,js,output)

**Where's the secret?** When grouping stuff, well, use the `group` option. It was right there in front of you the whole time, eh? Why didn't you read the docs... Make sure you use the `group_level` as well (it is specalli useful if you emit array keys, as in `emit([doc.genre, doc.year], 1)`).

They (`group` and `group_level`) have some useful defaults. To get to know them better, now that you are introduced to them, [read the docs!](http://pouchdb.com/api.html#query_database) - and make sure you use the demo above to fiddle!

