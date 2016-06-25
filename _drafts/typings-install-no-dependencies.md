You have an apparently well-defined `typings.json` file in your current directory/package, such as:

```json
{
  "ambientDevDependencies": {
    "angular-protractor": "registry:dt/angular-protractor#1.5.0+20160425143459",
    "jasmine": "registry:dt/jasmine#2.2.0+20160412134438",
    "selenium-webdriver": "registry:dt/selenium-webdriver#2.44.0+20160317120654"
  },
  "ambientDependencies": {
    "es6-shim": "registry:dt/es6-shim#0.31.2+20160317120654"
  }
}
```


But when you try to `typings install` them you get a `No dependencies` *message* (or should we say *error*?):

```bash
$ typings install

└── (No dependencies)
```

# Solution

> Rename:
> 
> - `ambientDevDependencies` to `globalDevDependencies`
> - `ambientDependencies` to `globalDependencies`

In our example `typings.json` file above, the result would be:

```json
{
  "globalDevDependencies": {
    "angular-protractor": "registry:dt/angular-protractor#1.5.0+20160425143459",
    "jasmine": "registry:dt/jasmine#2.2.0+20160412134438",
    "selenium-webdriver": "registry:dt/selenium-webdriver#2.44.0+20160317120654"
  },
  "globalDependencies": {
    "es6-shim": "registry:dt/es6-shim#0.31.2+20160317120654"
  }
}
```

Then, at the console:

```bash
$ typings install

├── es6-shim (global)
├── angular-protractor (global dev)
├── jasmine (global dev)
└── selenium-webdriver (global dev)
```

# Reason

See https://github.com/typings/typings/releases/tag/v1.0.0:

> Many breaking changes (see https://github.com/typings/core/releases/tag/v1.0.0)
> - Renamed `ambient` to `global`
> - ...

When `typings` was updated from version `0.x` to `1.x`, the properties were renamed, as you can see in the changelog above.

As a consequence, your file that would be fine for version `0.x` is not so cool at `1.x`.

And that's it.
