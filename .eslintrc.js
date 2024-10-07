module.exports = {
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    env: {
      es6: true,
      browser: true,
      node: true,
    },
    extends: ["eslint:recommended", "next/core-web-vitals"],
  };
  