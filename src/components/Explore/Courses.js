import React, { useEffect, useState } from "react";
import { YOUTUBE_COURSES_API } from "../../utils/constant";
import { Link } from "react-router-dom";
import VideoCard from "../VideoCards/VideoCard";

const Courses = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchCourseVideos = async () => {
      try {
        const response = await fetch(YOUTUBE_COURSES_API);
        const data = await response.json();
        setVideos(data.items || []);
      } catch (err) {
        console.error("Error fetching course videos:", err);
      }
    };

    fetchCourseVideos();
  }, []);

  return (
    <div className="p-4 bg-white text-black min-h-screen max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">📚 Educational Courses</h1>
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
