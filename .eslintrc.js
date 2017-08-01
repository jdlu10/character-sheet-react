module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jquery": true
  },
  "parserOptions": {
    "sourceType": "module"
  },
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "import/no-named-as-default": 0,
    "react/forbid-prop-types": 0,
    "comma-dangle": [
      "warn",
      "never"
    ],
    "indent": [
      "warn",
      2
    ],
    "linebreak-style": [
      "warn",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    /* Advanced Rules*/
    "no-unused-expressions": "warn",
    "no-useless-concat": "warn",
    "block-scoped-var": "error",
    "consistent-return": "error",
    "import/extensions": [0]
  }
};
