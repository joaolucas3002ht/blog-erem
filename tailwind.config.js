const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      // screens: {
      //    sm: '570px',
      //    md: '768px',
      //    lg: '976px',
      //    xl: '1440px'
      // },
      extend: {
         fontFamily: {
            primary: ['var(--font-roboto)', ...fontFamily.sans],
         },
      },
   },
   plugins: [require('@tailwindcss/line-clamp')],
};
