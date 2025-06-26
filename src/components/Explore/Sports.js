import React, { useEffect, useState } from "react";
import { YOUTUBE_SPORTS_API } from "../../utils/constants/constant";
import VideoCardTrending from "../VideoCards/VideoCardTrending";
import { Link } from "react-router-dom";
import useSafeYoutubeFetch from "../../hooks/useSafeYoutubeFetch"; // ✅ Import the hook

const Sports = () => {
  const [videos, setVideos] = useState([]);
  const safeFetch = useSafeYoutubeFetch(); // ✅ Use the hook

  const fetchSportsVideos = async () => {
    const data = await safeFetch(YOUTUBE_SPORTS_API); // ✅ Replaces fetch
    if (!data) return;
    setVideos(data.items || []);
  };

  useEffect(() => {
    fetchSportsVideos();
  }, []);

  return (
    <div className="p-4 text-black min-h-screen max-w-6xl dark:bg-black">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">
        🏅 Sports Videos
      </h1>

      <div className="flex flex-col gap-6">
        {videos.map((video) => (
          <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
            <VideoCardTrending info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sports;
