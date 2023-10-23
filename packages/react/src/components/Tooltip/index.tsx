import { ComponentProps, ReactNode } from "react";

import { Portal, Content } from "./styles";

import * as TooltipRadix from "@radix-ui/react-tooltip";

export function Tooltip({ children, date, available }: TooltipProps) {
  const formattedDate = new Intl.DateTimeFormat("pt-br", {
    day: "numeric",
    month: "long",
  })
    .format(date)
    .toString();

  return (
    <TooltipRadix.Provider delayDuration={100}>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>

        <Portal>
          <Content>
            <span>
              {formattedDate} - {available ? "Disponível" : "Indisponível"}
            </span>
          </Content>
        </Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
}

export interface TooltipProps extends ComponentProps<typeof TooltipRadix.Root> {
  children?: ReactNode;
  date: Date;
  available: boolean;
}

Tooltip.displayName = "Tooltip";
