export default {
  plugins: [],
    theme: {
    extend: {
      fontFamily: {
        'display':['Poppins', 'sans-serif']
      }
    },
  },
  content: ["./index.html",'./src/**/*.{svelte,js,ts}'], // for unused CSS
  variants: {
    extend: {},
  },
  darkMode: false, // or 'media' or 'class'
}