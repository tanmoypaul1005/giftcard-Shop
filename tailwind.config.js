const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
        maxHeight: 'max-height',
        minHeight: 'min-height',
      },
      colors: {
        blueGray: colors.slate,
        coolGray: colors.gray,
        cTitleTextColor: "#1E1E1E",
        cSubTitleColor: "#302D2D",
        cBrand: "#FB607F",
        cBrandLight: "#764ba236",
        cSecondaryBodyText: "#764BA2",
        cHoverSecondaryBodyText: "#613e84",
        cPlaceholder: "#D1D1D1",
        cIconColor: "#8A9099",
        cSuccess: "#5BB45B",
        cBodyText: "#5BB45B",
        cWhite: "#FFFFFF",
        cPending: "#F88F2E",
        cRed: "#F66060",
        cGridView: "#F8F8F8",
        cBoxView: "#764BA2",
        cNmSelect: "#DEDEDE",
        cListHeader: "#BFE5BF",
        cBrick: "#FB607F",
        cBrickHover: "#FD8BA2",
        cTintBrick: "#FFF1F1",
        cLemonade: "#FDB9C8",
        cNewRed: "#F66060",
        cCoinBalanceBG: '#FDD54A',
      },
      // p-s1
      spacing: {
        s5: "5px",
        s10: "10px",
        s20: "20px",
      },
      // text-fs10
      fontSize: {
        fs10: "10px",
        fs12: "12px",
        fs14: "14px",
        fs16: "16px",
        fs18: "18px",
        fs20: "20px",
        fs28: "28px",
        fs32: "32px",
      },
      fontWeight: {
        fw400: "400",
        fw500: "500",
        fw600: "600",
        fw700: "700",
      },
      borderRadius: {
        br5: "5px",
        br10: "10px",
      },
      boxShadow: {
        'c1': '0 0px 4px 0px rgba(0,0,0,.20)',
        'c2': '0 9px 30px 3px rgba(0,0,0,.46)',
        'c3': '0 18px 30px 3px rgba(0,0,0,.46)',
        'c4': '0 30px 50px 5px rgba(0,0,0,.44)',
        'c5': '0 45px 60px 6px rgba(0,0,0,.44)',
        'c6': '0 0 5px ##f4cdfa',
      }
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'poppins': ['Poppins', 'sans-serif'],
      'montserrat': ['Montserrat'],
      'archivo': ['Archivo', 'sans-serif'],
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      'tab': { 'min': '100px', 'max': '845px' },
    }
  },
  plugins: [],
}