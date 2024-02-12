import { TooltipProps, Tooltip as NextUiTooltip } from "@nextui-org/react";
import { useAppSelector } from "src/hooks";
import { isDarkMode } from "src/reducers/darkMode";

const Tooltip = (props: TooltipProps) => {
  const darkMode = useAppSelector(isDarkMode);

  return (
    <NextUiTooltip className={`${darkMode ? "dark" : ""} text-foreground bg-background ${props.className}`} {...props}>
      {props.children}
    </NextUiTooltip>
  );
};

export default Tooltip;
