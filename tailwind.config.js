const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#000842',
				'primary-hover': '#000420',
				'primary-grey': '#999999',
				'primary-blue': '#1c3d74'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
});
