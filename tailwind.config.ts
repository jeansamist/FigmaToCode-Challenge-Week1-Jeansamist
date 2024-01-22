import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        xl: "80%",
      },
    },
    extend: {
      colors: {
        background: {
          DEFAULT: "hsl(var(--background))",
          variant: "hsl(var(--background-variant))",
        },
        foreground: "hsl(var(--text-color))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--white))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--white))",
        },
        grass: {
          DEFAULT: "hsl(var(--grass))",
          foreground: "hsl(var(--white))",
        },
        title: "hsl(var(--title))",
        card: "hsl(var(--white))",
        shadow: "hsla(var(--shadow))",
      },
      borderRadius: {
        "4xl": "var(--radius)",
      },
    },
  },
  plugins: [],
};

export default config;
