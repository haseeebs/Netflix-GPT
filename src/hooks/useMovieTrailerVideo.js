import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../slices/moviesSlice';
import { useEffect } from 'react';

const useMovieTrailerVideo = () => {

    const movieDetails = useSelector(store => store.movies?.nowPlayingMovies);

    const dispatch = useDispatch();

    const fetchMovieById = async () => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieDetails[0]?.id}/videos`, API_OPTIONS)
            const jsonData = await data.json();

            const filteredMovieData = jsonData.results.filter((movie) => movie.type === 'Trailer')
            const trailer = filteredMovieData.length ? filteredMovieData[0] : jsonData[0]
            
            dispatch(addTrailerVideo(trailer));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (movieDetails?.length) {
            fetchMovieById()
        }
    }, [movieDetails]);
}

export default useMovieTrailerVideo