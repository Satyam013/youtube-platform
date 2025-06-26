import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../utils/slices/appSlice";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MENU_LOGO,
  MENU_LOGO_DARK,
  YOUTUBE_LOGO,
  YOUTUBE_LOGO_DARK,
} from "../../utils/constants/imagesConstant";

const HeaderLogo = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const theme = useSelector((state) => state.theme.mode);

  const menu_logo_icon = theme === "dark" ? MENU_LOGO_DARK : MENU_LOGO;
  const youtube_logo_icon = theme === "dark" ? YOUTUBE_LOGO_DARK : YOUTUBE_LOGO;

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.location.reload();
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex items-center col-span-1">
      <img
        onClick={() => dispatch(toggleMenu())}
        className="h-8 w-8 cursor-pointer"
        alt="menu"
        src={menu_logo_icon}
      />

      <img
        onClick={handleLogoClick}
        className="h-8 w-15 dark:h-12 dark:w-1/2 dark:ml-8 ml-4 cursor-pointer transition duration-300 dark:brightness-200 dark:contrast-150 "
        alt="youtube-logo"
        src={youtube_logo_icon}
      />
    </div>
  );
};

export default HeaderLogo;
