# Contributing

## Where did the majority of .scss files get @import '~' from?

It is located in `config/webpack.common.js`.

```
  resolve: {
    alias: {
      // @import "~" means @import "src/styles/styles.scss"
      "~": path.resolve(__dirname, "../src/styles/styles.scss"),
    }
  }
```

## Where is utils located? I see files that import from "utils/..."?

It is located in `config/webpack.common.js`.

```
  resolve: {
    alias: {
      // @import "~" means @import "src/styles/styles.scss"
      "~": path.resolve(__dirname, "../src/styles/styles.scss"),
      utils: path.resolve(__dirname, "../src/utils")
    }
  }
```

However, note that to get ESLint to not complain about being unable to resolve the `utils` module,
`eslint-import-resolver-webpack` needs to be installed in dev dependencies and this block of code
needs to be added to `.eslintrc`.

```
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "./config/webpack.common.js"
      }
    }
  },
```
