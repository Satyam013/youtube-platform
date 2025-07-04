import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_LIVE_API } from "../../utils/constants/constant";
import VideoCardTrending from "../VideoCards/VideoCardTrending";
import useSafeYoutubeFetch from "../../hooks/useSafeYoutubeFetch";

const Live = () => {
  const [liveVideos, setLiveVideos] = useState([]);
  const safeFetch = useSafeYoutubeFetch();

  useEffect(() => {
    const fetchLive = async () => {
      const searchData = await safeFetch(YOUTUBE_LIVE_API);
      if (!searchData) return;

      if (!searchData.items?.length) {
        console.warn("No live videos found.");
        setLiveVideos([]);
        return;
      }

      setLiveVideos(searchData.items);
    };

    fetchLive();
  }, []);

  if (!liveVideos.length) {
    return (
      <div className="p-4 bg-white text-black min-h-screen flex items-center justify-center dark:bg-black dark:text-white">
        <p className="text-gray-500 dark:text-gray-900">
          No live streams currently available.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white text-black min-h-screen max-w-6xl dark:bg-black transition-all duration-300 transform hover:scale-">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">🔴 Live Now</h1>
      <div className="flex flex-col gap-6 w-full">
        {liveVideos.map((video) => (
          <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
            <VideoCardTrending info={video} isLive />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Live;
