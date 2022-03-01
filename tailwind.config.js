module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,ts}",
  ],
  theme: {
    extend: {
      padding: {
        base: '7rem'
      },
      keyframes: {
        radar: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(1.5)', opacity: 0 },
        }
      },
      animation: {
        radar: 'radar 3s infinite'
      }
    },
  },
  plugins: [],
}
