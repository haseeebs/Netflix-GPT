import { useDispatch, useSelector } from "react-redux"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { addTrailerVideo } from "../slices/moviesSlice"

const BrowseScreen = () => {

  useNowPlayingMovies()

  const movieDetails = useSelector(store => store.movies?.nowPlayingMovies);
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  console.log(trailerVideo);
  const dispatch = useDispatch();

  const fetchMovieById = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieDetails[0].id}/videos`, API_OPTIONS)
    const jsonData = await data.json();

    const filteredMovieData = jsonData.results.filter((movie) => movie.type === 'Trailer')
    const trailer = filteredMovieData.length ? filteredMovieData[0] : jsonData[0]
    dispatch(addTrailerVideo(trailer));
  }

  useEffect(() => {
    fetchMovieById()
  }, []);

  if (!movieDetails) return;

  return (
    <div className="">
      <div className="sm:h-[30rem]  content-end bg-gradient-to-r from-gray-800 to-white">

        <div className="p-12 text-white">
          <h2 className="text-5xl font-bold mb-5">{movieDetails[0]?.original_title}</h2>
          <h3 className="w-1/2 mb-5">{movieDetails[0]?.overview}</h3>

          <div className="text-black font-bold">
            <button className="px-8 py-2 bg-white rounded-md mr-5">Play</button>
            <button className="px-8 py-2 bg-white rounded-md">More info</button>
          </div>
        </div>

      </div>
      <div className="h-full border border-black bg-purple-300">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        >
        </iframe>
      </div>
    </div>
  )
}

export default BrowseScreen