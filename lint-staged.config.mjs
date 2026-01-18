const config = {
  "*.{ts,tsx,js,jsx,mjs}": ["eslint --fix", "prettier --write"],
  "*.{json,md,css}": ["prettier --write"],
};

export default config;
