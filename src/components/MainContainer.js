import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MainContainer = ({ original_title, overview }) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground trailerVideo={trailerVideo} />
        </div>
    )
}

export default MainContainer