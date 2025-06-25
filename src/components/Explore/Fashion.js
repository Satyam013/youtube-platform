import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_FASHION_API } from "../../utils/constant";
import VideoCard from "../VideoCards/VideoCard";

const FashionPage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFashionVideos();
  }, []);

  const fetchFashionVideos = async () => {
    try {
      const res = await fetch(YOUTUBE_FASHION_API);
      const json = await res.json();
      setVideos(json.items || []);
    } catch (err) {
      console.error("Failed to fetch fashion videos:", err);
    }
  };

  return (
    <div className="p-4 bg-white text-black min-h-screen max-w-6xl mx-auto">
      <h2 className="text-xl font-bold mb-4">👗 Trending in Fashion</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

export default FashionPage;
