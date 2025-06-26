import React, { useEffect, useState } from "react";
import { YOUTUBE_PODCASTS_API } from "../../utils/constants/constant";
import VideoCard from "../VideoCards/VideoCard";
import { Link } from "react-router-dom";
import useSafeYoutubeFetch from "../../hooks/useSafeYoutubeFetch"; 

const Podcast = () => {
  const [podcasts, setPodcasts] = useState([]);
  const safeFetch = useSafeYoutubeFetch(); 

  useEffect(() => {
    fetchPodcasts();
  }, []);

  const fetchPodcasts = async () => {
    const json = await safeFetch(YOUTUBE_PODCASTS_API); 
    if (!json) return;
    setPodcasts(json.items || []);
  };

  return (
    <div className="p-4 bg-white text-black min-h-screen max-w-6xl dark:bg-black">
      <h2 className="text-xl font-bold mb-4 dark:text-white">
        🎧 Popular Podcasts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {podcasts.map((video) => (
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

export default Podcast;
