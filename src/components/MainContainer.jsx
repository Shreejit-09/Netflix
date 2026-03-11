import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie.nowPlayingMovies);
  if (movies === null) return;
  // const mainMovie = movies[Math.floor(Math.random() * movies.length)];
  const mainMovie = movies[0];
  const {title, overview, id} = mainMovie;
  //const mainMovie =
  return (
    <div>
      <VideoBackground movieId={id} />
      <VideoTitle title={title} overview={overview} />
    </div>
  );
};

export default MainContainer;
