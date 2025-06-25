// components/Shopping.js
import React, { useEffect, useState } from "react";
import { YOUTUBE_SHOPPING_API } from "../../utils/constant";
import { Link } from "react-router-dom";
import VideoCardTrending from "../VideoCards/VideoCardTrending";

const Shopping = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchShoppingVideos();
  }, []);

  const fetchShoppingVideos = async () => {
    try {
      const res = await fetch(YOUTUBE_SHOPPING_API);
      const data = await res.json();
      setVideos(data.items);
    } catch (err) {
      console.error("Error fetching shopping videos:", err);
    }
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
