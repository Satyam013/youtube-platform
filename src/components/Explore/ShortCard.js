import React, { useRef, useEffect, useState } from "react";
import useSafeYoutubeFetch from "../../hooks/useSafeYoutubeFetch";
import { YOUTUBE_VIDEO_DETAILS } from "../../utils/constants/constant";

const ShortCard = ({ videoId, isActive }) => {
  const iframeRef = useRef();
  const [videoInfo, setVideoInfo] = useState(null);
  const safeFetch = useSafeYoutubeFetch(); // ✅ Hook in use

  useEffect(() => {
    const fetchVideoInfo = async () => {
      const data = await safeFetch(YOUTUBE_VIDEO_DETAILS(videoId));
      if (data?.items?.length) {
        setVideoInfo(data.items[0].snippet);
      }
    };
    fetchVideoInfo();
  }, [videoId]);

  useEffect(() => {
    const iframe = iframeRef.current?.contentWindow;

    if (iframe && window.postMessage) {
      iframe.postMessage(
        JSON.stringify({
          event: "command",
          func: isActive ? "playVideo" : "pauseVideo",
          args: [],
        }),
        "*"
      );
    }
  }, [isActive]);

  if (!videoInfo) return null;

  return (
    <div className="w-[360px] h-[640px] sm:w-[400px] sm:h-[700px] rounded-xl overflow-hidden shadow-2xl relative">
      <iframe
        ref={iframeRef}
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=0&mute=0&controls=0&loop=1&playlist=${videoId}`}
        title={videoInfo.title}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white">
        <h2 className="text-lg font-semibold truncate">{videoInfo.title}</h2>
        <p className="text-sm text-gray-300">{videoInfo.channelTitle}</p>
      </div>
    </div>
  );
};

export default ShortCard;
