import { useSelector } from "react-redux"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import VideoTitle from "../components/VideoTitle"
import VideoBackground from "../components/VideoBackground"
import useMovieTrailerVideo from "../hooks/useMovieTrailerVideo"

const BrowseScreen = () => {

  useNowPlayingMovies()
  useMovieTrailerVideo();

  const movieDetails = useSelector(store => store.movies?.nowPlayingMovies);

  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  if (!movieDetails) return <div>Loading...</div>;

  const { original_title, overview } = movieDetails[0];

  return (
    <div className="">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground trailerVideo={trailerVideo} />
    </div>
  )
}

export default BrowseScreen