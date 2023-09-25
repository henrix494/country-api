import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:'class',
  
  theme: {
    colors:{
      'dme':'hsl(209, 23%, 22%)',
      'dmBG':'hsl(207, 26%, 17%)',
      'lmTEXT':'hsl(200, 15%, 8%)',
      'lmINPUT':'hsl(0, 0%, 52%)',
      'lmBg':'hsl(0, 0%, 98%)',
      'whitee':'hsl(0, 0%, 100%)'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
