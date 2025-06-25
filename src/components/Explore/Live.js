import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_LIVE_API } from "../../utils/constant";
import VideoCardTrending from "../VideoCards/VideoCardTrending";

const Live = () => {
  const [liveVideos, setLiveVideos] = useState([]);

  useEffect(() => {
    const fetchLive = async () => {
      try {
        const searchRes = await fetch(YOUTUBE_LIVE_API);
        const searchData = await searchRes.json();

        if (!searchData.items?.length) {
          console.warn("No live videos found.");
          setLiveVideos([]);
          return;
        }

        setLiveVideos(searchData.items);
      } catch (err) {
        console.error("Error fetching live videos:", err);
      }
    };

    fetchLive();
  }, []);

  if (!liveVideos.length) {
    return (
      <div className="p-4 bg-white text-black min-h-screen flex items-center justify-center">
        <p className="text-gray-500">No live streams currently available.</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white text-black min-h-screen max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">🔴 Live Now</h1>
      <div className="flex flex-col gap-6 w-full">
        {liveVideos.map((video) => (
          <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
            <VideoCardTrending info={video} isLive />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Live;
