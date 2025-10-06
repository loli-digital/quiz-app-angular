/** @type {import('tailwindcss').Config} */

module.exports = {
  // CRÍTICO: Indica a Tailwind que analice todos los archivos HTML y TS 
  // en la carpeta src/ para encontrar las clases utilizadas.
  content: [
    "./src/**/*.{html,ts}", 
    "./src/app/app.html" 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}