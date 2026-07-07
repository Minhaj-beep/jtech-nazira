/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#07111F",
          50: "#8FA5C2",
          100: "#7C95B7",
          200: "#5A78A0",
          300: "#3D5A80",
          400: "#243A58",
          500: "#0F1D30",
          600: "#0B1726",
          700: "#0A1420",
          800: "#08131C",
          900: "#07111F",
          950: "#040A12",
        },
        techblue: {
          DEFAULT: "#0877D1",
          50: "#E8F3FD",
          100: "#CBE5FA",
          200: "#96CBF5",
          300: "#5FAEEE",
          400: "#3491E3",
          500: "#0877D1",
          600: "#0661AB",
          700: "#054C85",
          800: "#03375F",
          900: "#022543",
        },
        cyan: {
          DEFAULT: "#20C7F4",
          50: "#EAFAFF",
          100: "#CDF3FE",
          200: "#9CE7FC",
          300: "#69DBFA",
          400: "#3FCFF6",
          500: "#20C7F4",
          600: "#149BC1",
          700: "#0F7591",
          800: "#0A4F63",
          900: "#062F3B",
        },
        ink: "#0B1726",
        mist: "#F4F8FC",
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "'Manrope'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(7,17,31,0.04), 0 8px 24px -8px rgba(7,17,31,0.10)",
        "card-hover": "0 4px 8px rgba(7,17,31,0.06), 0 16px 40px -12px rgba(8,119,209,0.22)",
        glow: "0 0 0 1px rgba(32,199,244,0.25), 0 0 32px -4px rgba(32,199,244,0.35)",
      },
      backgroundImage: {
        "circuit-lines":
          "linear-gradient(rgba(32,199,244,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(32,199,244,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        circuit: "42px 42px",
      },
      keyframes: {
        "trace-draw": {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        blink: "blink 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
