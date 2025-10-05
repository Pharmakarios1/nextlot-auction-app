// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import * as tseslint from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import jsxA11y from 'eslint-plugin-jsx-a11y'

import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['node_modules', 'build', 'dist'],
    languageOptions: {
      parser, // tell ESLint to use the TS parser
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      prettier,
      'jsx-a11y': jsxA11y,
      '@typescript-eslint': tseslint,
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended, // use TS recommended configs
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      'plugin:jsx-a11y/recommended',
      'plugin:prettier/recommended',
    ],
    rules: {
      'no-unused-vars': 'off', // turn off base rule
      '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'prettier/prettier': ['error'],
    },
  },
])
