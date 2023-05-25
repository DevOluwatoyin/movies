import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState([]);
const api = 'd136620e549328df16c17b42f8f1d486';

  useEffect(() => {
    fetchMovieDetails();
    fetchGenres();
  }, []);

  const fetchMovieDetails = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api}`);
      setMovie(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchGenres = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=YOUR_API_KEY');
      setGenres(response.data.genres);
    } catch (error) {
      console.error(error);
    }
  };

  if (!movie || (!genres && genres.length === 0)) {
    return <div>Loading...</div>;
  }

  const { backdrop_path, title, release_date, overview, runtime, tagline } = movie;

  // const genreNames = movie.genre_ids.map((genreId) => {
  //   const genre = genres.find((genre) => genre.id === genreId);
  //   return genre ? genre.name : '';
  // });

  return (
    <div className="">
      <div
        className="relative w-full h-full lg:h-screen bg-cover flex items-center justify-center p-20"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${backdrop_path})` }}
      >
        <span className="absolute w-full h-full bg-bg-transparent2"></span>
        <div className="mx-auto flex flex-col justify-between items-center w-[80%] h-3/4 text-white md:flex-row">
          <div className="relative w-[90%] md:min-w-[100px] md:max-w-[400px] h-auto mx-5">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={title} />
          </div>
          <div className="relative w-[90%] md:min-w-[100px] md:max-w-[400px] h-auto mx-5">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p>{release_date}</p>
            <p>{tagline}</p>
            {/* <p>Genre: {genreNames.join(', ')}</p> */}
          <div className="my-4">
          <h3 className="text-xl font-bold">Overview</h3>
              <p>{overview}</p>
              <p>Runtime: {runtime} min</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
