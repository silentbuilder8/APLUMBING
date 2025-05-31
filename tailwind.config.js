/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F52BA', // Deep blue
        secondary: '#6C757D', // Dark gray
        accent: '#FF6B35', // Orange
        success: '#10B981', // Green
        warning: '#FBBF24', // Yellow
        error: '#EF4444', // Red
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};