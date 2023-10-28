/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "primary-500": "#090962",
        "secondary-500": "#E46F21",
        black: "#282626",
      },
    },
  },
  plugins: [],
};
