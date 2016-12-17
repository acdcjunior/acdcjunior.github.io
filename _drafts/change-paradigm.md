I'd like to suggest a change of paradigm.

Software is written so it is easy to be changed by others.

Of course, the first goal is to have it working. But having it working now and not tomorrow is not any good.

LoD, for instance, is a step torward maintainability.
It may seem too much ceremony at times, but try to change a system that follows it vs. one that doesn't and you'll know
the difference. [Exercise: refactor two systems, one that follows LoD, other that doesn't.]

Dependency Injection is something else that helps you to change the software without having to look at every bit of it (you
change a component that is being injected at any parts of the system, all these parts will feel that change.)
