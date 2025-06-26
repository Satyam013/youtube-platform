import React, { useEffect, useState, useRef } from "react";
import { YOUTUBE_SHORTS_API } from "../../utils/constants/constant";
import ShortCard from "./ShortCard";

const Shorts = () => {
  const [shorts, setShorts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef();

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

  const handleScroll = () => {
    const sections = containerRef.current?.children;
    if (!sections) return;

    let closestIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();
      const distance = Math.abs(rect.top);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }
    setActiveIndex(closestIndex);
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black"
    >
      {shorts.map((video, index) => (
        <div
          key={video.id?.videoId || video.id}
          className="snap-start h-screen flex justify-center items-center"
        >
          <ShortCard info={video} isActive={index === activeIndex} />
        </div>
      ))}
    </div>
  );
};

export default Shorts;
