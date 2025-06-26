import React, { useEffect, useState } from "react";
import { getTrendingMusicVideosAPI } from "../../utils/constants/constant";
import { Link } from "react-router-dom";
import VideoCardTrending from "../VideoCards/VideoCardTrending";

const MusicVideos = () => {
  const [musicVideos, setMusicVideos] = useState([]);

  useEffect(() => {
    fetchTrendingMusic();
  }, []);

  const fetchTrendingMusic = async () => {
    try {
      const res = await fetch(getTrendingMusicVideosAPI("IN"));
      const data = await res.json();
      setMusicVideos(data.items);
    } catch (error) {}
  };

  return (
    <div className="p-4  text-black min-h-screen dark:bg-black ">
      <h1 className="text-2xl font-bold mb-4 dark:text-white ">
        🎵 Trending Music Videos
      </h1>

      <div className="flex flex-col gap-6 dark:hover:text-green-700">
        {musicVideos.map((video) => (
          <Link key={video.id} to={`/watch?v=${video.id}`}>
            <VideoCardTrending info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MusicVideos;
