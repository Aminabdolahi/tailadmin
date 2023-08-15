const {nextui} = require("@nextui-org/react");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors:{
        'primary':'#3C50E0',
        'dark' :'#1C2434',
        'darktext':"#DEE4EE",
        'error': '#BC1C21'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],}