const VideoBackground = ({trailerVideo}) => {
    return (
        <div>
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

export default VideoBackground