import js from '@eslint/js';

export default [
  js.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        console: 'readonly',
      },
    },

    rules: {
      quotes: ['error', 'single'],
      'no-console': 'warn',
      'no-unused-vars': 'error',
      curly: ['error', 'all'],
    },
  },
];
