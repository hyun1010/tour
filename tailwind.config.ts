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
        foreground: 'var(--foreground)'
      },
      fontFamily: {
        'noto-sans': ['var(--noto-sans)', 'dotum', 'system-ui', 'sans-serif'],
        'do-hyeon': ['var(--do-hyeon)', 'dotum', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config
