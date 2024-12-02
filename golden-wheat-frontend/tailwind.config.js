/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: {
          max: "640px",
        },
      },
      colors: {
        "page-bg": "#B3B3B3",
        "card-background": "#9C5047",
        "card-beige": "#f0e3cc",
        "custom-red": "#9B2D20",
        "custom-nav-brown": "#7B4F29",
        "custom-lime": "#bcdd6e",
        "custom-light-brown": "#D8B89E",
        "charcoal-gray": "#4A4A48",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
