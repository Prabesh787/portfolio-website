/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Pure neutral greys (light surfaces) — no warm/pink tint
        paper: {
          DEFAULT: '#fafafa',
          50: '#ffffff',
          100: '#fafafa',
          200: '#f4f4f5',
          300: '#e4e4e7',
          400: '#d4d4d8',
          500: '#a1a1aa',
          600: '#71717a',
          700: '#52525b',
          800: '#3f3f46',
          900: '#18181b',
        },
        // Terminal-dark neutrals (text + dark surfaces)
        ink: {
          DEFAULT: '#141716',
          50: '#f1f3f2',
          100: '#e1e4e2',
          200: '#c3c8c5',
          300: '#9ea5a1',
          400: '#7b827e',
          500: '#5c635f',
          600: '#3d433f',
          700: '#252a27',
          800: '#141716',
          900: '#0a0c0b',
          950: '#050606',
        },
        // Terminal green
        accent: {
          50: '#ecfdf3',
          100: '#d1fadf',
          200: '#a6f4c5',
          300: '#6ce9a6',
          400: '#32d583',
          500: '#12b76a',
          600: '#039855',
          700: '#027a48',
          800: '#05603a',
          900: '#054f31',
        },
        primary: {
          50: '#ecfdf3',
          100: '#d1fadf',
          200: '#a6f4c5',
          300: '#6ce9a6',
          400: '#32d583',
          500: '#12b76a',
          600: '#039855',
          700: '#027a48',
          800: '#05603a',
          900: '#054f31',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        hero: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        shimmer: 'shimmer 2s ease-in-out infinite',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(20, 23, 22, 0.04), 0 8px 24px -12px rgba(20, 23, 22, 0.10)',
        ink: '0 1px 2px rgba(10, 12, 11, 0.5), 0 8px 24px -12px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}
