import { API_Options } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideos } from "../utils/moviesSlice";

const useMovieTrailer = ({movieId}) => {
  const dispatch = useDispatch();
  const youtubeTrailerID = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_Options,
    );
    const data = await response.json();
    const trailer = data.results.find((video) => video.type === "Trailer");
    const trailer_id = trailer ? trailer.key : data.results[0]?.key;
    const url = `https://www.youtube.com/embed/${trailer_id}?autoplay=1&mute=1&controls=0&loop=1&modestbranding=1`;
    dispatch(addTrailerVideos(url));
  };
  
  useEffect(() => {
    youtubeTrailerID();
  }, [movieId]);
};

export default useMovieTrailer;