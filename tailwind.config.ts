import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        background: "#fafaf9",
        accent: "#a8a29e",
      },
      letterSpacing: {
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.15em",
      },
    },
  },
  plugins: [],
};
export default config;
