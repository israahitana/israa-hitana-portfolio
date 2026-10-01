/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F5',
          100: '#F5F1E9',
          200: '#EBE3D6',
          300: '#DFD3C0',
          400: '#CEC0A9',
        },
        taupe: {
          50: '#F8F6F3',
          100: '#EEE7DE',
          200: '#DFD5C7',
          300: '#C9BAA6',
          400: '#AB9983',
          500: '#8E7C66',
          600: '#736351',
          700: '#5A4C3D',
        },
        mocha: {
          50: '#F7F3EF',
          100: '#EFE6DE',
          200: '#DC Rugby B9',
          200: '#DCCABE',
          300: '#C4AB9B',
          400: '#A78A77',
          500: '#896C59',
          600: '#705442',
          700: '#563F31',
          800: '#402E24',
          900: '#2C1F18',
        },
        charcoal: {
          50: '#F6F5F4',
          100: '#E7E5E4',
          200: '#D7D3CE',
          300: '#B8B2AA',
          400: '#8C857B',
          500: '#686157',
          600: '#4E483F',
          700: '#3A352E',
          800: '#26221D',
          900: '#1A1713',
          950: '#120F0C',
        },
        warmgray: {
          50: '#F9F8F6',
          100: '#F0EEEA',
          200: '#E3DFD7',
          300: '#CFC8BE',
          400: '#B0A79A',
          500: '#908678',
          600: '#736A5D',
          700: '#585045',
          800: '#3E3830',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(64, 46, 36, 0.05), 0 2px 6px -1px rgba(64, 46, 36, 0.03)',
        'soft-lg': '0 10px 30px -4px rgba(64, 46, 36, 0.08), 0 4px 12px -2px rgba(64, 46, 36, 0.04)',
        'soft-xl': '0 20px 40px -6px rgba(64, 46, 36, 0.1), 0 8px 16px -4px rgba(64, 46, 36, 0.05)',
        'warm-glow': '0 0 35px -5px rgba(137, 108, 89, 0.25)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(64, 46, 36, 0.04)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
