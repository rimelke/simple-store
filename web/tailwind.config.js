module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				neon: {
					DEFAULT: '#00ffbf',
					dark: '#00DFA7'
				}
			},
			boxShadow: {
				underline: '0 -5px rgba(0, 255, 191, .7) inset',
				offset: '2px 2px rgba(0, 255, 191, .7)',
				'offset-black': '2px 2px rgb(0, 0, 0)'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
/*
#008060
#009F77
#00BF8F
#00DFA7
#00ffbf
#22FFC8
#44FFD0
#66FFD9
#88FFE1
#AAFFEA
#CCFFF2
*/
