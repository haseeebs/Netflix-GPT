import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../slices/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMoviesData = async () => {
    try {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
      const json = await data.json()
      
      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTopRatedMoviesData();
  }, []);
}

export default useTopRatedMovies;