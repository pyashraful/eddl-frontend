module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'cypress', 'prettier'],
  rules: {
    'import/extensions': 0,
    'react/react-in-jsx-scope': 0,
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
        ],
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
  },

  // settings: {
  //   'import/resolver': {
  //     node: {
  //       extensions: ['.js', '.tsx', '.ts', '.d.ts'],
  //     },
  //     alias: {
  //       extensions: ['.tsx', '.js', '.ts', '.scss', '.d.ts'],
  //       map: [
  //         ['@/', './src/'],
  //         ['@/components', './src/components'],
  //         ['@/pages', './src/pages'],
  //         ['@/router', './src/router'],
  //         ['@/store', './src/store'],
  //         ['@/styles', './src/styles'],
  //         ['@/types', './src/types'],
  //         ['@/utils', './src/utils'],
  //       ],
  //     },
  //   },
  // },
};
