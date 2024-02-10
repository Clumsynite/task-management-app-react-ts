import useDarkMode from "@fisch0920/use-dark-mode";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";
import { Tooltip } from "@nextui-org/react";

const ThemeSwitcher = () => {
  const darkMode = useDarkMode(false);

  return (
    <Tooltip
      content={`Turn the lights ${darkMode.value ? "on" : "off"}`}
      className={`${!darkMode.value ? "dark" : ""} text-foreground bg-background`}
    >
      <div
        onClick={darkMode.toggle}
        className="cursor-pointer"
        // title={`Turn the lights ${darkMode.value ? "on" : "off"}`}
      >
        {darkMode.value ? <SunIcon size={24} /> : <MoonIcon size={24} />}
      </div>
    </Tooltip>
  );
};

export default ThemeSwitcher;
