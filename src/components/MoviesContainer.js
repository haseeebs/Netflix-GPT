import { IMAGE_URL } from "../utils/constants"

const MoviesContainer = ({ title, movieDetails }) => {

    if (!movieDetails || !movieDetails.length) {
        return (
            <div className="py-4 pl-12 text-white bg-black">
                <h1 className="text-2xl font-medium ml-1">{title}</h1>
                <p>No movies found.</p>
            </div>
        );
    }

    return (
        <div className="py-4 pl-12 text-white bg-black">
            <h1 className="text-2xl font-medium ml-1">{title}</h1>

            <div className="flex overflow-x-scroll no-scrollbar">
                {movieDetails.map(movie => (
                    <img key={movie.id} className="p-2" src={`${IMAGE_URL}${movie.poster_path}`} alt="poster" />
                ))}
            </div>
        </div>
    )
}

export default MoviesContainer