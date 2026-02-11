/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505", // Void Black
        foreground: "#ffffff",
        void: "#050505", 
        gold: {
          DEFAULT: "#D4AF37", // Champagne Gold
          light: "#F4DF97",
          dark: "#AA8C2C",
        },
        surface: "rgba(255, 255, 255, 0.03)",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #F4DF97 0%, #D4AF37 50%, #AA8C2C 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.3)',
      }
    },
  },
  plugins: [],
}