/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container:{
      center:true,
    },
    backgroundImage:{
      'photo' :"url('/public/cart.jpg')",
      'delivery' : "url('/public/pngtree.jpg')"
    }
  },
  plugins: [],
}