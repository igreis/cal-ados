
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}", // Verifica arquivos .ts e .tsx também
  ],
  theme: {
    extend: {
      screens: {
        'h850': { 'raw': '(min-height: 850px)' }, // Define breakpoint para altura
      },
    },
  },
  plugins: [],
};

