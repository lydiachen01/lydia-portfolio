/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				grass_green: '#2FBF71',
				light_green: '#8CD867',
				red_orange: '#FF4242',
			},
			animation: {
				slide: 'slide 0.3s ease-out',
				scrollText: 'scrollText 10s linear infinite',
			},
			keyframes: {
				slide: {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '0.5' }
				},
				scrollText: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
			}
		},
	},
	plugins: [],
}
