module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  env: {
    es6: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    "prefer-const": "error",
    "no-console": "warn",
    "no-unused-vars": [
      "error",
      {
        ignoreRestSiblings: true
      }
    ],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always"
      }
    ],
    "no-underscore-dangle": [
      "error",
      {
        allow: ["_id"],
        allowAfterThis: true
      }
    ]
  }
};
