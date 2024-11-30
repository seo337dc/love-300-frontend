import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}", // 컴포넌트가 있는 경로
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: () => ({
      white: "#FFFF",
      grey100: "#505462",
      grey200: "#1B1C1F",
      gray300: "#ececec",
      gray400: "#9CA3AF",
      gray500: "#F7F6F3",
      grey12: "#111214",
      black: "#000000",

      blue1: "#E5FAFF",
      blue2: "#f0f8ff",

      screened_bg: "#dfe9ff",
      screened_text: "#0077f0",

      observing_bg: "#d2fae7",
      observing_text: "#009a88",

      done_bg: "#e4e4e6",
      done_text: "#505462",

      error_bg: "#ffeceb",
      error_text: "#ff4133",

      dnr_bg: "#ecd4ff",
      dnr_text: "#9747ff",

      netural2: "#8e8e8e",
      neutral3: "#bebebe",
      neutral4: "#e2e2e2",
    }),
  },
  plugins: [],
};
export default config;
