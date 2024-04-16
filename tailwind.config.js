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
					primary: "#2563eb",
					secondary: "#7dd3fc",
					accent: "#db2777",
					neutral: "#6b7280",
					"base-100": "#ffffff",
					info: "#06b6d4",
					success: "#34d399",
					warning: "#f59e0b",
					error: "#be123c",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
