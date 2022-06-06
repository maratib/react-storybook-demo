module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    debugScreens: {
      position: ["bottom", "right"],
    },
    extend: {
      colors: {
        bgBody: "#F3F5FD",
        primary: "#2960FF",
        gradient: "#4f71c6",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-debug-screens"),
  ],
};
