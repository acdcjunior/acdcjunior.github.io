---
layout: single
title: 'Easy way to add Mocha + Chai + Sinon to Unit Test JavaScript'
category: javascript
tags: [javascript, test]
lang: en-US
comments: true
share: true
mathjax: false
published: true
modified: 2018-02-05
---

Run:

<!-- more -->

```shell
npm i -D mocha chai sinon @types/sinon-chai
```

`mocha`, `chai`, `sinon` are the dependencies needed to run the tests, use bdd-style assertions and create test doubles (spies, mocks), respectively. The `@types/sinon-chai` is to help your IDE (e.g. WebStorm) recognize the methods of the libs.

Now create a file, say `<your-project-root>/src/filterFilesWithExtensions.test`:

```javascript
const expect = require('chai').expect;
const filterFilesWithExtensions = require('./filterFilesWithExtensions');

describe('filterFilesWithExtensions', function () {
    it('should return files with given extensions', function () {
        const changeset = ['src/main/a/b/c/Main.java', 'src/main/a/b/c/Dockerfile', 'src/main/a/b/c/Main.js','src/abc.java'];
        const extensions = ['java', 'js'];

        expect(filterFilesWithExtensions(changeset, extensions)).to.deep.equal([
            'src/main/a/b/c/Main.java', 'src/main/a/b/c/Main.js', 'src/abc.java'
        ]);
    });
});
```

To run it, I suggest adding a script to your `package.json`:

```json
  "scripts": {
    "start": ...,
    "test": "mocha src/**/*.test.js"
  },
```

And using it like:

```shell
npm test
```
