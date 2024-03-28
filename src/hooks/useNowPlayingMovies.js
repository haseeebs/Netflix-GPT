import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../slices/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMoviesData = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
        const json = await data.json()

        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {
        getNowPlayingMoviesData();
    }, []);
}

export default useNowPlayingMovies;