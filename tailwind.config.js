module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    colors: {
      pink: {
        DEFAULT: '#FBD5D5',
        dark: '#D1959B',
      },
      red: {
        dark: '#541729',
        DEFAULT: '#C1170B',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      blue: {
        DEFAULT: '#091f43',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
