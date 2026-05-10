// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  // THIS 'content' SECTION IS VERY IMPORTANT
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark-blue': '#0F172A',
        'brand-blue': '#1E3A8A',
        'brand-light-blue': '#3B82F6',
        'brand-teal': '#14B8A6',
        'brand-green': '#A3E635',
        'brand-light-gray': '#F1F5F9',
        'brand-gray': '#64748B',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'hero-gradient': 'linear-gradient(145deg, #1E3A8A 0%, #3B82F6 100%)',
        'cta-gradient': 'linear-gradient(90deg, #14B8A6 0%, #A3E635 100%)',
      },
    },
  },
  plugins: [],
};
export default config;