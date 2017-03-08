# Who needs unit tests?

The title talks about unit tests because I'll be making the case for them later, but, before that, let's take a wider look.

# Who needs tests?

Only those who:
- really dont like bugs
  - want to have more accurate estimates, because with bugs lying around, you never kwnow
- dont like rework
  - again, rework kills estimates (and is very boring... and unprofessional)
- refactor a lot
- want to speed up delivery
  - Continuous Delivery is unthinkable without a reliable and complete suite of tests

In other words, you won't miss tests if you:
- are used to having bugs more often than not
- don't refactor a lot
- don't mind tons of manual testing (and back and forth develop-try cicles)

Of course, there are many kinds of testing. Manual testing is one of them -- that's actually why some say that you can't escape
from testing your apps, the difference is that too many will only resort to manual testing.

# Do you need unit tests? (aka "The Test Pyramid")

Who likes when tests break?

When an integration tests fail and you have no idea on how to fix it?

Repeat after me: not having tests will allow us down; x2.
