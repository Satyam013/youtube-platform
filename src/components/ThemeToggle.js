import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../utils/slices/themeSlice";
import {
  DARK_THEME_ICON,
  LIGHT_THEME_ICON,
} from "../utils/constants/logoImage";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  const iconSrc = theme === "light" ? DARK_THEME_ICON : LIGHT_THEME_ICON;
  const iconAlt =
    theme === "light" ? "Switch to dark mode" : "Switch to light mode";

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-2 hover:scale-x-150 hover:scale-y-150  transition ease-in-out"
    >
      <img src={iconSrc} alt={iconAlt} className="w-8 h-8" />
    </button>
  );
};

export default ThemeToggle;
