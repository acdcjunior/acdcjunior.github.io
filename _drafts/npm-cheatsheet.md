NPM package commands cheatsheet


```bash
# Installing packages

$ npm install <package>@<version>                              # install a given package at a given version
$ npm install webpack@1.3.1 [--save --save-dev --save-exact]   # install example (--save adds to package.json)
$ npm install webpack -g                                       # install package globally (latest version)

# Finding out versions/updating

$ npm list -g --depth=0                  # list globally installed packages and their versions
$ npm list webpack -g                    # find out installed version of a specific globally installed package
$ npm view webpack version               # get current latest version of a package
$ npm outdated -g --depth=0              # list all outdated globally installed packages
$ npm update -g                          # update all globally installed packages

# NPM itself

$ npm install npm@latest -g              # update installed NPM to latest version
```
