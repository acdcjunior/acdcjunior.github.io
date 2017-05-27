---
layout: post
title: Architecture's mission: embrace change
category: Design
tags: [architecture, design]
lang: 'en_US'
description: What should be the goal of our architecture?
headline: Architectures must be awesome!
comments: true
# modified: 2015-12-13
imagefeature: picture-26.jpg
---

There are many definitions for software architecture, here, let's say it is the big picture of the system.
Now, what should your architecture's goal be? What should it encourage in the developers?

Our architecture should not try to be perfect up front, simply because no one can predict the future.
Should we give up, then? Nah, just a different goal: embrace change.
We should make sure our architecture enables our software to adapt quickly to changes, triggered by new information that
we learn as the problem and the sofware matures.


Architecture is imposing some constraints on our code (e.g. entities can't have references to repositories, app layer only should open transactions), but that's a good thing. It enables criativity instead of limiting it.


Antigamente: "um modelo para tudo" --> o conceito "Gasto" é igual no domínio todo??

Hoje: DDD/Services: unificacao eh cara e frequentemente ineficaz -> divide em contextos bem definidos -> cada um tem o que quiser, até termos conflitantes


# Achitecture embraces non-functional constraints and long term goals

Or it should, at least.

Committing code without tests in order to solve a "corner case" sounds like a great idea at the moment, but developers must look at the bigger picture. You might have given the OK to others to do the same thing on a bigger scale. Have you ever worked on a project that had tests but now doesn't? Guess how it happened.

