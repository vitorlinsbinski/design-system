import type { StoryObj, Meta } from "@storybook/react";

import { Toast, ToastProps } from "@vitor-ignite-ui/react";

export default {
  title: "Floaters/Toast",
  component: Toast,
  tags: ["autodocs"],

  args: {
    children: "Quarta-feira, 23 de Outubro às 16h",
  },
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {
  args: {
    children: "Quarta-feira, 23 de Outubro às 16h",
  },
};
