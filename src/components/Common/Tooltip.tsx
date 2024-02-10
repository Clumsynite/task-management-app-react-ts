import useDarkMode from "@fisch0920/use-dark-mode";
import { TooltipProps, Tooltip as NextUiTooltip } from "@nextui-org/react";

const Tooltip = (props: TooltipProps) => {
  const darkMode = useDarkMode(false);

  return (
    <NextUiTooltip
      className={`${darkMode.value ? "dark" : ""} text-foreground bg-background ${props.className}`}
      {...props}
    >
      {props.children}
    </NextUiTooltip>
  );
};

export default Tooltip;
