import { buildLegacyTheme } from 'sanity';

const props = {
   '--my-white': 'hsl(0, 0%, 90%)',
   '--my-black': 'hsl(0, 0%, 15%)',
   // '--my-blue': '#4285f4',
   '--my-red': '#db4437',
   '--my-yellow': '#f4b400',
   '--my-green': '#0f9d58',
   '--gray': '#666666',
   '--timemo-brand': '#b4d4e4',
};

export const myTheme = buildLegacyTheme({
   /* Base theme colors */
   '--black': props['--my-black'],
   '--white': props['--my-white'],
   '--gray-base': '#666666',
   '--component-bg': props['--my-white'],
   '--component-text-color': props['--my-black'],

   /* Brand */
   '--brand-primary': props["--gray"],

   // Default button
   '--default-button-color': props["--gray"],
   '--default-button-primary-color': props["--gray"],
   '--default-button-success-color': props['--my-green'],
   '--default-button-warning-color': props['--my-yellow'],
   '--default-button-danger-color': props['--my-red'],

   /* State */
   '--state-info-color': props["--gray"],
   '--state-success-color': props['--my-green'],
   '--state-warning-color': props['--my-yellow'],
   '--state-danger-color': props['--my-red'],

   /* Navbar */
   '--main-navigation-color': props['--my-white'],
   '--main-navigation-color--inverted': props['--my-black'],

   '--focus-color': props["--gray"],
});
