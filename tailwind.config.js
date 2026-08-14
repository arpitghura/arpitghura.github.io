module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
    "index.html",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        // Core dark palette
        bg_primary: "#080808",
        bg_secondary: "#0f0f0f",
        bg_tertiary: "#161616",
        bg_card: "#111111",
        surface: "#1a1a1a",

        // Glass surfaces
        glass_light: "rgba(255, 255, 255, 0.04)",
        glass_border: "rgba(255, 255, 255, 0.08)",

        // Brand accents (kept from original)
        accent_green: "#55bb97",
        accent_green_dim: "#4eaf8ddd",
        accent_green_faint: "rgba(85, 187, 151, 0.12)",
        accent_cyan: "#1fbabf",
        accent_cyan_dim: "#1fbabfdd",

        // Text hierarchy
        text_primary: "#f0f0f0",
        text_secondary: "#a0a0a0",
        text_muted: "#606060",
        text_accent: "#55bb97",

        // Legacy compatibility (keep existing classes working)
        gray_900_02: "#0f0f0f",
        blue_gray_100: "#d9d9d9",
        gray_500: "#606060",
        blue_gray_100_33: "#d9d9d933",
        gray_900: "#080808",
        gray_900_01: "#0f0f0f",
        light_green_300: "#9cee8c",
        green_A200: "#55bb97",
        white_A700_dd: "#ffffffdd",
        green_A200_dd: "#4eaf8ddd",
        cyan_400_dd: "#1fbabfdd",
        blue_gray_900_01: "#161616",
        blue_gray_900_cc: "#111111cc",
        blue_gray_900: "#161616",
        white_A700: "#f0f0f0",
        cyan_400: "#1fbabf",
        blue_900: "#0d1117",
        green_800: "#3F4E4F",
        green_200: "#D9E4E0",
        green_200_dd: "#D9E4E0dd",
        gray_200: "#F0F4F8",
        gray_700: "#A5C8D6",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        spartan: ["League Spartan", "sans-serif"],
        dancingscript: ["Dancing Script", "cursive"],
      },
      animation: {
        "bounce-slow": "bounce 1s linear 2",
        "fade-in-up": "fadeInUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "slide-in-left": "slideInLeft 0.5s ease forwards",
        "typewriter": "typewriter 0.05s steps(1) forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(85, 187, 151, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(85, 187, 151, 0.5)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        DEFAULT: "10px",
        lg: "20px",
        xl: "40px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        glow_green: "0 0 30px rgba(85, 187, 151, 0.25)",
        glow_green_sm: "0 0 15px rgba(85, 187, 151, 0.15)",
        card: "0 4px 24px rgba(0, 0, 0, 0.5)",
        "card-hover": "0 12px 40px rgba(0, 0, 0, 0.7), 0 0 20px rgba(85, 187, 151, 0.1)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
