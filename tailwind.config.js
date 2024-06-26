const { Transform } = require('@mui/icons-material');

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  // content: ["./build/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Arial', 'sans-serif'],
      },
      'screens': {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(min-aspect-ratio: 13/20)' },
      },
      'keyframes': {
        'open-menu': {
          '0%': { Transform: 'scaleY(0)' },
          '80%': { Transform: 'scaleY(1.2)' },
          '100%': { Transform: 'scaleY(1)' },
        },
      }, 
      'animation': {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


/* screens: {
  'tablet': '640px',
  // => @media (min-width: 640px) { ... }

  'laptop': '1024px',
  // => @media (min-width: 1024px) { ... }

  'desktop': '1280px',
  // => @media (min-width: 1280px) { ... }
}, */


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {
//       fontFamily: {
//         'sans': ['Roboto', 'Arial', 'sans-serif'],
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }