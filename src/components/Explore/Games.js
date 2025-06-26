import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_GAMING_API } from "../../utils/constants/constant";
import VideoCardTrending from "../VideoCards/VideoCardTrending";
import useSafeYoutubeFetch from "../../hooks/useSafeYoutubeFetch"; // ✅ Import the hook

const Games = () => {
  const [gamingVideos, setGamingVideos] = useState([]);
  const safeFetch = useSafeYoutubeFetch(); // ✅ Use the hook

  const fetchGamingVideos = async () => {
    const data = await safeFetch(YOUTUBE_GAMING_API); // ✅ Replace fetch with safeFetch
    if (!data) return;
    setGamingVideos(data.items || []);
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
