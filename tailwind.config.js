/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // These are the custom colors from your login page
      colors: {
        'rich-black': '#0D1B2A',
        'oxford-blue': '#1B263B', 
        'yinmn-blue': '#415A77',
        'silver-lake': '#778DA9',
        'platinum': '#E0E1DD'
      },
      // These are the custom fonts from your login page
      fontFamily: {
        'display': ['Georgia', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}