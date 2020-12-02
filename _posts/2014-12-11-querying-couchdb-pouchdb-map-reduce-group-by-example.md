---
layout: single
title: 'Querying a CouchDB view using PouchDB: A map/reduce "GROUP BY" example'
category: nosql
tags: [pouchdb, couchdb, 'map-reduce']
lang: en-US
---
If you are like me and do not read the docs before installing and running stuff, an example may help you.

CouchDB (and PouchDB) is (are) awesome. Querying will be awesome as well, unless... it is the first time you deal with those `map()`/`reduce()` stuff.<!--more--> I'm not gonna help you there, though, as there are plenty of docs around doing the job of explaining how to use them.

What I *am* gonna do is give you a quick and dry example of how you could write a query that brings results similar to what an SQL `GROUP BY` would bring. There you go:

{% gist f8c9a6df7f3f41d600c4 pouchdbMapReduceGroupByExample.js %}

[Check an online demo of the code above.](http://jsbin.com/vijaga/1/edit?html,js,output)

**Where's the secret?** When grouping stuff, well, use the `group` option. It was right there in front of you the whole time, eh? Why didn't you read the docs... Make sure you use the `group_level` as well - it is specally useful if you emit array-keys, as in `emit([doc.genre, doc.year], 1)`.

They (`group` and `group_level`) have some useful defaults. To get to know them better, now that you were introduced to them, [read the docs!](http://pouchdb.com/api.html#query_database) - and don't hesitate to use the demo above to fiddle!