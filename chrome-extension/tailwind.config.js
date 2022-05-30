module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Kanit"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          '"Open Sans"',
          '"Helvetica Neue"',
          'sans-serif',
        ],
      },
      colors: {
        accent: {
          200: 'hsl(240, 40%, 50%)',
          300: 'hsl(240, 40%, 45%) ',
          400: 'hsl(240, 15%, 55%)',
          500: 'hsl(240, 15%, 45%)',
          600: 'hsl(240, 15%, 25%)',
          700: 'hsl(240, 15%, 20%)',
          800: 'hsl(240, 15%, 17%)',
          900: 'hsl(240, 15%, 15%)',
        },
      },
    },
  },
  plugins: [],
};
