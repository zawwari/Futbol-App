import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sx: "320px",
        xs: "475px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "fitt-white": "var(--color-fitt-white)",
        "fitt-gray": "var(--color-fitt-gray)",
        "fitt-yellow": "var(--color-fitt-yellow)",
      },
      fontFamily: {
        reedo: ["var(--font-family-reedo)", "sans-serif"],
        "wanted-sans": ["var(--font-family-wanted-sans)", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwindcss-animatecss-latest"),
  ],
};
export default config;
