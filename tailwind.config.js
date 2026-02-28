/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {

      colors: {
        primary: "#4f46e5",
        accent: "#6366f1",
        dark: "#0f172a"
      },

      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
        smooth: "cubic-bezier(0.25, 0.8, 0.25, 1)"
      },

      keyframes: {

        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" }
        },

        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        },

        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 0px rgba(99,102,241,0.4)" },
          "50%": { boxShadow: "0 0 25px rgba(99,102,241,0.6)" }
        },

        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" }
        }

      },

      animation: {
        float: "float 6s ease-in-out infinite",
        gradient: "gradientShift 12s ease infinite",
        glow: "pulseGlow 3s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite"
      }

    },
  },
  plugins: [],
};