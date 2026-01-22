import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: {
          950: 'rgb(10, 10, 10)',
          900: 'rgb(18, 18, 18)',
          800: 'rgb(26, 26, 26)',
          700: 'rgb(36, 36, 36)',
        },
        steel: {
          600: 'rgb(74, 74, 74)',
          500: 'rgb(106, 106, 106)',
          400: 'rgb(138, 138, 138)',
          300: 'rgb(170, 170, 170)',
          200: 'rgb(170, 170, 170)',
        },
        neon: {
          magenta: 'rgb(255, 0, 255)',
          purple: 'rgb(192, 0, 255)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glitch': 'glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'scan': 'scan 8s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 30px rgba(0, 240, 255, 0.8)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
