import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dopejam: ["DOPEJAM"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
} satisfies Config;
