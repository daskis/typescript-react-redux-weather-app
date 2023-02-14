/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "md_clear": "url('./assets/backgrounds/md_clear.jpg')",
        "mn_clear": "url('./assets/backgrounds/mn_clear.jpg')",
        "d_clear": "url('./assets/backgrounds/d_clear.jpg')",
        "n_clear": "url('./assets/backgrounds/n_clear.jpg')",
        "d_cloud": "url('./assets/backgrounds/d_cloud.jpg')",
        "n_cloud": "url('./assets/backgrounds/n_cloud.jpg')",
      },
      screens: {
        "xs": "360px",
        "xs+": "430px"
      }
    },
  },
  plugins: [require('tailwind-hamburgers')],

}