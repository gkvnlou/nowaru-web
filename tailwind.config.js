/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#0077ff",
					secondary: "#003377",
					accent: "#ff0077",
					neutral: "#0077ff",
					"base-100": "#fefefe",
					info: "#0077ff",
					success: "#34d399",
					warning: "#f97316",
					error: "#dc2626",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
