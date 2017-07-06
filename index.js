module.exports = {
  extends: [
    './rules/errors',
    './rules/best-practices',
    './rules/strict',
    './rules/variables',
    './rules/node',
    './rules/style',
    './rules/es6',
    './rules/react',
  ].map(require.resolve),
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    sourceType: 'module',
  },
};
