import { useDispatch, useSelector } from "react-redux";
import {
  likeVideo,
  dislikeVideo,
  toggleSubscribe,
  toggleSave,
} from "../utils/slices/watchActionsSlice";

const WatchControls = ({ videoId, channelId }) => {
  const dispatch = useDispatch();
  const { likedVideos, dislikedVideos, subscribedChannels, savedVideos } =
    useSelector((state) => state.watchActions);

  const isLiked = likedVideos.includes(videoId);
  const isDisliked = dislikedVideos.includes(videoId);
  const isSubscribed = subscribedChannels.includes(channelId);
  const isSaved = savedVideos.includes(videoId);

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => dispatch(likeVideo(videoId))}
        className={`px-3 py-1 rounded-full ${
          isLiked ? "bg-blue-600 text-white" : "bg-gray-300"
        }`}
      >
        👍 Like
      </button>

      <button
        onClick={() => dispatch(dislikeVideo(videoId))}
        className={`px-3 py-1 rounded-full ${
          isDisliked ? "bg-red-600 text-white" : "bg-gray-300"
        }`}
      >
        👎 Dislike
      </button>

      <button
        onClick={() => dispatch(toggleSubscribe(channelId))}
        className={`px-4 py-1 rounded-full ${
          isSubscribed ? "bg-gray-700 text-white" : "bg-red-600 text-white"
        }`}
      >
        {isSubscribed ? "Unsubscribe" : "Subscribe"}
      </button>

      <button
        onClick={() => dispatch(toggleSave(videoId))}
        className={`px-3 py-1 rounded-full ${
          isSaved ? "bg-green-600 text-white" : "bg-gray-300"
        }`}
      >
        💾 Save
      </button>
    </div>
  );
};

export default WatchControls;
