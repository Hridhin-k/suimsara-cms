import { Playfair_Display, Poppins } from 'next/font/google'

/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
]
export const theme = {
  extend: {
    backgroundColor: {
      primaryBackground: ' #FFFFFF',
      secondaryBackground: '#F6EFDD',
      green: '#318162',
      testimonialBg: '#FBF8F0',
    },
    zIndex: {
      100: '100',
    },
    borderColor: {
      dark: '#1C1E22',
      green: '#318162',
      secondary: '#F6EFDD',
    },
    textColor: {
      dark: '#1C1E22',
      lead: '#494F5A',
      green: '#318162',
      light: '#FFFFFF',
    },
    fontFamily: {
      poppins: ['var(--font-poppins)'],
      Playfair_Display: 'Playfair_Display',
    },
    screens: {
      xl: '1450px', // Custom 2xl breakpoint
      lg: '1100px',
      md: '850px',
      // '3xl': '1600px', // Custom 3xl breakpoint
    },
  },
}
export const plugins = []
