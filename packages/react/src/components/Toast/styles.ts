import { keyframes, styled } from "../../styles";

import * as Toast from "@radix-ui/react-toast";

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + 25px))` },
  to: { transform: "translateX(0)" },
});

const hide = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

export const ToastRoot = styled(Toast.Root, {
  width: "100%",
  maxWidth: "22.5rem",
  padding: "$3 0 $3 $5",
  display: "flex",
  flexDirection: "column",
  gap: "$1",
  backgroundColor: "$gray800",
  borderRadius: "$sm",
  border: "1px solid $colors$gray600",
  position: "relative",

  p: {
    color: "$gray200",
  },

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
});

export const ToastClose = styled(Toast.Close, {
  position: "absolute",

  color: "$gray200",
  top: "$4",
  right: "$4",
  cursor: "pointer",
});

export const ToastViewport = styled(Toast.Viewport, {
  position: "fixed",
  bottom: 0,
  right: 0,
  display: "flex",
  flexDirection: "column",
  padding: 25,
  gap: 10,
  width: 390,
  maxWidth: "100vw",
  margin: 0,
  listStyle: "none",
  zIndex: 2147483647,
  outline: "none",
});
