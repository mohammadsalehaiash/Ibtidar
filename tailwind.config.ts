import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ألوان مأخوذة من شعار ابتدار
        navy: { DEFAULT: "#12293B", 700: "#1A3850", 600: "#24496A" },
        brand: { DEFAULT: "#2373D2", 600: "#1C62B5", 50: "#EEF5FD", 100: "#DCEAFB" },
        mist: "#F6F8FB",
        line: "#E4EAF1",
        muted: "#5B6B7C",
      },
      fontFamily: { sans: ["var(--font-plex)", "system-ui", "sans-serif"] },
      boxShadow: {
        card: "0 1px 2px rgba(18,41,59,.04), 0 8px 24px -12px rgba(18,41,59,.12)",
        lift: "0 2px 4px rgba(18,41,59,.05), 0 20px 40px -16px rgba(18,41,59,.22)",
      },
    },
  },
  plugins: [],
};
export default config;
