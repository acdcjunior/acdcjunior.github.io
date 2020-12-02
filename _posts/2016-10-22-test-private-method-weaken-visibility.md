---
layout: single
title: 'Unit test private methods, how? Or... should I?'
category: tests
tags: [test, unit test, design]
lang: en-US
comments: true
share: true
mathjax: false
published: true
---

One of these days I had a conversation with a good friend of mine about testing private methods. It ended up being very interesting, so I thought I'd post post the gist of it. Here it goes:

> **Friend:** How can I test a private method? Can I make it public (or package-private/protected) to test it?

**Me:** You shouldn't weaken the method's visibility just so you can test it.

> What should I do, then?

You should test classes for their external API only.

> What is "their external API"?

You can say that's just a fancy way of calling the classes' public methods.

> Aw, right. But why should I test for their external API only?

Because if you test them for their private behavior, you are testing implementation details (not API) and this

  - couples the test code too much to the production code
  - makes the code and test harder to refactor (or change in general)
  - makes the test too brittle (they will fail for the tiniest changes...)
  - \<insert here other problems that come from tightly coupled classes\>

> Ok, ok. I will try to test it from the external API.

*(minutes later)*

> I can't test it.

Why?

> It's too difficult.

OK, good to know. This is probably not a test problem, this is usually a design problem of you production code. The test
is just making that problem explicit. Why is is so difficult?

> Because the class is too big, I have to jump through too many hoops to get to the place I want to test.

You already know what to do: if the class is too big, break it apart. This way, the code that is private now
will probably become part of the API of (aka a `public` method at) the new class, and then you *can* test it more easily.

For the original class, you can now test only if it sends the correct arguments to the new class, and use a test double (stub/mock) of the new class in the test instead of an actual instance.

> That rule applies to both new and legacy code?

If the code is new, you *must* do that (breaking it apart). As said, don't weaken the visibility just for testing purposes because that's a design smell (a *test smell*, if you will). If the code is new, why are you writing it with a known design smell already? **Now** it's the best time to fix it.

If it is legacy code (aka: you are not writing it right now and it doesn't have tests), you should first try to refactor using
automated tools (IDEs) only. If you can safely do that, that's what you should. Extract the method to a new class (this is what I meant by "break the class" in the last point) and test it as usual.

If you can't refactor or don't feel safe enough, ONLY then you can weaken the visibility and test it. (I suggest you annotate/document the class with Guava's [`@VisibleForTesting`](https://google.github.io/guava/releases/19.0/api/docs/com/google/common/annotations/VisibleForTesting.html) so others know why that visibility is like that.)

After the tests are there, you'll probably feel braver and then you should extract the code to a new class (again, that's what I mean by "breaking" the original class). Resist the temptation to just let the code be there... (The design has a problem, and it won't go away until someone takes care of it.)

If you don't have time to split it, though, well, what can you do? At least you wrote the tests. That's a step in the right direction. Hopefully someone in the future (maybe yourself) will come and fix it for good.


----

And that was it!
