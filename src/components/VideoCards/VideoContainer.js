import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../../utils/constants/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import AdVideoCard from "./AdVideoCard";
import AD_VIDEOS from "../../utils/mockAd";
import useSafeYoutubeFetch from "../../hooks/useSafeYoutubeFetch";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const safeFetch = useSafeYoutubeFetch();

  useEffect(() => {
    getVideos();
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % AD_VIDEOS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getVideos = async () => {
    const data = await safeFetch(YOUTUBE_VIDEOS_API);
    if (!data) return;
    setVideos(data.items || []);
  };

  const currentAd = AD_VIDEOS[currentAdIndex];

  return (
    <div className="p-4 bg-white text-black min-h-screen max-w-6xl dark:bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="w-full sm:w-[310px]">
          <AdVideoCard info={currentAd} />
        </div>

        {videos.map((video) => (
          <Link
            key={video.id?.videoId || video.id}
            to={`/watch?v=${video.id?.videoId || video.id}`}
          >
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
