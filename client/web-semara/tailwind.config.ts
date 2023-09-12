import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'primary-blue': '#318EFB',
				'secondary-blue': '#19418E',
				'bg-white': '#F8F9FC',
				'bg-secondary': '#4386EA',
				'text-white': '#F4F7FA',
				'primary-black': '#21262C',
			},
			keyframes: {
				radiate: {
					to: {
						transform: 'scale(1.5)',
						opacity: '0',
					},
				},
			},
		},
	},
	plugins: [],
};
export default config;
