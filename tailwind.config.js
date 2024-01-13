/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{html,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'space-cadet' : '#2B2A4C',
        'cornell-red' : '#B31312',
        'old-rose' : '#D17B78',
        'dark-seashell' : '#EEE2DE',
        'light-seashell' : '#FFF4EC'
      },
      screens: {
        'xs': '330px',
      },
      backgroundImage: theme => ({
        'lightHome': "url('../img/websiteLIGHT4k.png')",
        'darkHome': "url('../img/websiteDARK4k.png')",
        'lightAbout': "url('../img/website2LIGHT4k.png')",
        'darkAbout': "url('../img/website2DARK4k.png')",
        'lightProjects': "url('../img/website3LIGHT4k.png')",
        'darkProjects': "url('../img/website3DARK4k.png')",
      }),
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
      },
      animation: {
        typing: "typing 1.5s steps(60) alternate"
      },
    },
  },
  plugins: [],
}
