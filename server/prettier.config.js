module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  parser: "@typescript-eslint/parser",
  
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    project: ['./tsconfig.json']
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": [
      1,
      {
        trailingComma: "es5",
        semi: true,
      },
    ],
    "no-console": 0,
  },
};
