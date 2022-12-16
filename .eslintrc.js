module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': 'eslint:recommended',
	'overrides': [
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		// allow async-await
		'generator-star-spacing': 'off',
		// allow paren-less arrow functions
		'one-var': 'off',
		'no-void': 'off',
		'multiline-ternary': 'off',

		'prefer-promise-reject-errors': 'off',

		'max-len': [
			'error',
			{
				code: 160
			}
		],
		'no-tabs': 'off',
		'comma-dangle': [
			'error',
			'never'
		],
		'no-console': 'off',
		'arrow-parens': [
			'error',
			'as-needed'
		],
		'operator-linebreak': [
			'error',
			'after'
		],
		'no-trailing-spaces': [
			'error',
			{
				skipBlankLines: true
			}
		]
	}
}
