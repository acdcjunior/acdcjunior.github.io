> How can I test a private method? Can I make it public (or package-private/protected) to test it?

**You shouldn't weaken the method's visibility to test it.**

> What should I do, then?

**You should test classes for their external API only.**

> What is "their external API"?

**It's just a fancy way of calling the classes' public methods.**

> Aw, right. But why should I test from the public methods only?

**Because if you test them for their private behavior, you are testing implementation details (not API) and this**

   - **couples the test code too much to the production code**
   - **makes the test too brittle**
   - **makes the code and test harder to change**
   - **\<insert here other problems that come from tightly coupled classes\>**

> Ok, ok. I will try to test it from the external API.

(minutes later)

> I can't test it.

**Why?**

> It's too difficult.

**OK, good to know. This is not a test problem, this is a design problem of you production code. The test
is just making that problem explicit. Why is is so difficult?

> Because the class is too big, I have to jump through many hoops to get to the place I want to test.

**You already know what to do: if the class is too big, break it. This way, the code that is private now
will probably become part of the API of (aka a `public` method at) the new class, and then you can test it more easily.**

> That rule applies to both new and legacy code?

**If the code is new, you *must* do that. As said, don't weaken the visibility because that's a design smell. If the code
is new, why are you writing it with a known design smell already?**

**If it is legacy code (aka: you are not writing it right now and it doesn't have tests), you should first try to refactor using
automated tools (IDE) only. If you can safely do that, that's what you should. Extract the method to a new class and test it as usual.**

**If you can't refactor or don't feel safe enough, ONLY then you can weaken the visibility and test it.**

**After the tests are there, you'll probably braver and then you should extract the class ("as usual"). Resist the temptation to just let it be there... (the design has a problem, and it won't go away until someone makes it go away).**

**If you don't have time, though, well, what can you do? At least you wrote the tests. Hopefully someone in the future (maybe yourself) will come to fix it.**
