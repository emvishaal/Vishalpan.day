/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        serif: [
          'ui-serif',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
      },
      colors: {
        neutral: {
          50: '#fafaf8',
          100: '#f5f5f0',
          200: '#ebe9e3',
          300: '#e0ddd6',
          400: '#c9c6bb',
          500: '#a9a59e',
          600: '#8b8780',
          700: '#6b6762',
          800: '#4a4641',
          900: '#2d2b28',
        },
        slate: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
        accent: {
          primary: '#2c3e50',
          secondary: '#34495e',
          teal: '#0f8b8d',
          gold: '#b8860b',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#2d2b28',
            a: {
              color: '#0f8b8d',
              textDecoration: 'underline',
              textDecorationColor: '#0f8b8d',
              textUnderlineOffset: '0.25rem',
              '&:hover': {
                color: '#0a5f61',
              },
            },
            strong: {
              color: '#2d2b28',
            },
            code: {
              color: '#2d2b28',
            },
          },
        },
      },
    },
  },
  plugins: [],
};
