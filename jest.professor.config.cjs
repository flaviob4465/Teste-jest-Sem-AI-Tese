/** @type {import('jest').Config} */
const base = require("./jest.config.cjs");

module.exports = {
  ...base,
  testMatch: ["<rootDir>/professor/**/*.test.jsx"],
};
