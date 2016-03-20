---
layout: post
# type: <nothing> | quote | status | video | photo
title: 'Typescript: cast an object to other type. How? And instanceof?'
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

You can find more about it in the [TypeScript Language Specification](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#4194-the-instanceof-operator):

> # 4.19.4 The instanceof operator

> The instanceof operator requires the left operand to be of type Any, an object type, or a type parameter type, and the right operand to be of type Any or a subtype of the 'Function' interface type. The result is always of the Boolean primitive type.

> Note that object types containing one or more call or construct signatures are automatically subtypes of the 'Function' interface type, as described in section 3.3.

# Since we're at it, have you heard of the `typeof` operator?

Using the `typeof` operator, you can find out a variable's type:

```javascript
// Using typeof in an EXPRESSION:
var x = 5;  
var y = typeof x; // y will have the string "number" as value

// Using typeof in an TYPE QUERY (or... as I like to say, variable declaration):
var a = 9; // a is a number
var b: typeof a; // b will be declared as a number as well

b = "a string"; // yields an error, as b is a number: "The type 'string' is not assignable to type 'number'."
```

Check a [<kbd>demo of the above code here</kbd>](http://www.typescriptlang.org/Playground/#src=%2F%2F%20Using%20typeof%20in%20an%20EXPRESSION%3A%0Avar%20x%20%3D%205%3B%20%20%0Avar%20y%20%3D%20typeof%20x%3B%20%2F%2F%20y%20will%20have%20the%20string%20%22number%22%20as%20value%0Aconsole.log(y)%3B%0A%0A%2F%2F%20Using%20typeof%20in%20an%20TYPE%20QUERY%20(or...%20as%20I%20like%20to%20say%2C%20variable%20declaration)%3A%0Avar%20a%20%3D%209%3B%20%2F%2F%20a%20is%20a%20number%0Aconsole.log(typeof%20a)%3B%0A%0Avar%20b%3A%20typeof%20a%3B%20%2F%2F%20b%20will%20be%20declared%20as%20a%20number%20as%20well%0A%0Ab%20%3D%20%22a%20string%22%3B%20%2F%2F%20yields%20an%20error%2C%20as%20b%20is%20a%20number%3A%20%22The%20type%20'string'%20is%20not%20assignable%20to%20type%20'number'.%22).

Find more about it in the [TypeScript spec](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#4186-the-typeof-operator) as well.

That's it.
