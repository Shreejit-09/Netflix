import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div>
      <h1 className="text-white text-2xl font-bold mb-4">{title}</h1>

      <div className="flex gap-3 overflow-x-auto no-scrollbar">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;