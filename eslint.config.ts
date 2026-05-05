import js from '@eslint/js';
import type { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: {
      js,
      react: pluginReact,
      'react-hooks': reactHooks as unknown as Linter,
      'jsx-a11y': jsxA11y,
      'simple-import-sort': simpleImportSort,
    },
    settings: {
      react: { version: '19' },
    },
    extends: ['js/recommended'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    ignores: [
      'dist/**',
      'src-tauri/**',
      'node_modules/**',
      'build/**',
      'eslint.config.ts',
    ],
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginReact.configs.flat['jsx-runtime'].rules,
      ...pluginReact.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'no-undef': 'warn',
      'no-console': 'warn',
      'no-duplicate-imports': 'error',
      'no-var': 'error',
      'no-useless-catch': 'warn',
      'no-nested-ternary': 'warn',
      'prefer-arrow-callback': 'warn',
      'no-restricted-syntax': [
        'error',
        'FunctionExpression',
        'FunctionDeclaration',
      ],
      'comma-dangle': ['error', 'always-multiline'],
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^@?\\w'],
            [
              '^(@|components|services|pages|features|common|utils|routes|types)(/.*|$)',
            ],
            ['^\\u0000'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^.+\\.?(css)$'],
          ],
        },
      ],
    },
  },
  tseslint.configs.recommended,
  prettier,
]);
