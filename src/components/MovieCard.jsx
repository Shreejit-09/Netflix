import { posterImageURL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-32 h-48 flex-shrink-0">
      <img
        className="w-full h-full object-cover rounded-md"
        src={posterImageURL + movie.poster_path}
        alt={movie.title}
      />
    </div>
  );
};

export default MovieCard;