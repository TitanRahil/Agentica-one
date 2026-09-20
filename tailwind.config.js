/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#0A1128',
          50: '#F5F7FA',
          100: '#E6EAF2',
          200: '#C2CEE3',
          300: '#94AACC',
          400: '#5F7FA8',
          500: '#3B5985',
          600: '#233B63',
          700: '#152545',
          800: '#0E1933',
          900: '#0A1128',
          950: '#050917',
        },
        sky: {
          canvas: '#EAF2F8',
          mist: '#F0F6FA',
          surface: '#F8FAFC',
        },
        icy: {
          DEFAULT: '#38BDF8',
          glow: '#7DD3FC',
          deep: '#0284C7',
          soft: '#BAE6FD',
          tint: '#E0F2FE',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        accent: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glass-sm': '0 4px 16px rgba(10, 17, 40, 0.04), 0 1px 2px rgba(10, 17, 40, 0.02)',
        'glass-md': '0 12px 32px rgba(10, 17, 40, 0.06), 0 2px 6px rgba(10, 17, 40, 0.03)',
        'glass-lg': '0 24px 60px rgba(10, 17, 40, 0.08), 0 4px 12px rgba(10, 17, 40, 0.04)',
        'specular-glow': '0 0 25px rgba(56, 189, 248, 0.35)',
        'specular-pill': 'inset 0 1px 1px rgba(255, 255, 255, 0.9), 0 10px 25px rgba(10, 17, 40, 0.08)',
        'card-hover': '0 20px 40px rgba(10, 17, 40, 0.09), 0 1px 3px rgba(10, 17, 40, 0.03)',
      },
      backdropBlur: {
        'glass': '20px',
        'glass-heavy': '32px',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gleam': 'gleam 3s ease-in-out infinite',
      },
      keyframes: {
        gleam: {
          '0%': { transform: 'translateX(-100%) rotate(25deg)' },
          '100%': { transform: 'translateX(250%) rotate(25deg)' },
        }
      }
    },
  },
  plugins: [],
}
