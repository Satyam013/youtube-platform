import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  HISTORY_ICON,
  HOME_ICON,
  LIKE_ICON,
  PLAYLIST_ICON,
  SUBSCRIPTION_ICON,
  WATCH_LATER_ICON,
  YOUR_VIDEOS_ICON,
} from "../../utils/constants/logoImage";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  const menuItemClass =
    "flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-400 hover:shadow-md  whitespace-nowrap overflow-hidden text-ellipsis dark:hover:bg-green-700  transition-all duration-300 transform hover:scale-105 hover:shadow-xl";

  return (
    <aside className="fixed top-14 left-0 w-44 h-[calc(100vh-56px)] overflow-y-hidden hover:overflow-y-scroll scrollbar-hide  shadow-md z-40 p-4 bg-gray-100 dark:bg-black text-black dark:text-white ">
      {/* Main Section */}
      <ul>
        <li>
          <Link to="/" className={menuItemClass}>
            <img
              alt="home_logo"
              src={HOME_ICON}
              className="h-4 w-4 dark:brightness-200 dark:invert transition duration-200"
            />
            Home
          </Link>
        </li>
        <li>
          <Link to="/same" className={menuItemClass}>
            🎬 Shorts
          </Link>
        </li>
        <li>
          <Link to="/same" className={menuItemClass}>
            <img
              alt="subs_logo"
              src={SUBSCRIPTION_ICON}
              className="h-4 w-4 dark:brightness-200 dark:invert transition duration-200"
            />
            Subscriptions
          </Link>
        </li>
      </ul>

      {/* You Section */}
      <h1 className="font-bold pt-5">You ➡️</h1>
      <ul>
        <li>
          <Link to="/same" className={menuItemClass}>
            <img
              alt="subs_logo"
              src={HISTORY_ICON}
              className="h-4 w-4 dark:brightness-200 dark:invert transition duration-200"
            />
            History
          </Link>
        </li>
        <li>
          <Link to="/same" className={menuItemClass}>
            <img
              alt="subs_logo"
              src={PLAYLIST_ICON}
              className="h-4 w-4 dark:brightness-200 dark:invert transition duration-200"
            />
            Playlists
          </Link>
        </li>
        <li>
          <Link to="/same" className={menuItemClass}>
            <img
              alt="subs_logo"
              src={YOUR_VIDEOS_ICON}
              className="h-4 w-4 dark:brightness-200 dark:invert transition duration-200"
            />
            Your videos
          </Link>
        </li>
        <li>
          <Link to="/same" className={menuItemClass}>
            <img
              alt="subs_logo"
              src={WATCH_LATER_ICON}
              className="h-4 w-4 dark:brightness-200 dark:invert transition duration-200"
            />
            Watch Later
          </Link>
        </li>
        <li>
          <Link to="/same" className={menuItemClass}>
            <img
              alt="subs_logo"
              src={LIKE_ICON}
              className="h-4 w-4 dark:brightness-200 dark:invert transition duration-200"
            />
            Liked videos
          </Link>
        </li>
      </ul>

      {/* Subscriptions  - User */}
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>
          <Link to="/same" className={menuItemClass}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/same" className={menuItemClass}>
            Shorts
          </Link>
        </li>
        <li>
          <Link to="/same" className={menuItemClass}>
            Videos
          </Link>
        </li>
        <li>
          <Link to="/same" className={menuItemClass}>
            Movies
          </Link>
        </li>
      </ul>

      {/* Explore */}
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>
          <Link to="/trending" className={menuItemClass}>
            Trending
          </Link>
        </li>
        <li>
          <Link to="/shopping" className={menuItemClass}>
            Shopping
          </Link>
        </li>
        <li>
          <Link to="/music" className={menuItemClass}>
            Music
          </Link>
        </li>
        <li>
          <Link to="/movies" className={menuItemClass}>
            Movies
          </Link>
        </li>
        <li>
          <Link to="/live" className={menuItemClass}>
            Live
          </Link>
        </li>
        <li>
          <Link to="/games" className={menuItemClass}>
            Gaming
          </Link>
        </li>
        <li>
          <Link to="/news" className={menuItemClass}>
            News
          </Link>
        </li>
        <li>
          <Link to="/sports" className={menuItemClass}>
            Sports
          </Link>
        </li>
        <li>
          <Link to="/courses" className={menuItemClass}>
            Courses
          </Link>
        </li>
        <li>
          <Link to="/fashion" className={menuItemClass}>
            Fashion & Beauty
          </Link>
        </li>
        <li>
          <Link to="/podcasts" className={menuItemClass}>
            Podcasts
          </Link>
        </li>
      </ul>

      {/* More From Youtube */}
      <h1 className="font-bold pt-5">More from Youtube</h1>
      <ul>
        <li>
          <Link to="/same" className={menuItemClass}>
            Youtube Premium
          </Link>
        </li>
        <li>
          <Link to="/same" className={menuItemClass}>
            Youtube Studio
          </Link>
        </li>
        <li>
          <Link to="/same" className={menuItemClass}>
            Youtube Music
          </Link>
        </li>
        <li>
          <Link to="/same" className={menuItemClass}>
            Youtube Kids
          </Link>
        </li>
      </ul>
      <hr className="border-t border-gray-700 my-2" />
      {/* Other */}
      <ul className="pt-2">
        <li>
          <Link to="/same" className={menuItemClass}>
            Settings
          </Link>
        </li>
        <li>
          <Link to="/same" className={menuItemClass}>
            Report history
          </Link>
        </li>
        <li>
          <Link to="/same" className={menuItemClass}>
            Help
          </Link>
        </li>
        <li>
          <Link to="/same" className={menuItemClass}>
            Send feedback
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
