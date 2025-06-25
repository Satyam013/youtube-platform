import React, { useEffect, useState } from "react";
import { YOUTUBE_PODCASTS_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const PodcastPage = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    fetchPodcasts();
  }, []);

  const fetchPodcasts = async () => {
    try {
      const res = await fetch(YOUTUBE_PODCASTS_API);
      const json = await res.json();
      setPodcasts(json.items || []);
    } catch (err) {
      console.error("Failed to fetch podcast videos:", err);
    }
  };

  return (
    <div className="p-4 bg-white text-black min-h-screen max-w-6xl ">
      <h2 className="text-xl font-bold mb-4">🎧 Popular Podcasts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {podcasts.map((video) => (
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

export default PodcastPage;
