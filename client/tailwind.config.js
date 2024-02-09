/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Greyscale: "#FDFDFD",
        Greyscale200: "#F3F3ED",
        Greyscale400: "#D0D0C8",
        Greyscale700: "#656558",
        Red100: "#F9E3DC",
        Red500: "#CB4A22",
        Red700: "#9D391A",
        Green100: "#DAE3D9",
        Green500: "#425740",
        Green700: "#2D3B2B",
        Blue100: "#DAE4F1",
        Blue500: "#315C90",
        Blue700: "#111F31",
        Yellow100: "#F9F2D7",
        Yellow500: "#DFBF34",
        Yellow700: "#C6A71F",
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
