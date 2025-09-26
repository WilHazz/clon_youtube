import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // 👈 necesario para manejar dark/light mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "576px",
        tablet: "768px",
        laptop: "992px",
        desktop: "1200px",
      },
      colors: {
        youtubeRed: "#FF0000",
      },
    },
  },
  plugins: [],
};
export default config;
