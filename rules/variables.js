module.exports = {
  rules: {
    // enforce or disallow variable initializations at definition
    // http://eslint.org/docs/rules/init-declarations
    'init-declarations': 'off',

    // disallow the catch clause parameter name being the same as a variable in the outer scope
    // http://eslint.org/docs/rules/no-catch-shadow
    'no-catch-shadow': 'error',

    // disallow deletion of variables
    // http://eslint.org/docs/rules/no-delete-var
    'no-delete-var': 'error',

    // disallow labels that share a name with a variable
    // http://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // disallow specific globals
    // http://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': 'off',

    // disallow shadowing of names such as arguments
    // http://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'error',

    // disallow declaration of variables already declared in the outer scope
    // http://eslint.org/docs/rules/no-shadow
    'no-shadow': 'error',

    // disallow use of undefined when initializing variables
    // http://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 'error',

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    // http://eslint.org/docs/rules/no-undef
    'no-undef': 'error',

    // disallow use of undefined variable
    // http://eslint.org/docs/rules/no-undefined
    'no-undefined': 'error',

    // disallow declaration of variables that are not used in the code
    // http://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': ['error', { vars: 'local', args: 'after-used' }],

    // disallow use of variables before they are defined
    // http://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': ['error', 'nofunc'],
  },
};
