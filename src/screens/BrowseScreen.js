import useNowPlayingMovies from "../hooks/useNowPlayingMovies"


const BrowseScreen = () => {

  useNowPlayingMovies()

  return (
    <div>BrowseScreen</div>
  )
}

export default BrowseScreen