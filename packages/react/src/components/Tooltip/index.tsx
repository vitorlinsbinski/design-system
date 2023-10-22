import { ComponentProps, ElementType } from "react";

import { Portal, Content } from "./styles";

import * as TooltipRadix from "@radix-ui/react-tooltip";

export function Tooltip({ children, text }: TooltipProps) {
  return (
    <TooltipRadix.Provider delayDuration={100}>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>

        <Portal>
          <Content>
            <span>{text}</span>
          </Content>
        </Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
}

export interface TooltipProps extends ComponentProps<typeof TooltipRadix.Root> {
  text: string;
}

Tooltip.displayName = "Tooltip";
