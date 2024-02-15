import { Tooltip } from "src/components/Common";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { isDarkMode, toggle } from "src/reducers/darkMode";
import { MoonIcon, SunIcon } from "../Icons";

const ThemeSwitcher = () => {
  const darkMode = useAppSelector(isDarkMode);
  const dispatch = useAppDispatch();

  return (
    <Tooltip content={`Turn the lights ${darkMode ? "on" : "off"}`}>
      <div
        onClick={() => dispatch(toggle())}
        className="cursor-pointer"
      >
        {darkMode ? <SunIcon size={24} /> : <MoonIcon size={24} />}
      </div>
    </Tooltip>
  );
};

export default ThemeSwitcher;
