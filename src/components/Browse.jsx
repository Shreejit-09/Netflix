import Header from "./Header";
import { API_Options } from "../utils/constants";
import { useEffect } from "react";

const Browse = () => {
  const getNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", API_Options
    );
    const data = await response.json();
    console.log(JSON.stringify(data));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return <div>
    <Header />
  </div>;
};

export default Browse;
