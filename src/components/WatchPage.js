import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/slices/appSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "../components/Comments/Comments-API";
import WatchControls from "./WatchControls";
import {
  YOUTUBE_SUBSCRIBER_API,
  YOUTUBE_VIDEO_DETAILS,
} from "../utils/constants/constant";
import useSafeYoutubeFetch from "../hooks/useSafeYoutubeFetch"; // ✅ Hook import

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const [videoDetails, setVideoDetails] = useState(null);
  const [subscribers, setSubscribers] = useState(null);
  const safeFetch = useSafeYoutubeFetch(); // ✅ Hook usage

  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
    fetchVideoDetails();
  }, [videoId]);

  const fetchVideoDetails = async () => {
    const data = await safeFetch(YOUTUBE_VIDEO_DETAILS(videoId)); // ✅ Safe fetch
    if (!data) return;

    const video = data.items?.[0];
    setVideoDetails(video);

    if (video?.snippet?.channelId) {
      const channelData = await safeFetch(
        YOUTUBE_SUBSCRIBER_API(video.snippet.channelId)
      ); // ✅ Safe fetch
      if (!channelData) return;

      const subs = channelData.items?.[0]?.statistics?.subscriberCount;
      setSubscribers(subs);
    }
  };

  return (
    <div className="w-full flex flex-col">
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

          {videoDetails?.snippet && (
            <>
              <h2 className="text-xl font-bold mb-1 mt-4 text-black dark:text-white">
                {videoDetails.snippet.title}
              </h2>
              <WatchControls
                videoId={videoId}
                channelId={videoDetails.snippet.channelId}
                logo={videoDetails.snippet.thumbnails.medium.url}
                channelTitle={videoDetails.snippet.channelTitle}
                subscribers={subscribers}
                views={videoDetails.statistics?.viewCount}
                likes={videoDetails.statistics?.likeCount}
              />
            </>
          )}
        </div>
      </div>

      <Comments videoId={videoId} />
    </div>
  );
};

export default WatchPage;
