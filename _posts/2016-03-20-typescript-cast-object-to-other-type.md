---
layout: post
# type: <nothing> | quote | status | video | photo
title: 'Typescript: cast an object to other type. How?'
category: Typescript
tags: [typescript, casting]
lang: 'en_US'
# description: Test dependencies are very common. Here they go.
# headline: Awesome snippet, let's begin testing ASAP!
comments: true
# modified: 2015-12-13
share: true
mathjax: false
# tags:
#  - alternate
#  - way
imagefeature: picture-38.jpg
#image:
#  feature: picture-38.jpg
#  credit: example.com
#  creditlink: "http://example.com/blog/stuff/"
# link: http://some-link-for-a-link-post
# featured: true
published: true
---

Typescript: cast an object to other type. How?
<!--more-->

Use `<>`:

```javascript
var myObject: TypeA;
var otherObject: any;
// values are assigned to them, and...
myObject = <TypeA> otherObject;
```

# How about checking if an object is an instance of a given type?

Glad you asked. This shouldn't come as a big surprise, though, `instanceof` in TypeScript is similar to other popular languages:

```javascript
if (myObject instanceof Type) {
  console.log("myObject *is* an instance of Type!");
} else {
  console.log("Oops! myObject is not an instance of Type...");
}
```

That's it.
