module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "lines-between-class-members": ["error", "always"],
    "vue/html-self-closing": [
      "error",
      {
        // html close auto
        html: {
          void: "always", // must always otherwise prettier will conflict
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "vue/custom-event-name-casing": [
      "error",
      "kebab-case",
      {
        ignores: [],
      },
    ],
    "vue/component-name-in-template-casing": [
      "error",
      "kebab-case",
      {
        registeredComponentsOnly: false,
        ignores: ["/^router-.*/"],
      },
    ],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "function",
      }, // 函数前填充空行
      {
        blankLine: "always",
        prev: "*",
        next: "export",
      }, // export前填充空行
      {
        blankLine: "always",
        prev: "*",
        next: "block",
      }, // {} 前换行
      {
        blankLine: "always",
        prev: "*",
        next: "block-like",
      }, // {} 前换行
      {
        blankLine: "always",
        prev: "*",
        next: "expression",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "multiline-block-like",
      }, // 多类{}前填充空行
      {
        blankLine: "always",
        prev: "multiline-let",
        next: "*",
      }, // 多个let后空行
      {
        blankLine: "always",
        prev: "multiline-const",
        next: "*",
      }, // 多个cont后空行
      {
        blankLine: "always",
        prev: "const",
        next: "*",
      }, // 多个cont后空行
    ],
    "vue/padding-line-between-blocks": ["error", "always"],
    "max-lines-per-function": [
      "error",
      {
        max: 100,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
  },
};
