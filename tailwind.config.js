/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fff',
        secondary: '#332929',
        tertiary: '#2E2933',
        'box-primary': '#C2C2C2',
        'box-secondary': '#604D4D',
        'box-tertiary': '#9E545C',
        'text-primary': '#C2C2C2',
        'text-secondary': '#AFAFAF',
        'text-btn': '#212121',
        'text-input': '#9F9F9F',
        'text-tertiary': '#3548A5',
      },
      fontSize: {
        'xxs': '.625rem',
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'md': '1.0625rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.75rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      screens: {
        'xs': '375px',
        'sm-mini': '475px',
        'sm-base': '555px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}
