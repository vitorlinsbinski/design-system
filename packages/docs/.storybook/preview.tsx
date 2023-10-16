import type { Preview } from "@storybook/react";
import React from "react";

import { themes } from "@storybook/theming";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "dark",
    },
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;