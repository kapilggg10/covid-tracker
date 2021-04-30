module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "2rem",
    },
    zIndex: {
      "1000": 1000,
      "1200": 1200,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
