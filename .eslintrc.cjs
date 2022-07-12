module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['Airbnb', 'plugin:@typescript-eslint/recommended', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['svelte3', '@typescript-eslint'],
	settings: {
		'import/resolver': {
			typescript: {} // this loads <rootdir>/tsconfig.json to eslint
		}
	},
	rules: {
		'no-tabs': 0,
		indent: [2, 'tab'],
		'@typescript-eslint/no-var-requires': 0,
		'no-plusplus': 0
	}
};
