import { TooltipProps, Tooltip as NextUiTooltip } from "@nextui-org/react";
import { useAppSelector } from "src/hooks";

const Tooltip = (props: TooltipProps) => {
  const darkMode = useAppSelector((state) => state.dakrMode.value);

  return (
    <NextUiTooltip className={`${darkMode ? "dark" : ""} text-foreground bg-background ${props.className}`} {...props}>
      {props.children}
    </NextUiTooltip>
  );
};

export default Tooltip;
