import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments-API";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [videoDetails, setVideoDetails] = useState(null);

  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
    fetchVideoDetails();
  }, [videoId]);

  const fetchVideoDetails = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      const data = await response.json();
      setVideoDetails(data.items?.[0]);
    } catch (error) {
      console.error("Error fetching video details:", error);
    }
  };

  return (
    <div className="w-full flex flex-col">
      {/* Video Player & Live Chat */}
      <div className="px-5 flex flex-col md:flex-row gap-4">
        <div className="flex flex-col">
          <iframe
            width="1000"
            height="600"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg"
          ></iframe>

          {/* Video Title and Channel Info */}
          {videoDetails?.snippet && (
            <div className="mt-4">
              <h2 className="text-xl font-bold mb-1 text-black">
                {videoDetails.snippet.title}
              </h2>
              <p className="text-sm text-gray-700 mb-2">
                {videoDetails.snippet.channelTitle}
                {videoDetails.snippet.liveBroadcastContent === "live" && (
                  <span className="ml-2 text-red-600 font-bold">🔴 LIVE</span>
                )}
              </p>
            </div>
          )}
        </div>

        {/* Live Chat */}
        <div className="w-full">
          <LiveChat />
        </div>
      </div>

      {/* Comments Section */}
      <Comments videoId={videoId} />
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
