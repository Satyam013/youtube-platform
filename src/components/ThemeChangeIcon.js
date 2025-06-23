import { useState } from "react";
import { DARK_THEME_ICON, LIGHT_THEME_ICON } from "../utils/constant";

const ThemeChangeIcon = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
          {!isDarkTheme ? (
            <img
              alt="dark_theme_logo"
              src={DARK_THEME_ICON}
              className="h-[50px]"
            />
          ) : (
            <img
              alt="light_theme_logo"
              src={LIGHT_THEME_ICON}
              className="h-[50px]"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default ThemeChangeIcon;
