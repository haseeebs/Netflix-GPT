

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="absolute sm:h-screen h-[100dvh] content-end bg-gradient-to-r from-black">
            <div className="p-12 text-white">
                <div className="select-none">
                    <h2 className="text-5xl font-bold mb-5">{title}</h2>
                    <h3 className="sm:w-1/2 mb-5">{overview}</h3>
                </div>

                <div className="text-black font-medium">
                    <button className="px-8 py-2 bg-white rounded-md mr-5 hover:opacity-85">Play</button>
                    <button className="px-8 py-2 bg-gray-600 text-white rounded-md hover:opacity-85">More info</button>
                </div>
            </div>
        </div>
    )
}

export default VideoTitle