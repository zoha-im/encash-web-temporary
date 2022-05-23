module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  important: "#root",
  plugins: [require("tw-elements/dist/plugin")],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: {
        100: "#2dc46c",
        accent1: "#4ccd82",
        accent2: "#d5f3e2",
        accent3: "#26a75c",
        accent4: "#124e2b",
      },
      neutral: {
        100: "#ffffff",
        95: "#ebedf2",
        90: "#e6e8f0",
        80: "#c1c4d6",
        60: "#8f95b2",
        40: "#696f8c",
        20: "#474d66",
        0: "#101840",
      },

      gray: {
        400: "#a1a1aa",
        100: "#f4f4f5",
        100: "#f3f4f6",
      },

      "primary-green": {
        500: "#22c55e",
        100: "#dcfce7",
      },
      status: {
        "blue-600": "#2563eb",
        "blue-100": "#dbeafe",
        "rose-500": "#f43f5e",
        "rose-100": "#ffe4e6",
        "amber-400": "#fbbf24",
        "amber-100": "#fef3c7",
        "violet-500": "#8b5cf6",
        "violet-100": "#ede9fe",
        "cyan-500": "#06b6d4",
        "cyan-100": "#cffafe",
      },

      error: "#dc2626",
      warning: "#fb8c00",
      success: "#16a34a",
      info: "#2563eb",
    },

    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
}
