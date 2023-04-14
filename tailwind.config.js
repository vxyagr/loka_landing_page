/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        "custom-blue": "#152233",
        "upper-gradient": "#747620",
        "lower-gradient": "#192E6A",
        "custom-green": "#027344",
      },
      textColor: {
        "custom-blue": "#152233",
        "custom-green": "#027344",
      },
      backgroundImage: {
        "gradient-custom": "linear-gradient(30deg, var(--tw-gradient-stops))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
