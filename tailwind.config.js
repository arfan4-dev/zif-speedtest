import { nextui } from "@nextui-org/react";
import { palette } from "./src/lib/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px", // hd 1280 x 720
      "2xl": "1536px", // 1536 x 864
      "3xl": "1920px", // full hd 	1920 x 1080
      "4xl": "2560px", // 2k 2560 x 1440
      "5xl": "3840px", // 4k 3840 x 2160
    },
    container: {
      padding: "2rem",
    },
    extend: {
      colors: {
        primary: palette.primary,
        secondary: palette.secondary,
        gold: palette.gold,
        silver: palette.silver,
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            primary: palette.primary,
            secondary: palette.secondary,
          },
        },
      },
    }),
  ],
};
