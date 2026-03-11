import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
    useMovieTrailer({ movieId });
    const trailerVideoURL = useSelector((store) => store.movie.trailerVideos);
  return (
    <div className="w-screen aspect-video absolute top-0 left-0 -z-10 inset-0 bg-gradient-to-r from-black">
      <iframe
        className="w-screen aspect-video"
        src={trailerVideoURL}
        title="WAR MACHINE | Official Trailer | Netflix"
        allow="accelerometer; autoplay; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
