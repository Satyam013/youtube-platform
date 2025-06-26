import React, { useEffect, useState } from "react";
import {
  YOUTUBE_TRENDING_VIDEOS,
  YOUTUBE_VIDEO_DETAILS,
} from "../../utils/constants/constant";
import { Link } from "react-router-dom";
import VideoCard from "../VideoCards/VideoCard";
import useSafeYoutubeFetch from "../../hooks/useSafeYoutubeFetch"; // ✅ Import hook

const Trending = () => {
  const [videos, setVideos] = useState([]);
  const safeFetch = useSafeYoutubeFetch(); // ✅ Use hook

  useEffect(() => {
    fetchTrendingVideos();
  }, []);

  const fetchTrendingVideos = async () => {
    const resData = await safeFetch(YOUTUBE_TRENDING_VIDEOS);
    if (!resData) return;

    const videoIds = resData.items.map((v) => v.id).join(",");
    const detailData = await safeFetch(YOUTUBE_VIDEO_DETAILS(videoIds));
    if (!detailData) return;

    setVideos(detailData.items || []);
  };

  return (
    <div className="min-h-screen w-full text-black px-4 pl-2 pt-4">
      <h1 className="text-3xl font-semibold mb-6 px-2 dark:text-white">
        🔥 Trending
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <Link key={video.id} to={`/watch?v=${video.id}`}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Trending;
