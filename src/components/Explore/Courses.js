import React, { useEffect, useState } from "react";
import { YOUTUBE_COURSES_API } from "../../utils/constants/constant";
import { Link } from "react-router-dom";
import VideoCard from "../VideoCards/VideoCard";
import useSafeYoutubeFetch from "../../hooks/useSafeYoutubeFetch"; // ✅ Import the hook

const Courses = () => {
  const [videos, setVideos] = useState([]);
  const safeFetch = useSafeYoutubeFetch(); // ✅ Use the hook

  useEffect(() => {
    const fetchCourseVideos = async () => {
      const data = await safeFetch(YOUTUBE_COURSES_API); // ✅ Use safeFetch
      if (!data) return;
      setVideos(data.items || []);
    };

    fetchCourseVideos();
  }, []);

  return (
    <div className="p-4 bg-white text-black min-h-screen max-w-7xl dark:bg-black">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">
        📚 Educational Courses
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;
