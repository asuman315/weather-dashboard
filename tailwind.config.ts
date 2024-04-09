import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'urbanist': ['Urbanist', 'sans-serif'],
      },
      screens: {
        sm: "480px",
        md: "820px",
        lg: "1000px",
        xl: "1480px",
      },
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        black: "#000000",
        primary: {
          25: "#FCFAFF",
          50: "#F9F5FF",
          100: "#F4EBFF",
          200: "#E9D7FE",
          300: "#D6BBFB",
          400: "#B692F6",
          500: "#8000FF",
          600: "#6800CF",
          700: "#50009F",
          800: "#38016D",
          900: "#2F005C",
        },
        gray: {
          50: '#F9FAFB',
          100: '#F2F4F7',
          200: '#EAECF0',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1D2939',
        },
        error: {
          50: '#FFFBFA',
          100: '#FEE4E2',
          500: '#F04438',
          700: '#B42318',
        },
        success: {
          50: '#F4F9F6',
          100: '#D1FADF',
          500: '#12B76A',
          700: '#027A48',
        },
        warning: {
          50: '#FFFCF5',
          100: '#FEF0C7',
          400: '#FDB022',
          500: '#F79009',
          700: '#B54708',
        },
      },
      width: {
        "left-percent": "70%",
        "right-percent": "30%",
        "13": "3.25rem", // 52px
        "14": "3.5rem", // 56px
        "15": "3.75rem", // 60px
        "16": "4rem", // 64px
        "17": "4.25rem", // 68px
        "18": "4.5rem", // 72px
        "19": "4.75rem", // 76px
        "20": "5rem", // 80px
        "21": "5.25rem", // 84px
        "22": "5.5rem", // 88px
        "23": "5.75rem", // 92px
        "24": "6rem", // 96px
        "25": "6.25rem", // 100px
      },
      height: {
        "13": "3.25rem", // 52px
        "14": "3.5rem", // 56px
        "15": "3.75rem", // 60px
        "16": "4rem", // 64px
        "17": "4.25rem", // 68px
        "18": "4.5rem", // 72px
        "19": "4.75rem", // 76px
        "20": "5rem", // 80px
        "21": "5.25rem", // 84px
        "22": "5.5rem", // 88px
        "23": "5.75rem", // 92px
        "24": "6rem", // 96px
        "25": "6.25rem", // 100px
      },
      spacing: {
        "7.5": "30px",
        "13": "3.25rem", // 52px
        "14": "3.5rem", // 56px
        "15": "3.75rem", // 60px
        "16": "4rem", // 64px
        "17": "4.25rem", // 68px
        "18": "4.5rem", // 72px
        "19": "4.75rem", // 76px
        "20": "5rem", // 80px
        "21": "5.25rem", // 84px
        "22": "5.5rem", // 88px
        "1px": "0.0625rem", // 1px
        "2px": "0.125rem", // 2px
        "3px": "0.1875rem", // 3px,
        "5px": "0.3125rem", // 5px
        "6px": "0.375rem", // 6px
        "7px": "0.4375rem", // 7px
        "9px": "0.5625rem", // 9px
        "10px": "0.625rem", // 10px
        "11px": "0.6875rem", // 11px
        "13px": "0.8125rem", // 13px
        "14px": "0.875rem", // 14px
        "15px": "0.9375rem", // 15px
        "17px": "1.0625rem", // 17px
        "18px": "1.125rem", // 18px
        "19px": "1.1875rem", // 19px
        "21px": "1.3125rem", // 21px
        "22px": "1.375rem", // 22px
        "23px": "1.4375rem", // 23px
        "25px": "1.5625rem", // 25px
        "26px": "1.625rem", // 26px
        "27px": "1.6875rem", // 27px
        "29px": "1.8125rem", // 29px
        "30px": "1.875rem", // 30px
        "31px": "1.9375rem", // 31px
        "33px": "2.0625rem", // 33px
        "34px": "2.125rem", // 34px
        "35px": "2.1875rem", // 35px
        "37px": "2.3125rem", // 37px
        "38px": "2.375rem", // 38px
        "39px": "2.4375rem", // 39px
        "41px": "2.5625rem", // 41px
      }
    },
  },
  plugins: [],
};
export default config;
