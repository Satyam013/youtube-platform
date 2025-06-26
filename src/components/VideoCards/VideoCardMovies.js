import React from "react";
import { IMG_CDN_LINK } from "../../utils/constants/logoImage";

const IMG_CDN = { IMG_CDN_LINK };

const VideoCardMovies = ({ info }) => {
  if (!info) return null;

  const imagePath = info.backdrop_path;
  const fullImageUrl = `https://image.tmdb.org/t/p/w780${imagePath}`;

  return (
    <div className="flex  rounded-lg overflow-hidden shadow-md text-black border dark:border-gray-600  transition-all duration-300 transform hover:scale-105 hover:shadow-xl dark:hover:bg-gray-900">
      <div>
        <img
          className="w-40 h-40 object-cover text-black"
          src={fullImageUrl}
          alt={info.title}
        />
      </div>
      {console.log(info)}
      <div className="p-4 flex flex-col justify-between text-black dark:text-white">
        <div>
          <h2 className="text-xl font-bold">{info.title}</h2>
          <p className="text-sm  mt-1">{info.overview?.substring(0, 250)}...</p>
        </div>
        <div className="mt-4 text-sm ">
          <span>📅 {info.release_date}</span> |{" "}
          <span>⭐ {info.vote_average}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCardMovies;
