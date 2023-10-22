import { ComponentProps, ElementType } from "react";
import { ToastContainer } from "./styles";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { X } from "phosphor-react";

export function Toast({ children }: ToastProps) {
  return (
    <ToastContainer>
      <Heading size={"sm"}>Agendamento realizado</Heading>

      <Text size={"sm"}>{children}</Text>

      <X size={20} />
    </ToastContainer>
  );
}

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  as?: ElementType;
  children: string;
}

Toast.displayName = "Toast";
