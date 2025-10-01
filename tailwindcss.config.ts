import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // extend: {
    //   fontFamily: {
    //     sans: ['Inter', 'sans-serif'],
    //     display: ['Montserrat', 'sans-serif'],
    //     mono: ['Roboto Mono', 'monospace'],
    //   },
    //   fontSize: {
    //     xxs: ['0.65rem', { lineHeight: '1rem' }],
    //     xs: ['0.75rem', { lineHeight: '1rem' }],
    //     sm: ['0.875rem', { lineHeight: '1.25rem' }],
    //     base: ['1rem', { lineHeight: '1.5rem' }],
    //     lg: ['1.125rem', { lineHeight: '1.75rem' }],
    //     xl: ['1.25rem', { lineHeight: '1.75rem' }],
    //     '2xl': ['1.5rem', { lineHeight: '2rem' }],
    //     '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    //     '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    //     '5xl': ['3rem', { lineHeight: '1' }],
    //   },
    //   colors: {
    //     brand: {
    //       DEFAULT: '#0052CC',
    //       light: '#4C9AFF',
    //       dark: '#0747A6',
    //     },
    //     bid: {
    //       up: '#2ECC71',
    //       down: '#E74C3C',
    //     },
    //   },
    //   spacing: {
    //     18: '4.5rem',
    //     22: '5.5rem',
    //   },
    //   borderRadius: {
    //     xl: '1rem',
    //     '2xl': '1.5rem',
    //   },
    // },
  },
  plugins: [tailwindcssAnimate],
}

export default config
