module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{js,css,html,png,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};