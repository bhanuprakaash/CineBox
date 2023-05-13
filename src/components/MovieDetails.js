import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/MovieDetails.css';

const MovieDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleBookTickets = () => {
    navigate(`/booking-form`, { state: { name } });
  };
  let name, image, runtime, summary, rating, language, genres;
  if (state.movieData) {
    ({ name, image, runtime, summary, rating, language, genres } = state.movieData);
  };

  return (
    <div className="movie-details-container">
      <div className="movie-image">
        <img src={image?.original} alt={name} />
      </div>
      <div className="movie-information">
        <h2>{name}</h2>
        <p><b>Runtime: </b>{runtime} minutes</p>
        <p><b>Summary</b> <br/>{summary.slice(3,-4)}</p>
        <p><b>Rating:</b> {rating?.average} / 10</p>
        <p><b>Language:</b> {language}</p>
        <p><b>Genres:</b> {genres?.join(', ')}</p>
        <button onClick={handleBookTickets}>Book Tickets</button>
        <Link to="/"><button>Go Back</button></Link>
      </div>
    </div>
  );
};

export default MovieDetails;
