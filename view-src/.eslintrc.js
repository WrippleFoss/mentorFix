module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
        "ecmaVersion": 2016,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "eqeqeq": [
            "error",
            "smart"
        ],
       "camelcase": ["error", {"properties": "always"}],
      "no-console": "off",
      "no-undef": "off",
      "no-unused-vars": "off",
      "import/order": "off",

    }
};
