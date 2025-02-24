import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          '1': '#4AC63F',
          2: '#F6C92D',
          3: '#FD7FE9',
          4: '#62B3FD'
        },
        secondary: {
          1: '#CDEDFF',
          2: '#FFEBDF',
          3: '#FFD5FB',
          4: '#D6F4BF'
        },
        neutrals: {
          1: '#141416',
          2: '#23262F',
          3: '#353945',
          4: '#777E90',
          5: '#B1B5C3',
          6: '#E6E8EC',
          7: '#F4F5F6',
          8: '#FCFCFD'
        }
      },
      fontFamily: {
        'noto-sans': ['var(--noto-sans)', 'dotum', 'system-ui', 'sans-serif'],
        'do-hyeon': ['var(--do-hyeon)', 'dotum', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config
