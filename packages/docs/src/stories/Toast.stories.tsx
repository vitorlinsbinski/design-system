import type { StoryObj, Meta } from "@storybook/react";

import { Button, Toast, ToastProps } from "@vitor-ignite-ui/react";
import { useState } from "react";

export default {
  title: "Floaters/Toast",
  component: Toast,

  args: {
    title: "Agendamento realizado",
    description: "Quarta-feira, 23 de Outubro às 16h",
    open: true,
  },
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {
  args: {},
};

export const Demo: StoryObj<ToastProps> = {
  args: {},

  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button onClick={() => setOpen((state) => !state)}>
            Confirm date
          </Button>
          {Story({
            args: {
              open: open,
              title: "Agendamento realizado",
              description: "Quarta-feira, 23 de Outubro às 16h",
              onOpenChange: setOpen,
            },
          })}
        </>
      );
    },
  ],
};
