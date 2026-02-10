import type { Preview } from "@storybook/react";
import "../dist/css/variables.css";
import "../dist/css/fonts.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#FFFFFF" },
        { name: "sand", value: "#EFEEE6" },
        { name: "dark", value: "#221924" },
      ],
    },
  },
};

export default preview;
