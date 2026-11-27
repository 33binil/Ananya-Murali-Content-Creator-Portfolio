/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#ECDC9E',
        periwinkle: '#5A6EA8',
        deepBlue: '#46578C',
        pageBg: '#FCF5E3',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        condensed: ['Anton', 'Impact', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
};
