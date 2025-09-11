/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsla(210, 3%, 13%, 1.00)",   // dark background
        card: "hsla(222, 81%, 8%, 1.00)",         // card color
        "card-glass": "hsla(222, 47%, 16%, 0.6)", // translucent card
        primary: "hsl(220, 90%, 56%)",      // blue
        "primary-glow": "hsl(220, 90%, 66%)",
        accent: "hsl(280, 80%, 60%)",       // purple/pink accent
        "accent-glow": "hsl(280, 80%, 70%)",
        "xcrypto-text": "hsl(0, 0%, 100%)", // white
        "muted-foreground": "hsl(220, 10%, 60%)",
        border: "hsl(220, 15%, 20%)",
        input: "hsl(222, 47%, 20%)",
        "input-border": "hsl(220, 15%, 25%)",
        ring: "hsl(220, 90%, 56%)",
      },
      boxShadow: {
        "shadow-glow": "0 0 20px hsl(220, 90%, 56%, 0.5)",
        "shadow-card": "0 0 12px hsl(222, 47%, 16%, 0.5)",
      },
    },
  },
  plugins: [],
}
