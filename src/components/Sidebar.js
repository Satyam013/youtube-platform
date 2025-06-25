import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  HISTORY_ICON,
  HOME_ICON,
  LIKE_ICON,
  PLAYLIST_ICON,
  SHORTS_ICON,
  SUBSCRIPTION_ICON,
  WATCH_LATER_ICON,
  YOUR_VIDEOS_ICON,
} from "../utils/logoImage";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  const menuItemClass =
    "flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-200 hover:shadow-md transition whitespace-nowrap overflow-hidden text-ellipsis";

  return (
    <aside className="fixed top-14 left-0 w-46 h-[calc(100vh-56px)] overflow-y-hidden hover:overflow-y-scroll scrollbar-hide bg-white shadow-md z-40 p-4">
      {/* Main Section */}
      <ul>
        <li>
          <Link to="/" className={menuItemClass}>
            <img alt="home_logo" src={HOME_ICON} className="h-4 w-4" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/shorts" className={menuItemClass}>
            🎬 Shorts
          </Link>
        </li>
        <li>
          <Link to="/subscription" className={menuItemClass}>
            <img alt="subs_logo" src={SUBSCRIPTION_ICON} className="h-4 w-4" />
            Subscriptions
          </Link>
        </li>
      </ul>

      {/* You Section */}
      <h1 className="font-bold pt-5">You ➡️</h1>
      <ul>
        <li>
          <Link to="/history" className={menuItemClass}>
            <img alt="subs_logo" src={HISTORY_ICON} className="h-4 w-4" />
            History
          </Link>
        </li>
        <li>
          <Link to="/playlist" className={menuItemClass}>
            <img alt="subs_logo" src={PLAYLIST_ICON} className="h-4 w-4" />
            Playlists
          </Link>
        </li>
        <li>
          <Link to="/your-videos" className={menuItemClass}>
            <img alt="subs_logo" src={YOUR_VIDEOS_ICON} className="h-4 w-4" />
            Your videos
          </Link>
        </li>
        <li>
          <Link to="/watch-later" className={menuItemClass}>
            <img alt="subs_logo" src={WATCH_LATER_ICON} className="h-4 w-4" />
            Watch Later
          </Link>
        </li>
        <li>
          <Link to="/liked" className={menuItemClass}>
            <img alt="subs_logo" src={LIKE_ICON} className="h-4 w-4" />
            Liked videos
          </Link>
        </li>
      </ul>

      {/* Subscriptions */}
      {/* <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>
          <Link to="/home" className={menuItemClass}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/shorts" className={menuItemClass}>
            Shorts
          </Link>
        </li>
        <li>
          <Link to="/videos" className={menuItemClass}>
            Videos
          </Link>
        </li>
        <li>
          <Link to="/movies" className={menuItemClass}>
            Movies
          </Link>
        </li>
      </ul> */}

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
          <Link to="/premium" className={menuItemClass}>
            Youtube Premium
          </Link>
        </li>
        <li>
          <Link to="/studio" className={menuItemClass}>
            Youtube Studio
          </Link>
        </li>
        <li>
          <Link to="/music" className={menuItemClass}>
            Youtube Music
          </Link>
        </li>
        <li>
          <Link to="/kids" className={menuItemClass}>
            Youtube Kids
          </Link>
        </li>
      </ul>

      {/* Other */}
      <ul className="pt-5">
        <li>
          <Link to="/settings" className={menuItemClass}>
            Settings
          </Link>
        </li>
        <li>
          <Link to="/report-history" className={menuItemClass}>
            Report history
          </Link>
        </li>
        <li>
          <Link to="/help" className={menuItemClass}>
            Help
          </Link>
        </li>
        <li>
          <Link to="/feedback" className={menuItemClass}>
            Send feedback
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
