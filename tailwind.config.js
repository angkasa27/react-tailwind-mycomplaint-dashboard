module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#D10606',
      },

      fontFamily: {
        nunito: ['Nunito'],
      },
      keyframes: {
        modalDown: {
          '0%': { transform: 'translate(-50%, -40%)', opacity: '0%' },
          '100%': { transform: 'translate(-50%, -50%)', opacity: '100%' },
        },
      },
      animation: {
        modalDown: 'modalDown .3s ease-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
