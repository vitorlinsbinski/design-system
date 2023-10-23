import { ComponentProps, ElementType } from "react";
import { ToastClose, ToastRoot, ToastViewport } from "./styles";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { X } from "phosphor-react";

import * as ToastRadix from "@radix-ui/react-toast";

export function Toast({ title, description, open, ...props }: ToastProps) {
  return (
    <ToastRadix.Provider swipeDirection="right">
      <ToastRoot open={open} {...props}>
        <ToastRadix.Title>
          <Heading size={"sm"}>{title}</Heading>
        </ToastRadix.Title>

        <ToastRadix.Description>
          <Text size={"sm"}>{description}</Text>
        </ToastRadix.Description>

        <ToastClose asChild>
          <X size={20} />
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </ToastRadix.Provider>
  );
}

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string;
  description: string;
  open: boolean;
}

Toast.displayName = "Toast";
