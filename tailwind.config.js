module.exports = {
  content: [
    './src/**/*.js',
    './src/**/*.njk'
  ],
  variants: {
    display: ["group-hover"]
  },
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      },
      colors: {
        zinc: {
          75: '#f4f4f4',
        },
        gray: {
          750: '#707070',
          850: '#858585',
        },
        blue: {
          650: '#00aeef',
          750: '#2c455d',
          850: '#00012c',
        }
      },
      fontSize: {
        '45xl': ['2.5rem'],
      },
      height: {
        '98': '26rem',
        '128': '35rem',
        '160': '42rem',
        '192': '50rem',
        '224': '60rem',
        '256': '65rem',
        '270': '75rem',
      },
      opacity: {
        '85': '.85',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
