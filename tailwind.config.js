const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         fontFamily: {
            primary: ['var(--font-roboto)', ...fontFamily.sans],
            mono: ['var(--font-roboto-mono)', ...fontFamily.mono],
         },
         animation: {
            pulse: 'pulse 4s cubic-bezier(0.4, 0.1, 0.3, 0.6) infinite',
         },
      },
   },
   plugins: [require('@tailwindcss/line-clamp')],
};
