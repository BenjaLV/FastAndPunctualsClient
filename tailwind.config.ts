import type { Config } from "tailwindcss";
import {nextui} from '@nextui-org/react'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3D1DF3",
        secondary: "#00EA77",
        alternative: "#C7FFB1",
        textColor: "#3D1DF3",
        cardColor: "#FFFFFF",
        deliverydp: "#C7FFB1",
        inprogress: "#F8E169",
        inactive: "rgba(61, 29, 243, 0.4)",
      },
      screens: {
        xs: { max: "639px" },
        sm: { min: "640px", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px", max: "1279px" },
        xl: { min: "1280px", max: "2001px" },
      },
    },
  },
<<<<<<< HEAD
  plugins: [],
  compilerOptions: {
    // ...
    types: ["js-cookie"],
    // ...
  },
=======
  plugins: [nextui()],
>>>>>>> f1611fdcafad899b93cfde9b6101a1c312e092e2
};
export default config;
