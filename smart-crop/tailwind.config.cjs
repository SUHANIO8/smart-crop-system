// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1a4d2e',     // Dark text color
          primary: '#2d8a5b',  // Button green
          light: '#e2f5e9',    // Pale green background
          card: '#d1eadd',     // Slightly darker card bg if needed
          muted: '#4a6b5d',    // Secondary text
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}