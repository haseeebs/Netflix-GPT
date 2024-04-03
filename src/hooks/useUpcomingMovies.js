import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../slices/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useUpcomingMovies = () => {

  const upcomingMovies = useSelector(store => store.movies.upcomingMovies);

  const dispatch = useDispatch();

  const getUpcomingMoviesData = async () => {
    try {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
      const json = await data.json()
      
      dispatch(addUpcomingMovies(json.results));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    !upcomingMovies && getUpcomingMoviesData();
  }, []);
}

export default useUpcomingMovies;