import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_Options } from "../utils/constants";

const useNowPlayinMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_Options,
    );
    const data = await response.json();
    //const json = JSON.stringify(data);
    dispatch(addNowPlayingMovies(data.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayinMovies;
