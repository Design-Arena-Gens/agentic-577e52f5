import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F25F5C",
        accent: "#70C1B3",
        dusk: "#247BA0",
        twilight: "#50514F",
        sand: "#FFE066"
      },
      fontFamily: {
        display: ["var(--font-plus-jakarta)"],
        copy: ["var(--font-inter)"]
      },
      boxShadow: {
        focus: "0 10px 35px rgba(37, 122, 167, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
