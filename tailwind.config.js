/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-lite": "rgba(42, 146, 148, 0.08)",
        "primary-deep": "rgba(42, 146, 148, 1)",
        "secondary": "rgba(25, 27, 25, 1)"
      },
      fontSize: {
        sh5: "10px"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

