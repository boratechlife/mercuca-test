/** @type {import('tailwindcss/plugin')} */
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss/defaultTheme')} */
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.serif],
        inter: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: { dark: "#051542" },
        accent: {
          1: "#D6545B",
          2: "#FC946D",
        },
        primary: {
          1: "#1F2841",
          2: "#091C4F ",
          3: "#223361",
          4: "#3A4972",
          5: "#707EA5",
          6: "#13234f",
          7: "#505c7d",
          8: "#212c48",
        },
        red: {
          1: "#FF3636",
          2: "#FF4A4A",
          3: "#F66868",
        },
        green: {
          1: "#1FBE42",
          2: "#62D27B",
          3: "#BCECC6",
        },
        neutral: {
          10: "#FAFAFA",
          20: "#F1EFEE",
          30: "#D2D4D9",
          40: "#BCBFC6",
          50: "#A5A9B3",
          60: "#8F94A0",
          70: "#797E8D",
          80: "#4C5367",
          90: "#353E54",
          100: "#1F2841",
        },
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(calc(-50% - 8rem))" },
        },
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        ".mega-heading": {
          fontFamily: "Poppins",
          fontSize: "3rem",
          fontWeight: "500",
          lineHeight: "1.25",
          "@screen lg": {
            fontSize: "6rem",
            lineHeight: "1.2",
            lineSpacing: "0.96px",
          },
        },
        ".heading-1": {
          fontSize: "3rem",
          lineHeight: "1.25",
          fontWeight: "500",
          "@screen md": {
            fontSize: "4rem",
          },
        },
        ".heading-2": {
          fontFamily: "Poppins",
          lineHeight: "1.25",
          fontSize: "2rem",
          "@screen md": {
            fontSize: "3rem",
            fontWeight: "500",
            lineHeight: "1.25",
          },
        },
        ".container": {
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          "@screen xl": {
            padding: "0",
            maxWidth: "min(100%,81.25rem)",
          },
        },
        ".container-left": {
          paddingLeft: "1.5rem",
          "@screen xl": {
            paddingLeft: "5.375rem",
          },
        },
        ".container-right": {
          paddingRight: "1.5rem",
          "@screen xl": {
            paddingRight: "5.375rem",
          },
        },

        ".brand-gradient": {
          background: "linear-gradient(270deg, #D6545B 0.09%, #FC946D 99.97%)",
        },
      });
    }),
  ],
};
