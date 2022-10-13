---
layout: single
# type: <nothing> | quote | status | video | photo
title: 'Typescript: cast an object to other type. How? And instanceof or typeof?'
category: Typescript
tags: [typescript, casting]
lang: en-US
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

Typescript: cast an object to another type. How?
<!--more-->

<br>

## Use `<>` or the `as` keyword for casting:

```javascript
var myObject: TypeA;
var otherObject: any;
// values are assigned to them, and...
myObject = <TypeA> otherObject;     // using <>
myObject = otherObject as TypeA;    // using as keyword
```

Both ways have the same (compile-time) outcome.

<br>

### Ok, both work the same. Which one should I use, then? `<>` or `as`?

Since Typescript 1.6, the default is `as` because `<>` is ambiguous and unavailable in `.tsx` files. (TSX is the TypeScript's version of `.jsx`. [Click here for more details.](https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#new-tsx-file-extension-and-as-operator))

So... **casting using** `as` **is preferred**. (If you are using `.tsx`, then it is the only option.)


<br>
<br>

---

## How about checking if an object is an instance of a given type?

Glad you asked. This shouldn't come as a big surprise, though, `instanceof` in TypeScript is similar to other popular languages:

```javascript
if (myObject instanceof Type) {
  console.log("myObject *is* an instance of Type!");
} else {
  console.log("Oops! myObject is not an instance of Type...");
}
```

You can find more about it in the [TypeScript Language Specification](https://github.com/Microsoft/TypeScript/blob/master/doc/spec-ARCHIVED.md#4194-the-instanceof-operator):

> #### 4.19.4 The instanceof operator
>
> The `instanceof` operator requires the left operand to be of type Any, an object type, or a type parameter type, and the right operand to be of type `Any` or a subtype of the '`Function`' interface type. The result is always of the `Boolean` primitive type.
>
> Note that object types containing one or more call or construct signatures are automatically subtypes of the '`Function`' interface type, as described in section 3.3.

Great, but...

<br>

---

## Since we're at it, have you heard of the `typeof` operator?

Using the `typeof` operator, you can **find out a variable's type**:

```javascript
// Using typeof in an EXPRESSION:
var x = 5;  
var y = typeof x; // y will have the string "number" as value

// Using typeof in an TYPE QUERY
// (or... as I like to say, variable declaration):
var a = 9; // a is a number
var b: typeof a; // b will be declared as a number as well

b = "a string"; // yields an error, as b is a number:
                // "Type 'string' is not assignable to type 'number'."
```

Check a [<kbd>demo of the above code here</kbd>](https://www.typescriptlang.org/play?#code/PTAEFUGcEsDsHNQBcCeAHApgewGajqAIaygCiAGgAoBKpAynQJIDyAcgFwCwAUAG6EAnUAA9QAXlABWANyhQPfkJTjk6bHmGyQoZQHdoAGwOgAFoV4ZkJy5CQC4iAESwArgFsARhgGOikUPwGLhg8PNpQDqqYuPgkxKAAKgCalKSgAIrgpNRJYWAAFFgCAHSlfqCMoAbQANaWSFigkIQoADQBgtCEHgaWACYYAMYGgoRI0FiwAJRcfIJEKgCcWmCE+P5rrp7eCvMe7FHqRCugHqD6Rqf9QyMCGH3lm+5eQoT+uhhGodxnEo5rtnsCEcJxQ0E+fQ2JG8AiK7Tep3WCy2L1mcnRGMxcm0jgSalAAHJAQ4CUjYFgkH4YPBYN1eshGqhMISUd4CcVHEA).

Find more about `typeof` in the [TypeScript spec](https://github.com/Microsoft/TypeScript/blob/master/doc/spec-ARCHIVED.md#4186-the-typeof-operator) as well.

That's it.
