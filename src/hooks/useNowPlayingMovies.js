import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../slices/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {

    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)

    const dispatch = useDispatch();

    const getNowPlayingMoviesData = async () => {
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
            const json = await data.json()
      
            dispatch(addNowPlayingMovies(json.results));
          } catch (error) {
            console.error(error);
          }
    }

    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMoviesData();
    }, []);
}

export default useNowPlayingMovies;