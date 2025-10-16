// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export const content = [
	"./index.html", // Si usas clases aquí
	"./src/**/*.{js,ts,jsx,tsx,html}", // Para archivos en la carpeta src
	// o si es una estructura más plana:
	// "./**/*.{js,html}",
];
export const theme = {
	extend: {},
};
export const plugins = [];
