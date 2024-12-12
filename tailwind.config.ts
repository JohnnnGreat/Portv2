import type { Config } from "tailwindcss";

export default {
   content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
   theme: {
      extend: {
         colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",
         },
         fontFamily: {
            Mark: ["Mark Pro", "sans-serif"],
            Circular: ["Circular Std Book", "sans-serif"],
            Din: ["D-DIN Condensed", "sans-serif"],
         },
         backgroundImage: {
            "text-gradient": "linear-gradient(90deg, #A855F7, #EC4899)",
         },
         animation: {
            "gradient-rotate": "gradient-rotation 3s linear infinite",
         },
         keyframes: {
            "gradient-rotation": {
               "0%": { "background-position": "0% 50%" },
               "50%": { "background-position": "100% 50%" },
               "100%": { "background-position": "0% 50%" },
            },
         },
         transitionProperty: {
            colors: "color, background-color, border-color, text-decoration-color, fill, stroke",
         },
      },
   },
   plugins: [],
} satisfies Config;
