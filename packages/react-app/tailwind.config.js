const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
      safelist: ["headerBackground"],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        headerBackground: "url('/src/assets/Header_only_bg.svg')",
        ringsBackground: "url('/src/assets/RotatingRings.svg')",
      },
      colors: {
        orange: colors.orange,
        green: {
          "050": "#6dc5a0",
          "dark-green": "#337062",
          teal: "#2CAE92",
          header: "#6AC59F",
          "light-green": "#E2F3EC",
          imgBg: "#9ED5AA",
          skyblue: "#39d0d8",
          posblue: "#207191",
        },
        purple: {
          overlay: "#240871",
          imgText: "#8C65F7",
        },
        gray: {
          "050": "#FFFFFF",
          1000: "#343a39",
        },
        red: {
          bloodred: "#ea1e5047",
          soldout: "#EB1E50",
        },
        yellow: {
          pos: "#FFE171",
          poslight: "#FFF8DB",
        },
      },
    },
    fontFamily: {
      spacemono: ["Space Mono"],
      librefranklin: ["Libre Franklin"],
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      intro: "1656px",
      "intro-mobile": "450px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
