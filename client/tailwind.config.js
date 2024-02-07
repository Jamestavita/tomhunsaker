/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Greyscale: "#FDFDFD",
        Dark: "#051C09",
        Light: "#F8F8F8",
        "Hero-Purple": "#5A43F0",
        Lime: "#CAFF87",
        Hazel: "#B79F71",
        Lavender: "#E5DFFA",
        Iceberg: "#C2DEEC",
        Violet: "#2E2873",
        Nature: "#02B68A",
        Emerald: "#024F4A",
        Energy: "#FD542F",
        Sand: "#EBE6DC",
      },
      screens: {
        xs: "375px",
        // => @media (min-width: 375px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        base: "960px",
        // => @media (min-width: 960px) { ... }

        lg: "1440px",
        // => @media (min-width: 1024px) { ... }

        xl: "1680px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
