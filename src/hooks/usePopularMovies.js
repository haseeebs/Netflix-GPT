import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../slices/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const usePopularMovies = () => {

  const popularMovies = useSelector(store => store.movies.popularMovies);

  const dispatch = useDispatch();

  const getPopularMoviesData = async () => {
    try {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
      const json = await data.json()
      
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    !popularMovies && getPopularMoviesData();
  }, []);
}

export default usePopularMovies;