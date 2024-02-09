module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:perfectionist/recommended-natural',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'perfectionist'],
  rules: {
    'perfectionist/sort-array-includes': [
      'error',
      {
        order: 'asc',
        'spread-last': true,
        type: 'natural',
      },
    ],
    'perfectionist/sort-imports': [
      'error',
      {
        'custom-groups': {
          value: {
            express: ['express', 'express-*'],
          },
        },
        groups: [
          'type',
          'express',
          ['builtin', 'external'],
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'side-effect',
          'style',
          'object',
          'unknown',
        ],
        'internal-pattern': ['@/config/**', '@/routes/**'],
        'newlines-between': 'always',
        order: 'asc',
        type: 'natural',
      },
    ],
  },
};
