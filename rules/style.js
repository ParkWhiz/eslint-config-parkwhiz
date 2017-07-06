module.exports = {
  rules: {
    // enforce spacing inside array brackets
    // http://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': ['error', 'never'],

    // enforce spacing inside single-line blocks
    // http://eslint.org/docs/rules/block-spacing
    'block-spacing': ['error', 'always'],

    // enforce one true brace style
    // http://eslint.org/docs/rules/brace-style
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // require camel case names
    // http://eslint.org/docs/rules/brace-style
    'camelcase': ['error', { properties: 'never' }],

    	
    // enforce or disallow capitalization of the first letter of a comment
    // http://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': 'off',

    // require trailing commas in multiline object literals
    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],

    // enforce spacing before and after comma
    // http://eslint.org/docs/rules/comma-spacing
    'comma-spacing': ['error', { before: false, after: true }],

    // enforce one true comma style
    // http://eslint.org/docs/rules/comma-style
    'comma-style': ['error', 'last'],

    // disallow padding inside computed properties
    // http://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': ['error', 'never'],

    // enforces consistent naming when capturing the current execution context
    // http://eslint.org/docs/rules/consistent-this
    'consistent-this': 'off',

    // enforce newline at the end of file, with no multiple empty lines
    // http://eslint.org/docs/rules/eol-last
    'eol-last': ['error', 'always'],

    // enforce spacing between functions and their invocations
    // http://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],

    // requires function names to match the name of the variable or property to which they are assigned
    // http://eslint.org/docs/rules/func-name-matching
    'func-name-matching': ['off', 'always', {
      includeCommonJSModuleExports: false
    }],

    // require function expressions to have a name
    // http://eslint.org/docs/rules/func-names
    'func-names': 'warn',

    // enforces use of function declarations or expressions
    // http://eslint.org/docs/rules/func-style
    'func-style': ['off', 'expression'],

    // Blacklist certain identifiers to prevent them being used
    // http://eslint.org/docs/rules/id-blacklist
    'id-blacklist': 'off',

    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    // http://eslint.org/docs/rules/id-length
    'id-length': 'off',

    // require identifiers to match the provided regular expression
    // http://eslint.org/docs/rules/id-match
    'id-match': 'off',

    // this option sets a specific tab width for your code
    // http://eslint.org/docs/rules/indent
    'indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: {
        var: 2,
        let: 2,
        const: 3,
      },
      outerIIFEBody: 1,
      // MemberExpression: null,
      CallExpression: {
        arguments: 'first',
      },
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      }
    }],

    // specify whether double or single quotes should be used in JSX attributes
    // http://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['error', 'prefer-double'],

    // enforces spacing between keys and values in object literal properties
    // http://eslint.org/docs/rules/key-spacing
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // require a space before & after certain keywords
    // http://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }],

    // enforce position of line comments
    // http://eslint.org/docs/rules/line-comment-position
    'line-comment-position': ['off', {
      position: 'above',
      ignorePattern: '',
      applyDefaultPatterns: true,
    }],

    // disallow mixed 'LF' and 'CRLF' as linebreaks
    // http://eslint.org/docs/rules/linebreak-style
    'linebreak-style': ['error', 'unix'],

    // enforces empty lines around comments
    // http://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment': 'off',

    // require or disallow newlines around directives
    // http://eslint.org/docs/rules/lines-around-directive
    'lines-around-directive': ['error', {
      before: 'always',
      after: 'always',
    }],

    // specify the maximum depth that blocks can be nested
    // http://eslint.org/docs/rules/max-depth
    'max-depth': ['error', 4],

    // specify the maximum length of a line in your program
    // http://eslint.org/docs/rules/max-len
    'max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // specify the max number of lines in a file
    // http://eslint.org/docs/rules/max-lines
    'max-lines': ['off', {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    }],

    // specify the maximum depth callbacks can be nested
    // http://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': ['error', 3],

    // limits the number of parameters that can be used in the function declaration.
    // http://eslint.org/docs/rules/max-params
    'max-params': ['off', 3],

    // restrict the number of statements per line
    // http://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': ['off', { max: 1 }],

    // specify the maximum number of statement allowed in a function
    // http://eslint.org/docs/rules/max-statements
    'max-statements': ['off', 10],

    // require multiline ternary
    // http://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': ['off', 'never'],

    // require a capital letter for constructors
    // http://eslint.org/docs/rules/new-cap
    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
    }],

    // disallow the omission of parentheses when invoking a constructor with no arguments
    // http://eslint.org/docs/rules/new-parens
    'new-parens': 'error',

    // allow/disallow an empty newline after var statement
    // http://eslint.org/docs/rules/newline-after-var
    'newline-after-var': 'off',

    // require an empty line before return statements
    // http://eslint.org/docs/rules/newline-before-return
    'newline-before-return': 'off',

    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    // http://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // disallow use of the Array constructor
    // http://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 'error',

    // disallow use of bitwise operators
    // http://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'error',

    // disallow use of the continue statement
    // http://eslint.org/docs/rules/no-continue
    'no-continue': 'error',

    // disallow comments inline after code
    // http://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 'off',

    // disallow if as the only statement in an else block
    // http://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',

    // disallow un-paren'd mixes of different operators
    // http://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': ['error', {
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: true,
    }],

    // disallow mixed spaces and tabs for indentation
    // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 'error',

    // disallow multiple empty lines and only one newline at the end
    // http://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],

    // disallow negated conditions
    // http://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'off',

    // disallow nested ternary expressions
    // http://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'error',

    // disallow use of the Object constructor
    // http://eslint.org/docs/rules/no-new-object
    'no-new-object': 'error',

    // disallow use of unary operators, ++ and --
    // http://eslint.org/docs/rules/no-plusplus
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // disallow certain syntax forms
    // http://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],

    // disallow tab characters entirely
    // http://eslint.org/docs/rules/no-tabs
    'no-tabs': 'error',

    // disallow the use of ternary operators
    // http://eslint.org/docs/rules/no-ternary
    'no-ternary': 'off',

    // disallow trailing whitespace at the end of lines
    // http://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 'error',

    // disallow dangling underscores in identifiers
    // http://eslint.org/docs/rules/no-underscore-dangle 
    'no-underscore-dangle': ['off', { allowAfterThis: false }],

    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // http://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // disallow whitespace before properties
    // http://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'error',

    // enforce line breaks between braces
    // http://eslint.org/docs/rules/object-curly-newline
    // TODO: enable once https://github.com/eslint/eslint/issues/6488 is resolved
    'object-curly-newline': ['off', {
      ObjectExpression: { minProperties: 0, multiline: true },
      ObjectPattern: { minProperties: 0, multiline: true }
    }],

    // require padding inside curly braces
    // http://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': ['error', 'always'],

    // enforce "same line" or "multiple line" on object properties.
    // http://eslint.org/docs/rules/object-property-newline
    'object-property-newline': ['error', {
      allowMultiplePropertiesPerLine: true,
    }],

    // require a newline around variable declaration
    // http://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': ['error', 'always'],

    // allow just one var statement per function
    // http://eslint.org/docs/rules/one-var
    'one-var': ['error', 'never'],

    // require assignment operator shorthand where possible or prohibit it entirely
    // http://eslint.org/docs/rules/operator-assignment
    'operator-assignment': ['error', 'always'],

    // enforce operators to be placed before or after line breaks
    // http://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': 'off',

    // enforce padding within blocks
    // http://eslint.org/docs/rules/padded-blocks
    'padded-blocks': ['error', 'never'],

    // require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props.html
    'quote-props': ['error', 'consistent-as-needed', { keywords: false }],

    // specify whether double or single quotes should be used
    // http://eslint.org/docs/rules/quotes
    'quotes': ['error', 'single', { avoidEscape: true }],

    // do not require jsdoc
    // http://eslint.org/docs/rules/require-jsdoc
    'require-jsdoc': 'off',

    // enforce spacing before and after semicolons
    // http://eslint.org/docs/rules/semi-spacing
    'semi-spacing': ['error', { before: false, after: true }],

    // require or disallow use of semicolons instead of ASI
    // http://eslint.org/docs/rules/semi
    'semi': ['error', 'always'],

    // requires object keys to be sorted
    // http://eslint.org/docs/rules/sort-keys
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

    // sort variables within the same declaration block
    // http://eslint.org/docs/rules/sort-vars
    'sort-vars': 'off',

    // require or disallow space before blocks
    // http://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': 'error',

    // require or disallow space before function opening parenthesis
    // http://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],

    // require or disallow spaces inside parentheses
    // http://eslint.org/docs/rules/space-in-parens
    'space-in-parens': ['error', 'never'],

    // require spaces around operators
    // http://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 'error',

    // Require or disallow spaces before/after unary operators
    // http://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
      overrides: {},
    }],

    // require or disallow a space immediately following the // or /* in a comment
    // http://eslint.org/docs/rules/spaced-comment
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
        balanced: false,
      }
    }],

    // require or disallow the Unicode Byte Order Mark
    // http://eslint.org/docs/rules/unicode-bom
    'unicode-bom': ['error', 'never'],

    // require regex literals to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-regex
    'wrap-regex': 'off'
  }
};
