module.exports = {
	plugins: [
		require('autoprefixer')(),
		require('postcss-css-variables')({
			preserve: true,
		}),
	],
};
