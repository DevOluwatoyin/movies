import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';

const api = 'd136620e549328df16c17b42f8f1d486';
export const MovieList1 = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${api}`);
      setMovies(response.data.results.slice(0, 4));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="cards grid grid-cols-[1fr] justify-center gap-5">
      {movies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id} className="line relative shadow-box-shadow pt-2 rounded-lg overflow-hidden hover:opacity-[0.6]">
          <HeartIcon className="absolute w-6 h-6 text-heart-outline right-0" />
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <div className="text-center py-2">
            <p className="md:text-xl">{movie.title}</p>
            {movie.release_date && <p>{movie.release_date}</p>}
          </div>
        </Link>
      ))}
    </div>
  );
};

export const MovieList2 = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetchSeries();
  }, []);

  const fetchSeries = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${api}`);
      setSeries(response.data.results.slice(0, 4));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="cards grid grid-cols-[1fr] justify-center gap-5">
        {series.map((series) => (
          <Link to={`/series/${series.id}`} key={series.id} className="line relative shadow-box-shadow pt-2 rounded-lg overflow-hidden hover:opacity-[0.6]">
            <HeartIcon className="absolute w-6 h-6 text-heart-outline right-0" />
            <img src={`https://image.tmdb.org/t/p/w500${series.poster_path}`} alt={series.name} />
            <div className="text-center py-2">
              <p className="md:text-xl">{series.name}</p>
              {series.first_air_date && <p>{series.first_air_date}</p>}
            </div>
          </Link>
        ))}
    </div>
  );
};

export const MovieList3 = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api}`);
      setMovies(response.data.results.slice(0, 4));
    } catch (error) {
      console.error(error);
    }
  };

  return (
        <div className="cards grid grid-cols-[1fr] justify-center gap-5">
        {movies.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id} className="line relative shadow-box-shadow pt-2 rounded-lg overflow-hidden hover:opacity-[0.6]">
            <HeartIcon className="absolute w-6 h-6 text-heart-outline right-0" />
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="text-center py-2">
              <p className="md:text-xl">{movie.title}</p>
              {movie.release_date && <p>{movie.release_date}</p>}
            </div>
          </Link>
        ))}
    </div>
  );
};

