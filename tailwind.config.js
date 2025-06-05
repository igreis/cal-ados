
export default {
  darkMode: 'class',
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}", // Verifica arquivos .ts e .tsx também
  ],
  theme: {
    extend: {
      screens: {
        'h750': { 'raw': '(min-height: 750px)' }, // Define breakpoint para altura
      },
    },
  },
  plugins: [],
};

