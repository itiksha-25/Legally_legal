/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F0E5',
        parchment: '#E8DCC8',
        burgundy: {
          DEFAULT: '#672F3A',
          light: '#8A444F',
          dark: '#4E2129',
        },
        rose: {
          DEFAULT: '#C58D91',
          light: '#E0BCC0',
          dark: '#A66A70',
        },
        ink: '#382D29',
      },
      fontFamily: {
        serif: ['Fraunces', 'Cormorant Garamond', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        hand: ['Caveat', 'Comic Sans MS', 'cursive'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        polaroid: '0 6px 18px -4px rgba(56, 45, 41, 0.25), 0 2px 6px -2px rgba(56, 45, 41, 0.15)',
        soft: '0 4px 24px -6px rgba(56, 45, 41, 0.2)',
        inset: 'inset 0 0 40px rgba(56, 45, 41, 0.08)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        flipIn: {
          '0%': { opacity: '0', transform: 'rotateY(80deg) scale(0.9)' },
          '100%': { opacity: '1', transform: 'rotateY(0) scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        flapOpen: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(-180deg)' },
        },
        confettiFall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(720deg)', opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease-out both',
        fadeInScale: 'fadeInScale 0.6s ease-out both',
        flipIn: 'flipIn 0.8s ease-out both',
        slideUp: 'slideUp 0.8s ease-out both',
        twinkle: 'twinkle 2.5s ease-in-out infinite',
        flapOpen: 'flapOpen 1s ease-in forwards',
        confettiFall: 'confettiFall linear forwards',
      },
    },
  },
  plugins: [],
};
