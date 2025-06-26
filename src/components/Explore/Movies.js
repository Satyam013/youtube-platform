import React, { useEffect, useState } from "react";
import {
  API_OPTIONS,
  getTrendingMoviesAPI,
} from "../../utils/constants/constant";
import { Link } from "react-router-dom";
import VideoCardMovies from "../VideoCards/VideoCardMovies";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const fetchTrendingMovies = async () => {
    try {
      const response = await fetch(getTrendingMoviesAPI("US"), API_OPTIONS);
      const data = await response.json();
      setMovies(data.results || []);
    } catch (error) {
      console.error("Failed to fetch top rated movies:", error);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <div className="p-4  text-black min-h-screen max-w-6xl mx-2">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">
        🍿 Top Rated Movies
      </h1>

      <div className="flex flex-col gap-6">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/watch?v=${movie.id}`}>
            <VideoCardMovies key={movie.id} info={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Movies;
