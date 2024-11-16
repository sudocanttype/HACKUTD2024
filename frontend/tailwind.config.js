/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React component files
  ],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {     
},
  },
  plugins: [    require('daisyui'),
],
};
