/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0b',
          1: '#111114',
          2: '#18181d',
          3: '#222229',
        },
        gold: {
          DEFAULT: '#c9a96e',
          light: '#e8cfa0',
          dim: 'rgba(201,169,110,0.15)',
          border: 'rgba(201,169,110,0.22)',
        },
        ink: {
          DEFAULT: '#f0ede8',
          2: '#9e9a93',
          3: '#5c5955',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Outfit', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem,8vw,6rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(2.2rem,5vw,3.8rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.6rem,3vw,2.4rem)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
        'gold-radial': 'radial-gradient(ellipse at center, rgba(201,169,110,0.08) 0%, transparent 65%)',
        'hero-radial': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,169,110,0.07) 0%, transparent 70%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        shimmer: {
          '0%,100%': { opacity: '0.4' },
          '50%':     { opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.ink.2'),
            fontFamily: theme('fontFamily.sans').join(', '),
            lineHeight: '1.8',
            maxWidth: 'none',
            'h1,h2,h3,h4': {
              fontFamily: theme('fontFamily.display').join(', '),
              fontWeight: '300',
              color: theme('colors.ink.DEFAULT'),
            },
            h2: { fontSize: '2rem', marginTop: '3rem' },
            h3: { fontSize: '1.5rem' },
            a: { color: theme('colors.gold.DEFAULT'), textDecoration: 'none' },
            'a:hover': { color: theme('colors.gold.light') },
            strong: { color: theme('colors.ink.DEFAULT'), fontWeight: '500' },
            code: {
              fontFamily: theme('fontFamily.mono').join(', '),
              backgroundColor: theme('colors.bg.2'),
              color: theme('colors.gold.DEFAULT'),
              padding: '2px 6px',
              borderRadius: '4px',
              fontSize: '0.85em',
            },
            'code::before': { content: 'none' },
            'code::after':  { content: 'none' },
            pre: {
              backgroundColor: theme('colors.bg.1'),
              border: `1px solid ${theme('colors.bg.3')}`,
              borderRadius: '8px',
            },
            blockquote: {
              borderLeftColor: theme('colors.gold.border'),
              color: theme('colors.ink.2'),
              fontStyle: 'italic',
              fontFamily: theme('fontFamily.display').join(', '),
              fontSize: '1.15em',
            },
            hr: { borderColor: theme('colors.bg.3') },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
