import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#111729",
        purple: "#1D1B48",
        blue: "#3662E3",
        "gray-extradark": "#20293A",
        "gray-dark": "#364153",
        "gray-medium": "#4A5567",
        "gray-light": "#CDD5E0",
      },
    },
  },
  plugins: [],
};
export default config;
