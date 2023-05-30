import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const api = 'd136620e549328df16c17b42f8f1d486';
export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails();
  });

  const fetchMovieDetails = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api}`);
      setMovie(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  const { backdrop_path, title, release_date, overview, runtime, tagline } = movie;

  return (
    <div className="pt-20 w-full md:h-screen bg-bg-transparent2">
      <div
        className="relative w-full h-full bg-cover flex items-center justify-center lg:px-20"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${backdrop_path})` }}
      >
        <span className="absolute w-full h-full bg-bg-transparent2"></span>
        <div className="w-full mx-auto flex flex-col justify-between items-center md:max-w-7xl md:flex-row">
          <div className="relative mx-5">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={title} className=" w-[350px] md:max-w-1/3"  />
          </div>
          <div className="relative mx-5 md:w-1/2">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p>{release_date}</p>
            <p className="italic">{tagline}</p>
          <div className="my-4">
          <h3 className="text-xl font-bold">Overview</h3>
              <p>{overview}</p>
              <p><strong>Runtime:</strong> {runtime} min</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
