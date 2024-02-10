import useDarkMode from "@fisch0920/use-dark-mode";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";

const ThemeSwitcher = () => {
  const darkMode = useDarkMode(false);

  return (
    <div
      onClick={darkMode.toggle}
      className="cursor-pointer"
      title={`Turn the lights ${darkMode.value ? "on" : "off"}`}
    >
      {darkMode.value ? <SunIcon size={24} /> : <MoonIcon size={24} />}
    </div>
  );
};

export default ThemeSwitcher;
