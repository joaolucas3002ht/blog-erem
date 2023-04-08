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
         animation:{
            "pulse" : "pulse 4s cubic-bezier(0.4, 0.1, 0.3, 0.6) infinite"
         }
      },
   },
   plugins: [require('@tailwindcss/line-clamp')],
};
