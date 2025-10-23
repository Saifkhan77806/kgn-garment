/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C2A39", // Navy Blue — headings, navbar, footer
        copper: "#B87333", // Accent 1 — buttons, hover states
        beige: "#F5EBDC", // Accent 2 — backgrounds, cards
        ivory: "#FFF9F4", // Neutral Light — page background
        charcoal: "#333333", // Neutral Dark — text, contrast
        gold: "#D4A373", // Highlight — icons, dividers
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
};
