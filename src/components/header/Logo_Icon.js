import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/appSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { MENU_LOGO, YOUTUBE_LOGO } from "../../utils/imagesConstant";

const HeaderLogo = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

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
        src={MENU_LOGO}
      />
      <img
        onClick={handleLogoClick}
        className="h-8 ml-4 cursor-pointer"
        alt="youtube-logo"
        src={YOUTUBE_LOGO}
      />
    </div>
  );
};

export default HeaderLogo;
