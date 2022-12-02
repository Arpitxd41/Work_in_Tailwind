/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        ptmdark: '#0E4A8A',
        ptmlight: '#38C1F4'
      }
    },
  },
  plugins: [],
}