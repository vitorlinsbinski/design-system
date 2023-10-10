import type { StoryObj, Meta } from "@storybook/react";

import { Avatar, AvatarProps } from "@ignite-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  tags: ["autodocs"],

  args: {
    src: "https://github.com/vitorlinsbinski.png",
    alt: "Vitor Linsbinski",
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallBack: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
