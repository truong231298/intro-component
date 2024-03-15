/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Red': 'hsl(0, 100%, 74%)',
        'Green': 'hsl(154, 59%, 51%)',
        'Blue': 'hsl(248, 32%, 49%)',
        'DarkBlue': 'hsl(249, 10%, 26%)',
        'GrayishBlue': 'hsl(246, 25%, 77%)'
      },
      backgroundImage:{
        "bg-intro-desktop": "url('/images/bg-intro-desktop.png')",
        "bg-intro-mobile": "url('/images/bg-intro-mobile.png')"
      }
    },
  },
  plugins: [],
}