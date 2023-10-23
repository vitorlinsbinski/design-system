import { styled, keyframes } from "../../styles";

import * as Tooltip from "@radix-ui/react-tooltip";

export const Portal = styled(Tooltip.Portal, {});

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideDownClose = keyframes({
  "0%": { opacity: 1, transform: "translateY(0)" },
  "100%": { opacity: 0, transform: "translateY(2px)" },
});

export const Content = styled(Tooltip.Content, {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  color: "$gray100",
  borderRadius: "$md",
  margin: "2px 0",
  position: "relative",
  boxShadow: "4px 16px 24px 0px rgba(0, 0, 0, 0.25)",

  span: {
    fontFamily: "Inter, sans-serif",
    fontSize: "$sm",
    fontWeight: "$medium",
  },

  "&::before": {
    width: 0,
    height: 0,
    border: "10px solid transparent",
    borderRightColor: "$gray900",
    content: "",
    transform: "rotate(270deg)",
    bottom: "-20px",
    left: "97px",
    position: "absolute",
    boxShadow: "4px 16px 24px 0px rgba(0, 0, 0, 0.25)",
  },

  animationDuration: "200ms",

  '&[data-state="delayed-open"]': {
    animationName: slideUpAndFade,
  },

  '&[data-state="closed"]': {
    animationName: slideDownClose,
  },
});
