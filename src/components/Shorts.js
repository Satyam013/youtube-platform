// src/components/Shorts.js
import React, { useEffect, useState } from "react";
import { YOUTUBE_SHORTS_API } from "../utils/constant";
import ShortCard from "./ShortCard";
import VideoCardTrending from "./VideoCardTrending";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const Shorts = () => {
  const [shorts, setShorts] = useState([]);

  useEffect(() => {
    fetchShorts();
  }, []);

  const fetchShorts = async () => {
    try {
      const res = await fetch(YOUTUBE_SHORTS_API);
      const data = await res.json();
      setShorts(data.items || []);
    } catch (err) {
      console.error("Quota exceeded or fetch error. Using mock data.");
    }
  };

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory  text-black">
      {shorts.map((video) => (
        <div
          key={video.id?.videoId || video.id}
          className="snap-start h-screen flex justify-center items-center"
        >
          <ShortCard info={video} />
        </div>
      ))}
    </div>
  );
};

export default Shorts;
