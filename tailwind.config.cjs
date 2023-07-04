/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"main-blue": "#187CD4",
				"blue-light": "#6393C1",
				"blue-dark": "#0474BC",
				dark: "#222",
			},
			fontSize: {
				sm: "clamp(16px, 4.6vw, 18px)",
				md: "clamp(20px, 6vw, 24px)",
				lg: "clamp(24px, 7.3vw, 32px)",
			},
			width: {
				"clamp-logo": "clamp(120px, 20vw, 180px)",
				"clamp-tiktok-img": "clamp(160px, 55vw, 200px)",
				"clamp-instagram-img": "clamp(80px, 45vw, 180px);",
				"clamp-facebook-img": "clamp(200px, 70vw, 250px);",
			},
		},
	},
	plugins: [],
};
