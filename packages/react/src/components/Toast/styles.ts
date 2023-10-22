import { styled } from "../../styles";

export const ToastContainer = styled("div", {
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

  svg: {
    color: "$gray200",
    position: "absolute",
    top: "$4",
    right: "$4",
    cursor: "pointer",
  },
});
