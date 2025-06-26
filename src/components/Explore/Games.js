import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_GAMING_API } from "../../utils/constants/constant";
import VideoCardTrending from "../VideoCards/VideoCardTrending";

const Games = () => {
  const [gamingVideos, setGamingVideos] = useState([]);

  const fetchGamingVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_GAMING_API);
      const data = await response.json();
      setGamingVideos(data.items || []);
    } catch (error) {
      console.error("Failed to fetch gaming videos:", error);
    }
  };

  useEffect(() => {
    fetchGamingVideos();
  }, []);

  return (
    <div className="p-4 bg-white text-black min-h-screen max-w-6xl dark:bg-black">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">
        🎮 Gaming Videos
      </h1>
      <div className="flex flex-col gap-6 w-full">
        {gamingVideos.map((video) => (
          <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
            <VideoCardTrending info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Games;
