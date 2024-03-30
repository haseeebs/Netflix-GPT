import { useSelector } from "react-redux"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import useMovieTrailerVideo from "../hooks/useMovieTrailerVideo"
import MainContainer from "../components/MainContainer"
import BottomContainer from "../components/BottomContainer"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import useUpcomingMovies from "../hooks/useUpcomingMovies"

const BrowseScreen = () => {

  useNowPlayingMovies()
  useMovieTrailerVideo();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const movieDetails = useSelector(store => store.movies?.nowPlayingMovies);

  if (!movieDetails) return <div>Loading...</div>;

  const { original_title, overview } = movieDetails[0];

  return (
    <div className="">
      <MainContainer original_title={original_title} overview={overview} />
      <BottomContainer />
    </div>
  )
}

export default BrowseScreen