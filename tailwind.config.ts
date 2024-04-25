import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontSize: {
				xxxl: ['10rem', '8rem'],
			},
			fontFamily: {
				robotoMono: ['Roboto Mono', 'monospace'],
			},
		},
	},
};
export default config;
