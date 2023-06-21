const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
	// purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#152d47',
				'primary-hover': '#1c3d74',
				'primary-grey': '#999999',
				'primary-blue': '#1c3d74',
				'primary-yellow': '#f3b817',
				'primary-strong-yellow': '#d3a117',
				'primary-normal-yellow': '#f3b817',
				'primary-strong-blue': '#152d47'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
});
