module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      pink: {
        DEFAULT: '#FBD5D5',
      },
      red: {
        DEFAULT: '#C1170B',
      },
      white: {
        DEFAULT: '#FFFFFF',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
