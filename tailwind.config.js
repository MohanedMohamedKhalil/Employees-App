/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        screen: "100dvh", //ovrride h-screen : 100vh to dynamic viewport height
      },
      fontFamily: {
        roboto: "Roboto, sans-serif",
        lato: "'Lato', sans-serif",
      },
    },
  },
  plugins: [],
};
