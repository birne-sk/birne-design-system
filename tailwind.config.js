/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/src/**/*.{ts,tsx}"],
  presets: [require("./dist/tailwind/preset.js")],
};
