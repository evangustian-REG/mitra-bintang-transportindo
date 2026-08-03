/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060b18',
          900: '#0a1128',
          800: '#0e1a38',
          700: '#162447',
          600: '#1f3160',
          500: '#2a417e',
        },
        safety: {
          500: '#f59e0b',
          400: '#fbbf24',
          600: '#d97706',
          700: '#b45309',
        },
        ocean: {
          500: '#0284c7',
          400: '#38bdf8',
          600: '#0369a1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
