import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        l: "-3px 0 6px 0 #ea580c",
        r: "3px 0 6px 0 #ea580c",
        t: "0 -3px 6px 0 #ea580c",
        b: "0 3px 6px 0 #ea580c",
      },
    },
  },
  plugins: [],
};
export default config;
