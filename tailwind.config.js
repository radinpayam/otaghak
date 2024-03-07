/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
      'mob': {'min': '0px', 'max': '640px'},
      },
      fontFamily: {
        "iran-sans": "iran-sans"
      }
    },
  },
  plugins: [],
};
