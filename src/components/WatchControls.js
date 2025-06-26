import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  likeVideo,
  dislikeVideo,
  toggleSubscribe,
  toggleSave,
  trackShare,
  trackDownload,
} from "../utils/slices/watchActionsSlice";
import toast from "react-hot-toast";

const formatNumber = (num) => {
  if (!num) return "0";
  return new Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short",
  }).format(num);
};

const WatchControls = ({
  videoId,
  channelId,
  logo,
  channelTitle,
  subscribers,
  views,
  likes,
}) => {
  const dispatch = useDispatch();
  const { likedVideos, dislikedVideos, subscribedChannels, savedVideos } =
    useSelector((state) => state.watchActions);

  const isLiked = likedVideos.includes(videoId);
  const isDisliked = dislikedVideos.includes(videoId);
  const isSubscribed = subscribedChannels.includes(channelId);
  const isSaved = savedVideos.includes(videoId);

  return (
    <div className="mt-4 border-b pb-4 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      {/* Left: Channel Info */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="channel"
          className="w-10 h-10 rounded-full border dark:border-gray-500"
        />
        <div>
          <p className="font-semibold text-black dark:text-white">
            {channelTitle}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {formatNumber(subscribers)} subscribers
          </p>
        </div>

        <button
          onClick={() => {
            dispatch(toggleSubscribe(channelId));
            toast.success(isSubscribed ? "Unsubscribed" : "Subscribed!");
          }}
          className={`ml-4 px-4 py-1 text-white rounded-full text-sm ${
            isSubscribed ? "bg-gray-700" : "bg-red-600 hover:bg-red-700"
          } transition`}
        >
          {isSubscribed ? "Subscribed" : "Subscribe"}
        </button>

        {isSubscribed && (
          <button className="ml-2 text-xl cursor-pointer">🔔</button>
        )}
      </div>

      {/* Right: Stats and Interaction Buttons */}
      <div className="flex items-center gap-2 flex-wrap text-sm">
        <span className="text-gray-700 dark:text-gray-300">
          👁️ {formatNumber(views)} views
        </span>

        <div className="flex bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <button
            onClick={() => dispatch(likeVideo(videoId))}
            className={`px-4 py-1 ${
              isLiked
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            👍{" "}
            <span className="text-gray-700 dark:text-gray-300">
              {formatNumber(likes)} likes
            </span>
          </button>

          <span className="w-[1px] bg-gray-400 h-4" />
          <button
            onClick={() => dispatch(dislikeVideo(videoId))}
            className={`px-4 py-1 ${
              isDisliked
                ? "bg-red-600 text-white"
                : "hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            👎
          </button>
        </div>

        <button
          onClick={() => {
            dispatch(trackShare(videoId));
            toast("Link copied to clipboard!");
          }}
          className="px-4 py-1 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          🔄 Share
        </button>

        <button
          onClick={() => {
            dispatch(trackDownload(videoId));
            toast("Download started");
          }}
          className="px-4 py-1 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          ⬇ Download
        </button>

        <button
          onClick={() => {
            dispatch(toggleSave(videoId));
            toast(
              isSaved ? "Removed from Watch Later" : "Saved to Watch Later"
            );
          }}
          className="px-4 py-1 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          💾 {isSaved ? "Saved" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default WatchControls;
