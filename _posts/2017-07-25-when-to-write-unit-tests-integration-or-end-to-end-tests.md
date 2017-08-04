---
layout: single
title: 'When to write Unit Tests, Integration Tests or End-to-end Tests?'
category: tests
tags: [tests, unit tests, integration tests, e2e tests]
lang: en-US
comments: true
share: true
mathjax: false
published: true
modified: 2017-07-29
---

Who cares about tests?

If you run a rising startup with a now-or-never deadline coming up on the next few days, will you write tests?

No?

Why should you write tests at all, then?

If you try a bit harder, you can find some reasons that would justify why some teams don't miss tests. Some such situations are when the team doesn't mind the occasional bug and or when its members are not used to doing refactoring frequently.

What do those points indicate?

For one, they tell us the team is not worried about being fast in the long run. It does want to go fast, but only "right now" (and at the cost of quality).

Is that good enough?

# Don't forget your end goal

> Our goal is to deliver *quality* software **fast, consistently**.

Our goal as software devs is, ultimately, to deliver quality software faster... and faster! But also, an this is an important point, **consistently** faster.

Tests are useless when you are doing a quick one-off work.

But they are key when you want to be consistently fast.

# So, who needs tests?

Once I heard a joke:

> *"We have users, we don't need tests!"*

Indeed. I coudn't disagree. Users are a very effective tool to find bugs.

But they are also the more stressful and costly one (users finding bugs may not be the most expensive alternative to you, but certainly it is the most costly to the overall business).

Yet, some teams go by without tests. How so?

# You won't miss tests if you...

In other words, you won't miss tests if you:
- are used to having bugs more often than not
- don't refactor a lot
- don't mind tons of manual testing (and back and forth develop-wait-deploy-try cycles)

Another way of looking at this is asking who will miss tests, and when.

# Who misses tests?

Only those who:
- really don't like bugs
  - ...and want to have more accurate estimates, because with bugs lying around, you never know
- don't like rework
  - again, rework kills estimates (and is very boring... and unprofessional)
- refactor a lot
  - where do you draw the confidence from? How will you know that system-wide refactoring won't break some corner-but-important functionality?
- want to speed up delivery
  - Continuous Delivery is **unthinkable** without a reliable suite of tests
- need to enable experimentation
  - learning comes from experimentation. New devs won't be able to safely experiment, and learn how the system works, without tests. Same goes to business oportunities, many modern practices rely on constant experimentation of features.

Of course, there are many kinds of testing. Manual testing is one of them -- that's actually why some say that you can't escape
from testing your apps, you will either automate the testing or not.

# Without *automated* tests, projects can't grow

Ok, you say, you have tons of manual tests. Still, a project without automated tests simply can't grow.

Why?

> *development-time* without automated tests increase the need for (manual) *testing-time*

 "Growing", in this context, must involve some kind of development. Let's call the time spent doing this *development-time*. Similarly, let's call time spent doing manual tests *testing-time*.

Since you are spending some *development-time*, the number of features tend to rise. If you test them manually, how do you expect to keep up? As the time goes by, you will require more and more *testing-time*. As an alternative, though, you can suppose that some parts don't require testing because you allegedly didn't "touch" them. Well... yeah. In order for this to be true, you must touch and touch less area every time, otherwise bugs will lurk around.

So, like this, eventually, your project will come to a halt.


> [this post is a work in progress!]
