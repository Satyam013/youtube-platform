import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_FASHION_API } from "../../utils/constants/constant";
import VideoCard from "../VideoCards/VideoCard";
import useSafeYoutubeFetch from "../../hooks/useSafeYoutubeFetch"; 

const FashionPage = () => {
  const [videos, setVideos] = useState([]);
  const safeFetch = useSafeYoutubeFetch(); 

  useEffect(() => {
    fetchFashionVideos();
  }, []);

  const fetchFashionVideos = async () => {
    const json = await safeFetch(YOUTUBE_FASHION_API); 
    if (!json) return;
    setVideos(json.items || []);
  };

  return (
    <div className="p-4 bg-white text-black min-h-screen max-w-6xl dark:bg-black">
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
