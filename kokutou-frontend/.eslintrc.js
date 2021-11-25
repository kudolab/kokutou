module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'airbnb',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'settings': {
    'import/resolver': {
      typescript: {},
    },
  },
  'rules': {
    'indent': ['error', 2],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'func-names': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': ['error', {
      'namedComponents': 'function-declaration',
      'unnamedComponents': 'arrow-function',
    }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/extensions': 'off',
  },
};
