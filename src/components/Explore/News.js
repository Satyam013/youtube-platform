// components/News.js
import React, { useEffect, useState } from "react";
import { YOUTUBE_NEWS_API } from "../../utils/constants/constant";
import VideoCardTrending from "../VideoCards/VideoCardTrending";

const News = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchNewsVideos();
  }, []);

  const fetchNewsVideos = async () => {
    try {
      const res = await fetch(YOUTUBE_NEWS_API);
      const data = await res.json();
      setVideos(data.items);
    } catch (err) {
      console.error("Error fetching news videos:", err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">📰 Latest News Videos</h2>
      <div className="flex flex-wrap gap-4">
        {videos.map((video) => (
          <VideoCardTrending key={video.id.videoId || video.id} info={video} />
        ))}
      </div>
    </div>
  );
};

export default News;
