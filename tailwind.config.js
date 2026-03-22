/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
"./app/**/*.{js,ts,jsx,tsx}",
"./components/**/*.{js,ts,jsx,tsx}",
],

theme: {
extend: {
colors: {
brand: {
50: "#f8fafc",
100: "#f1f5f9",
200: "#e2e8f0",
300: "#cbd5e1",
400: "#94a3b8",
500: "#64748b",
600: "#334155",
700: "#1e293b",
800: "#0f172a",
900: "#020617",
},
},
boxShadow: {
soft: "0 4px 20px rgba(0,0,0,0.04)",
medium: "0 8px 30px rgba(0,0,0,0.08)",
},
},
},
}
