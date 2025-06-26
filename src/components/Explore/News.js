import React, { useEffect, useState } from "react";
import { YOUTUBE_NEWS_API } from "../../utils/constants/constant";
import VideoCardTrending from "../VideoCards/VideoCardTrending";
import useSafeYoutubeFetch from "../../hooks/useSafeYoutubeFetch";
import { Link } from "react-router-dom";

const News = () => {
  const [videos, setVideos] = useState([]);
  const safeFetch = useSafeYoutubeFetch();

  useEffect(() => {
    fetchNewsVideos();
  }, []);

  const fetchNewsVideos = async () => {
    const data = await safeFetch(YOUTUBE_NEWS_API);
    if (!data) return;
    setVideos(data.items || []);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">📰 Latest News Videos</h2>
      <div className="flex flex-wrap gap-4 cursor-pointer">
        {videos.map((video) => (
          <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
            <VideoCardTrending
              key={video.id.videoId || video.id}
              info={video}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default News;
