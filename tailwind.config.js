module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      minHeight: {
        '(screen)': 'calc(100vh - 7rem)'
      },
      colors: {
        transparent: 'transparent',
        current: 'current',
        dark: '#0A0001',
        grey: '#381E21',
        main: '#640211',
        pink: '#F8D4DA',
        white: '#FFF6F7'
      },
      backgroundImage: {
        'mainBackground': "url('assets/img/Background.png')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
