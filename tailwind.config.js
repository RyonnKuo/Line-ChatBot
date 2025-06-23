/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        RWDs: "500px",
        RWDm: "785px",
        RWDl: "1168px"
      },
      colors: {
        "00": "#000000",
        "ff": "#ffffff",
        "ed": "#EDEDEC",
        "6b": "#6B6B6B",
        "80": "#808080",
        "1c": "#1C1C1C",
        "d4": "#D4E5DC",
        "ad": "#ADCEBE",
        "b2": "#b2ebcf",
        "9a": "#9ADBBB",
        '4d': "#4D9F75",
        '3d': "#3D6F55",
        "20": "#204038",
        "53": "#53C5AE",
        "d1": "#D14000",
        "4b": "#4BBCB3",
        "11a": "#11A88A",
        "f1": "#F1F9F5",
        "fff6d6": "#FFF6D6",
        "1c.65": "#1c1c1ca6",
        "4d.10": "#4D9F751A",
        '4d.20': "#4D9F7533",
        '4d.33': "#4D9F7554",
        "6b.05": "#6B6B6B0D",
        "6b.60": "#6B6B6B99",
        "1c.30": "#1c1c1c4D",
        "d4.60": "#D4E5DC99",
        "b2.50": "#b2ebcf80",
        "ff.10": "#ffffff1A",
        "ff.50": "#ffffff80",
        "ff.85": "#ffffffd9",
        "53.30": "#53C5AE4D",
        "9a.30": "#9ADBBB4D",
        "fff6d6.60": "#fff6d699",
        "70": "#707070",
        "70.30": "#7070704D",
        "257":"#257709",
        "0080": "#00000080"
      },
      fontSize: {
        xs: ["12px", "14.4px"],
        lxs: ["12px", "16px"],
        sm: ["13px", "15.6px"],
        smn: ["13px", "16px"],
        smx: ["13px", "18px"],
        lsm: ["14px", "16px"],
        ls: ["16px", "20px"],
        l: ["18px", "24px"],
        xl: ["20px", "24px"],
        xxl: ["24px", "32px"],
        s30l40: ["30px", "40px"],
        xxxl: ["32px", "36px"],
        lgx: ["36px", "40px"],
        fourXl: ["36px", "40px"],
        fiveXl: ["40px", "42px"],
      },

      width: {
        "1px": "1px",
        RWDs: "500px",
        RWDm: "784px",
        RWDl: "1136px"
      },

    },
  },
  plugins: [],
}

