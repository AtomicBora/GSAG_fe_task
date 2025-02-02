import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import prettierConfig from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';

export default tseslint.config(
	js.configs.recommended,
	prettierConfig,
	{ ignores: ['dist'] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 'latest',
			globals: globals.browser,
		},
		plugins: {
			react: reactRecommended.plugins.react,
			'react-hooks': reactHooks,
			'jsx-a11y': jsxA11y,
			'@typescript-eslint': ts,
			'react-refresh': reactRefresh,
			import: importPlugin,
			prettier: prettier,
		},
		rules: {
			...js.configs.recommended.rules,
			...ts.configs['recommended'].rules,
			...reactRecommended.rules,
			...reactHooks.configs.recommended.rules,
			...jsxA11y.configs.recommended.rules,
			'react/react-in-jsx-scope': 'off',
			'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
			'import/extensions': [
				'error',
				'ignorePackages',
				{
					js: 'never',
					jsx: 'never',
					ts: 'never',
					tsx: 'never',
				},
			],
			'prettier/prettier': 'error',
		},
		settings: {
			'import/resolver': {
				typescript: { alwaysTryTypes: true, project: './tsconfig.json' },
			},
			react: {
				version: 'detect',
			},
		},
	}
);
