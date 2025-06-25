import React from "react";

const IMG_CDN = "https://image.tmdb.org/t/p/w500";

const VideoCardMovies = ({ info }) => {
  if (!info) return null;

  return (
    <div className="flex  rounded-lg overflow-hidden shadow-md text-black">
      <img
        className="w-40 object-cover text-black"
        src={
          info.poster_path
            ? IMG_CDN + info.poster_path
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={info.title}
      />
      <div className="p-4 flex flex-col justify-between text-black">
        <div>
          <h2 className="text-xl font-bold">{info.title}</h2>
          <p className="text-sm  mt-1">{info.overview?.substring(0, 250)}...</p>
        </div>
        <div className="mt-4 text-sm text-black">
          <span>📅 {info.release_date}</span> |{" "}
          <span>⭐ {info.vote_average}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCardMovies;
