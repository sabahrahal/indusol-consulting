/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Oswald", ...defaultTheme.fontFamily.sans]
			},
			maxWidth: {
				'sm-custom': '540px', 
				'md-custom': '720px',
				'lg-custom': '960px',
				'xl-custom': '1140px',
				'2xl-custom': '1320px',
			},
			container: {
				center: true,
			}
		},
	},
	plugins: [],
}
