Global state is bad, hidden global state is even worse

Singletons are global state as well. That's one reason why they are bad. (Others include difficulty to test.)
https://www.youtube.com/watch?v=acjvKJiOvXw

Consider functions with side effects: their side effects are hidden outputs. This kind of functions is not avoidable, but
try to minimize their application.
http://blog.jenkster.com/2015/12/what-is-functional-programming.html
