/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-image': "url('./media/lyd-085_downsized.jpg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

