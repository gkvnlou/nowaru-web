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
					secondary: "#db2777",
					accent: "#f59e0b",
					neutral: "#6b7280",
					"base-100": "#ffffff",
					info: "#67e8f9",
					success: "#6ee7b7",
					warning: "#f97316",
					error: "#be123c",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
