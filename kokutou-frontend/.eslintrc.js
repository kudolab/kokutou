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
    'rules': {
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
    },
};
