import React from "react";
import { MoreVertical } from "lucide-react";

const VideoCardTrending = ({ info, isLive }) => {
  const { snippet, statistics = {}, id } = info;
  const {
    title,
    thumbnails,
    channelTitle,
    publishedAt,
    description,
    liveBroadcastContent,
  } = snippet;

  const timeSince = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    const intervals = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 },
      { label: "second", seconds: 1 },
    ];
    for (let i of intervals) {
      const count = Math.floor(seconds / i.seconds);
      if (count > 0) return `${count} ${i.label}${count > 1 ? "s" : ""} ago`;
    }
    return "just now";
  };

  return (
    <div className="flex w-full gap-3 pb-6 border-b border-gray-300 dark:border-gray-700 bg-white rounded-lg shadow-md p-3">
      {/* Thumbnail */}
      <img
        src={thumbnails?.medium?.url}
        alt={title}
        className="w-64 h-36 rounded-lg object-cover"
      />

      {/* Video Info */}
      <div className="flex flex-col flex-1 relative -ml-1 text-black">
        {/* Title + Live badge */}
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold line-clamp-2 pr-6">{title}</h3>
          {isLive && (
            <span className="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
              🔴 LIVE
            </span>
          )}
        </div>

        {/* Channel + views + time */}
        <div className="text-sm mt-1">
          {channelTitle} •{" "}
          {isLive && statistics?.concurrentViewers ? (
            <>
              👀{" "}
              {Intl.NumberFormat("en", { notation: "compact" }).format(
                statistics.concurrentViewers
              )}{" "}
              watching now
            </>
          ) : statistics?.viewCount ? (
            <>
              {Intl.NumberFormat("en", { notation: "compact" }).format(
                statistics.viewCount
              )}{" "}
              views • {timeSince(publishedAt)}
            </>
          ) : (
            <>Live stream</>
          )}
        </div>

        {/* Description */}
        <p className="text-sm mt-2 line-clamp-2 pr-6">{description}</p>
      </div>
    </div>
  );
};

export default VideoCardTrending;
