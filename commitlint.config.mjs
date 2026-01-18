const config = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "chore", "docs", "refactor", "test"],
    ],
    "subject-case": [2, "always", "lower-case"],
  },
};

export default config;
