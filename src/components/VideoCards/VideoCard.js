import {
  formatViewCount,
  formatPublishedTime,
  formatLikeCount,
  formatDuration,
} from "../../utils/format";

const VideoCard = ({ info, isAd }) => {
  const { snippet, statistics, contentDetails } = info;
  const { title, thumbnails, channelTitle, publishedAt } = snippet;

  return (
    <div className="w-[310px] rounded-md overflow-hidden shadow-md bg-white relative hover:bg-gray-200">
      {isAd && (
        <span className="absolute top-50 left-1 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">
          AD
        </span>
      )}
      <div className="">
        <img
          className="w-full h-40 object-cover"
          src={thumbnails?.medium?.url}
          alt={title}
        />
        {/* Duration Badge */}
        {contentDetails?.duration && (
          <span className=" absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
            {formatDuration(contentDetails.duration)}
          </span>
        )}
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-sm line-clamp-2 text-black">
          {title}
        </h3>
        <p className="text-xs text-gray-700 mt-1">{channelTitle}</p>
        <p className="text-xs text-gray-600 mt-0.5">
          {formatViewCount(statistics?.viewCount)} •{" "}
          {formatPublishedTime(publishedAt)}
          {statistics?.likeCount && (
            <span className="text-xs text-gray-500 mt-0.5 pl-2">
              {formatLikeCount(statistics.likeCount)}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
