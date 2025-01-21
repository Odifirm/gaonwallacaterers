const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: "1rem",
    },
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      mont: ['marcellus-regular', 'serif'],
      mare: ['Marcellus', 'serif'],

    },
    extend: {
      backgroundImage: {
        'contact-img': "url('/src/assets/images/contactbg.png')",
      },
      colors: {
        white: '#FFFFFF', // Example white color
        black: '#0E202D', // Example black color
        primary: '#FCF7F4', // Example primary color
        base: '#f6b255', // Example base color
        secondary: '#81846A', // Example secondary color
        accent: '#F59E0B', // Example accent color
        neutral: '#64748B', // Example neutral color
        info: '#3B82F6', // Example info color
        success: '#10B981', // Example success color
        warning: '#FBBF24', // Example warning color
        error: '#EF4444', // Example error color
        'spiner': '#A155F3',
        'textcolors': '#FCF7F4',
        'textcolor': '#FCF7F4',
        'base-100': '#FCF7F4', // Example base color
        'text-primary': '#1F2937', // Example text primary color
        'textprimary': '#c89b73', // Example text accent color
        'text-secondary': '#64748B', // Example text secondary color
        'btnprimary': '#FCF7F4', // Example primary color
      },
      screens: {
        'mobile': '320px', // Mobile devices
        'xs': '480px', // Extra small devices
        'sm': '640px', // Small devices
        'md': '768px', // Medium devices
        'lg': '1024px', // Large devices
        'xl': '1280px', // Extra large devices
        '2xl': '1536px', // 2x Extra large devices
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'spin-fast': 'spin 500ms linear infinite',
      },
    },
  },
  plugins: [],
}