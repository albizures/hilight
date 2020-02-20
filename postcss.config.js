const purgecss = require('@fullhuman/postcss-purgecss');
const comments = require('postcss-discard-comments');

const plugins = [
	require('tailwindcss'),
	'autoprefixer',
	comments({ removeAll: true }),
];

if (process.env.NODE_ENV === 'production') {
	plugins.push(
		purgecss({
			content: ['./src/**/*.pug'],
			whitelist: ['md:w-1/3', 'md:w-1/2', 'md:w-1/4'],
		}),
	);
}

module.exports = {
	plugins,
};
