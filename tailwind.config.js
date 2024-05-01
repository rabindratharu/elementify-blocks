module.exports = {
  content: [ './assets/src/js/**/*.@(js|jsx)' ],
  theme: {
		extend: {
			colors: {
				wpcolor: '#2271b1',
				wphovercolor: '#135e96',
				wphoverbgcolor: '#2271b117',
				wpcolorfaded: '#2271b120',
			},
			fontFamily: {
				inter: [ '"Inter"', 'sans-serif' ],
			},
		},
	},
	variants: {
		extend: {},
		scrollbar: [ 'rounded' ],
	},
	plugins: [ require( '@tailwindcss/forms' ) ],
}
