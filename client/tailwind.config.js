/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexendBold: ["Lexend-Bold", "sans-serif"],
        lexendSemiB: ["Lexend-SemiBold", "sans-serif"],
        lexendReg: ["Lexend-Regular", "sans-serif"],
        lexendMed: ["Lexend-Medium", "sans-serif"],
        lexendExtraB: ["Lexend-ExtraBold", "sans-serif"],
      },
      colors: {
        basicBlack: "#0D0D0D",
        basicWhite: "#FFFFFF",
        basicOnyx: "#181818",
        basicDarkGray: "#808080",
        basicMediumGray: "rgba(128, 128, 128, 0.5)",
        basicLightGray: "#C5C5C5",
        basicLightBlue: "rgba(63, 100, 234, 0.43)",
        basicLightRed: "rgba(233, 63, 64, 0.43)",
        basicLightYellow: "rgba(255, 184, 0, 0.43)",
        basicPrimary: "#FFB800",

        darkMainBg: "#0D0D0D",
        darkCardBorder: "#383737",
        darkWhite10: "rgba(255, 255, 255, 0.1)",
        darkWhite25: "rgba(255, 255, 255, 0.25)",
        darkWhite70: "rgba(255, 255, 255, 0.7)",
        darkBlack50: "rgba(21, 21, 21, 0.5)",

        lightMainBg: "#FBFBFB",
        lightFaintWhite: "#F3F3F3",
        lightCardBorder: "#EBEBEB",
        lightCardBg: "#F6F6F6",
        lightBlack: "rgb(21, 21, 21, 0.1)",
      },
    },
  },
  plugins: [],
};
