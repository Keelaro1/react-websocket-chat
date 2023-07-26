module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: __dirname,
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	plugins: ['@typescript-eslint', 'react', 'unused-imports', 'react-hooks'],
	rules: {
		quotes: ['error', 'single'],
		'@typescript-eslint/adjacent-overload-signatures': 'off',
		'@typescript-eslint/array-type': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/member-ordering': 'off',
		'@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'as' }],
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-for-in-array': 'off',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-magic-numbers': 'off',
		'@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],
		'@typescript-eslint/no-parameter-properties': 'off',
		'@typescript-eslint/no-require-imports': 'error',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/triple-slash-reference': ['error', { path: 'never' }],
		'@typescript-eslint/prefer-for-of': 'warn',
		'@typescript-eslint/prefer-function-type': 'off',
		'@typescript-eslint/prefer-interface': 'off',
		'@typescript-eslint/prefer-namespace-keyword': 'error',
		'@typescript-eslint/promise-function-async': 'off',
		'@typescript-eslint/restrict-plus-operands': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/typedef': [
			'error',
			{ propertyDeclaration: true, arrowParameter: false, memberVariableDeclaration: false, parameter: false },
		],
		'@typescript-eslint/unified-signatures': 'error',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/ban-types': [
			'error',
			{
				types: {
					Function: 'Use () => void instead',
				},
			},
		],
		'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
		'spaced-comment': 'off',
		'capitalized-comments': 'off',
		'comma-dangle': 'off',
		complexity: 'off',
		curly: 'error',
		'default-case': 'off',
		'dot-notation': 'off',
		'eol-last': 'off',
		eqeqeq: 'error',
		'guard-for-in': 'error',
		indent: 'off',
		'linebreak-style': 'off',
		'max-classes-per-file': 'off',
		'max-lines': 'off',
		'newline-per-chained-call': 'off',
		'no-bitwise': 'error',
		'no-caller': 'error',
		'no-cond-assign': 'error',
		'no-debugger': 'error',
		'no-duplicate-case': 'error',
		'no-empty': 'off',
		'no-empty-functions': 'off',
		'no-eval': 'error',
		'no-extra-semi': 'off',
		'no-fallthrough': 'off',
		'no-invalid-this': 'off',
		'no-irregular-whitespace': 'off',
		'no-magic-numbers': 'off',
		'no-new-wrappers': 'error',
		'no-redeclare': 'off',
		'@typescript-eslint/no-redeclare': ['error'],
		'no-shadow': 'off',
		'no-throw-literal': 'error',
		'no-unsafe-finally': 'error',
		'no-unused-expressions': [
			'error',
			{
				allowShortCircuit: true,
				allowTernary: true,
				allowTaggedTemplates: true,
			},
		],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{ vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
		],
		'no-unused-labels': 'warn',
		'no-var': 'error',
		'no-void': 'off',
		'object-shorthand': 'error',
		'one-var': ['error', 'never'],
		'prefer-const': 'error',
		radix: 'warn',
		'sort-keys': 'off',
		'use-isnan': 'error',
		'no-new-func': 'error',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
	},
};
