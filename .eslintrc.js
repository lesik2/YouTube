// eslint-disable-next-line no-undef
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'react/react-in-jsx-scope': 0,
        'no-debugger': 'off',
        'no-console': 'warn',
        '@typescript-eslint/no-explicit-any': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-use-before-define': 'off',
        'max-len': ['warn', { code: 120 }],
        'react/jsx-props-no-spreading': 'off',
    },
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
