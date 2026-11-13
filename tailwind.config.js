/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
            colors: {
        gold: {
          DEFAULT: '#000000',
          light: '#222222',
          dark: '#000000',
          bg: '#f5f5f5',
          accent: '#DFBA73',
        },
        teal: {
          DEFAULT: '#111111',
          light: '#333333',
          dark: '#000000',
          bg: '#f5f5f5',
        },
        terracotta: {
          DEFAULT: '#000000',
          light: '#222222',
          dark: '#000000',
          bg: '#f5f5f5',
        },
        primary: {
          DEFAULT: '#000000',
          light: '#222222',
          dark: '#000000',
        },
        dark: {
          DEFAULT: '#212529',
          mid: '#343a40',
        },
        light: {
          DEFAULT: '#EBE9E4',
          muted: '#e2e0db',
        },
        'text-mid': '#495057',
        'text-light': '#6c757d',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Open Sans', 'sans-serif'],
        jost: ['var(--font-jost)', 'Montserrat', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        'brand-sm': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'brand-md': '0 8px 24px rgba(0, 0, 0, 0.14)',
        'brand-lg': '0 20px 48px rgba(0, 0, 0, 0.18)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.06)',
      },
      keyframes: {
        priceBtn: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        blinkPrice: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0   rgba(139, 106, 52, 0.45)' },
          '50%': { boxShadow: '0 0 0 12px rgba(139, 106, 52, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        priceBtn: 'priceBtn 4s ease infinite',
        blinkPrice: 'blinkPrice 0.9s step-end infinite',
        fadeUp: 'fadeUp 0.7s ease forwards',
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}
