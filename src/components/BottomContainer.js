import { useSelector } from "react-redux";
import MoviesContainer from "./MoviesContainer"

const BottomContainer = () => {

    const movieDetails = useSelector(store => store.movies);
    
    return (
        <div>
            {movieDetails && (
                <>
                    {movieDetails.nowPlayingMovies && (
                        <MoviesContainer title={'Trending'} movieDetails={movieDetails.nowPlayingMovies} />
                    )}

                    {movieDetails.popularMovies && (
                        <MoviesContainer title={'Popular'} movieDetails={movieDetails.popularMovies} />
                    )}

                    {movieDetails.topRatedMovies && (
                        <MoviesContainer title={'Top Rated'} movieDetails={movieDetails.topRatedMovies} />
                    )}

                    {movieDetails.upcomingMovies && (
                        <MoviesContainer title={'Upcoming Movies'} movieDetails={movieDetails.upcomingMovies} />
                    )}
                </>
            )}
        </div>
    )
}

export default BottomContainer