module.exports = {
  env: {
    node: true
  },

  rules: {
    // enforce return after a callback
    // http://eslint.org/docs/rules/callback-return
    'callback-return': 'error',

    // require all requires be top-level
    // http://eslint.org/docs/rules/global-require
    'global-require': 'error',

    // enforces error handling in callbacks (node environment)
    // http://eslint.org/docs/rules/handle-callback-err
    'handle-callback-err': 'off',

    // disallow mixing regular variable and require declarations
    // http://eslint.org/docs/rules/no-mixed-requires
    'no-mixed-requires': 'error',

    // disallow use of new operator with the require function
    // http://eslint.org/docs/rules/no-new-require
    'no-new-require': 'error',

    // disallow string concatenation with __dirname and __filename
    // http://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'error',

    // disallow use of process.env
    // http://eslint.org/docs/rules/no-process-env
    'no-process-env': 'off',

    // disallow process.exit()
    // http://eslint.org/docs/rules/no-process-exit
    'no-process-exit': 'off',

    // restrict usage of specified node modules
    // http://eslint.org/docs/rules/no-restricted-modules
    'no-restricted-modules': 'off',

    // disallow use of synchronous methods (off by default)
    // http://eslint.org/docs/rules/no-sync
    'no-sync': 'off',
  }
};
