import React, { useEffect, useState } from "react";
import { YOUTUBE_SPORTS_API } from "../utils/constant";
import VideoCardTrending from "./VideoCardTrending"; // Use the trending-style full-info card
import { Link } from "react-router-dom";

const Sports = () => {
  const [videos, setVideos] = useState([]);

  const fetchSportsVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_SPORTS_API);
      const data = await response.json();
      setVideos(data.items || []);
    } catch (err) {
      console.error("Error fetching sports videos:", err);
    }
  };

  useEffect(() => {
    fetchSportsVideos();
  }, []);

  return (
    <div className="p-4  text-black min-h-screen max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🏅 Sports Videos</h1>

      <div className="flex flex-col gap-6">
        {videos.map((video) => (
          <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
            <VideoCardTrending info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sports;
