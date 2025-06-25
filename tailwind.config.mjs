// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        muted: "hsl(var(--muted))",
        accent: "hsl(var(--accent))",
        destructive: "hsl(var(--destructive))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderColor: {
        DEFAULT: "hsl(var(--border))",
      },
      fontFamily: {
        sans: ["Arial", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
