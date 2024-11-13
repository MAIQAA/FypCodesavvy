/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'spin-slow': 'spin 50s linear infinite',
        'tilt-in-bottom-1': 'tilt-in-bottom-1 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'tilt-in-bottom-2': 'tilt-in-bottom-2 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.3s both',
        'tilt-in-bottom-3': 'tilt-in-bottom-3 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.6s both',
        'slideAndReset': 'slideAndReset 0.4s ease-out',
      },
      keyframes: {
        'spin-slow' : {
          '0%': {
            transform : 'rotateX(90deg)',
          },
          '100%': {
            transform : 'rotateX(0deg)',
          }
        },
        'tilt-in-bottom-1': {
          '0%': {
            transform: 'rotateX(15deg) translateY(100px) skewY(15deg)',
            opacity: '0',
          },
          '100%': {
            transform: 'rotateX(0deg) translateY(0) skewY(0deg)',
            opacity: '1',
          },
        },
        'tilt-in-bottom-2': {
          '0%': {
            transform: 'rotateX(15deg) translateY(100px) skewY(15deg)',
            opacity: '0',
          },
          '100%': {
            transform: 'rotateX(0deg) translateY(0) skewY(0deg)',
            opacity: '1',
          },
        },
        'tilt-in-bottom-3': {
          '0%': {
            transform: 'rotateX(15deg) translateY(150px) skewY(15deg)',
            opacity: '0',
          },
          '100%': {
            transform: 'rotateX(0deg) translateY(0) skewY(0deg)',
            opacity: '1',
          },
        },
        'slideAndReset' : {
          '0%': { transform: 'translate(0, 0)' },
          '40%': { transform: 'translate(120%, -90%)' },
          '60%': { transform: 'translate(500%, 500%)' },
          '80%': { transform: 'translate(-500%,500%)' },
          '100%': { transform: 'translate(0%, 0%) ' },
        },
      },
    },
  },
  plugins: [],
};
