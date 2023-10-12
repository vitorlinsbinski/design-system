import { styled, keyframes } from "../../styles";
import { Text } from "../Text";

export const MultiStepContainer = styled("div", {});

export const Label = styled(Text, {
  color: "$gray200",

  defaultVariants: {
    size: "xs",
  },
});

export const Steps = styled("div", {
  display: "grid",
  gap: "$2",
  marginTop: "$1",
  gridTemplateColumns: "repeat(var(--steps-size),1fr)",
});

export const Step = styled("div", {
  height: "$1",
  borderRadius: "$px",
  backgroundColor: "$gray600",
  transition: "all 0.4s",
});

export const StepDone = styled("div", {
  height: "$1",
  borderRadius: "$px",
  backgroundColor: "$gray600",
  width: "0%",
  transition: "width .6s ease-out",

  variants: {
    active: {
      true: {
        width: "100%",
        backgroundColor: "$gray100",
      },
    },

    reverse: {
      true: {
        width: "0%",
        backgroundColor: "$gray100",
      },
    },
  },
});
