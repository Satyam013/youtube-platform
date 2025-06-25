import React, { useEffect, useState } from "react";
import {
  YOUTUBE_TRENDING_VIDEOS,
  YOUTUBE_VIDEO_DETAILS,
} from "../../utils/constant";
import { Link } from "react-router-dom";
import VideoCardTrending from "../VideoCards/VideoCardTrending";

const Trending = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchTrendingVideos();
  }, []);

  const fetchTrendingVideos = async () => {
    try {
      const res = await fetch(YOUTUBE_TRENDING_VIDEOS);
      const data = await res.json();

      const videoIds = data.items.map((v) => v.id).join(",");
      const detailRes = await fetch(YOUTUBE_VIDEO_DETAILS(videoIds));
      const details = await detailRes.json();

      setVideos(details.items);
    } catch (err) {
      console.error("Error fetching trending videos:", err);
    }
  };

  return (
    <div className="min-h-screen w-full  text-black px-4 pl-2 pt-4">
      <h1 className="text-3xl font-semibold mb-6 px-2">🔥 Trending</h1>

      <div className="w-full max-w-5xl mx-4 p-4 ">
        {videos.map((video) => (
          <Link key={video.id} to={`/watch?v=${video.id}`}>
            <VideoCardTrending info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Trending;
