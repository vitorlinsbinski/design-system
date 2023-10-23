import type { StoryObj, Meta } from "@storybook/react";

import { Button, Tooltip, TooltipProps } from "@vitor-ignite-ui/react";

export default {
  title: "Floaters/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],

  argTypes: {
    children: { control: { type: "none" } },
  },

  args: {
    date: new Date(),
    available: true,
  },
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {
  args: {
    children: <Button variant={"tertiary"}>26</Button>,
  },
};
