/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Garante que o Tailwind CSS será aplicado a todas as páginas e componentes no diretório `src/`
  ],
  theme: {
    extend: {}, // Você pode personalizar aqui o tema de cores, fontes, etc.
  },
  plugins: [],
};
