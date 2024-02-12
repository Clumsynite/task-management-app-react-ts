import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";
import { Tooltip } from "src/components/Common";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { toggle } from "src/reducers/darkMode";

const ThemeSwitcher = () => {
  const darkMode = useAppSelector((state) => state.dakrMode.value);
  const dispatch = useAppDispatch();

  return (
    <Tooltip content={`Turn the lights ${darkMode ? "on" : "off"}`}>
      <div
        onClick={() => dispatch(toggle())}
        className="cursor-pointer"
        // title={`Turn the lights ${darkMode ? "on" : "off"}`}
      >
        {darkMode ? <SunIcon size={24} /> : <MoonIcon size={24} />}
      </div>
    </Tooltip>
  );
};

export default ThemeSwitcher;
