module.exports = {
  content: [
    './*.html',
    './public/*.{html,js}',
    './src/**/*.{html,js}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        "custom-purple": "#5267DF",
        "custom-red": "#FA5959",
        "custom-blue": "#242A45",
        "custom-grey": "#9194A2",
        "custom-white": "#f7f7f7",
        "custom-bg-dark": "#272830",
        "custom-bg-dark1": "#2b2c34",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },

  },
  variants: {
    extend: {
      display: ['dark'],
    },
  },
  plugins: [],
}
