import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const popular = useSelector((state) => state.movie.popularMovies);
  const topRated = useSelector((state) => state.movie.topRatedMovies);
  const upcoming = useSelector((state) => state.movie.upcomingMovies);
  return (
    <div className="bg-black px-12 py-8 space-y-10">
      <div className="-mt-72 relative z-20">
        <MovieList title="Popular" movies={popular} />
        <MovieList title="Top Rated" movies={topRated} />
        <MovieList title="Upcoming" movies={upcoming} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
