const config = {
  "*.{js,jsx,mjs}": ["eslint --fix", "prettier --write"],
  "*.{ts,tsx}": ["eslint --fix", "prettier --write", "tsc --noEmit"],

  "*.{json,md,css}": ["prettier --write"],
};

export default config;
