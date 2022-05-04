module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#212121",
          grey: "#e0e0e0",
          light: "#fff"
        },
        secondary: {
          default: "#ff3d00",
          light: "#ff6d00",
        },
        text_color: {
          default: "#212121",
          light: "#fff"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
