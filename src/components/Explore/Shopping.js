import React, { useEffect, useState } from "react";
import { YOUTUBE_SHOPPING_API } from "../../utils/constants/constant";
import { Link } from "react-router-dom";
import VideoCardTrending from "../VideoCards/VideoCardTrending";
import useSafeYoutubeFetch from "../../hooks/useSafeYoutubeFetch"; // ✅ Import the hook

const Shopping = () => {
  const [videos, setVideos] = useState([]);
  const safeFetch = useSafeYoutubeFetch(); // ✅ Initialize the hook

  useEffect(() => {
    fetchShoppingVideos();
  }, []);

  const fetchShoppingVideos = async () => {
    const data = await safeFetch(YOUTUBE_SHOPPING_API); // ✅ Use safeFetch
    if (!data) return;
    setVideos(data.items || []);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">
        🛍️ Trending Shopping Videos
      </h2>
      <div className="flex flex-wrap gap-4">
        {videos.map((video) => (
          <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
            <VideoCardTrending info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shopping;
