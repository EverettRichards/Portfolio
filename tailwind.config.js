module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        'slate-950': '#020617',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}