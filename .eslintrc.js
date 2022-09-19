module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:react/recommended',
    // 'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    // 'plugin:react/jsx-runtime',
  ],
  rules: {
    'arrow-parens': 'warn',
    'import/order': [
      'warn',
      {
        groups: ['external', 'builtin', 'internal', ['parent', 'sibling', 'index']],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    'no-console': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    window: true,
  },
}
