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
        '3xl': '1720px',
      },
      backgroundImage: theme => ({
        'lightHome': "url('https://raw.githubusercontent.com/abelureste/abelureste.github.io/main/docs/img/websiteLIGHT4k.png')",
        'darkHome': "url('https://raw.githubusercontent.com/abelureste/abelureste.github.io/main/docs/img/websiteDARK4k.png')",
        'lightAbout': "url('https://raw.githubusercontent.com/abelureste/abelureste.github.io/main/docs/img/website2LIGHT4k.png')",
        'darkAbout': "url('https://raw.githubusercontent.com/abelureste/abelureste.github.io/main/docs/img/website2DARK4k.png')",
        'lightProjects': "url('https://raw.githubusercontent.com/abelureste/abelureste.github.io/main/docs/img/website3LIGHT4k.png')",
        'darkProjects': "url('https://raw.githubusercontent.com/abelureste/abelureste.github.io/main/docs/img/website3DARK4k.png')",
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
