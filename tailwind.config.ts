import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#f5f5f5",
            foreground: "#11181C",
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
            success: "#2E8B57"
          },
        },
        dark: {
          colors: {
            background: "#141414",
            foreground: "#ECEDEE",
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
            success: "#14ff14"
          },
        },
      },
    }),
  ],
} satisfies Config;
