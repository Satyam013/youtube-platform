import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../utils/slices/themeSlice";
import { DARK_THEME_ICON, LIGHT_THEME_ICON } from "../../utils/logoImage";

const ThemeChangeIcon = () => {
  const isDarkTheme = useSelector((store) => store.theme.isDarkTheme);
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(toggleTheme())} className="inline-block">
      <img
        alt="theme_icon"
        src={isDarkTheme ? LIGHT_THEME_ICON : DARK_THEME_ICON}
        className="h-8 w-8 cursor-pointer"
      />
    </button>
  );
};

export default ThemeChangeIcon;
