module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
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
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },

  },
  variants: {
    extend: {
      display: ['dark'],
    },
  },
  plugins: [],
}
