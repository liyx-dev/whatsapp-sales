module.exports = {
content: [
  "./**/*.{html,js}"
],
  theme: {
    extend: {
      colors: {
        liyog: {
          green: '#28A428',
          'green-light': '#34BF49',
          'green-dark': '#228B22',
          'deep-green': '#006400',
          gold: '#FFD700',
          orange: '#FF7A00',
          blue: '#1877F2',
          black: '#111111',
          'black-light': '#1A1A1A',
          'black-dark': '#000000',
          yellow: '#FFEA00',
          'yellow-dark': '#E6D500',
          red: '#FF3B30',
          'red-dark': '#C1271A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      animation: {
        shimmer: 'shimmer 3s infinite linear',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        float: 'float 6s ease-in-out infinite'
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-150%) skewX(-15deg)' },
          '50%': { transform: 'translateX(150%) skewX(-15deg)' },
          '100%': { transform: 'translateX(150%) skewX(-15deg)' }
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' }
        }
      }
    }
  },
  plugins: []
}
