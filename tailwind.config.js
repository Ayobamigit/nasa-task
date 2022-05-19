const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      'white': '#ffffff',
      'default-font':'#FFB703',
      'link-font':'#551A8B',
      'primary-font':'#8ECAE6',
    },
    extend: {},
  },
  plugins: [],
}
