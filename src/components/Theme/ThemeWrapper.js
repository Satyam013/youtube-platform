// src/theme/ThemeWrapper.js
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ThemeWrapper = ({ children }) => {
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      {children}
    </div>
  );
};

export default ThemeWrapper;
