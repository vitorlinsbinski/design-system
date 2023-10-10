import type { StoryObj, Meta } from "@storybook/react";

import { Text, TextProps } from "@ignite-ui/react";

export default {
  title: "Typography/Text",
  component: Text,

  args: {
    children:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt officiis explicabo laborum alias perspiciatis, voluptatum adipisci! Totam error necessitatibus aperiam architecto ex, cum eaque quos voluptates minima voluptatem inventore mollitia?",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong Text",
    as: "strong",
  },
};
