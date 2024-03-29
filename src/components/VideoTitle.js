

const VideoTitle = ({title, overview}) => {
    return (
        <div>
            <div className="sm:h-[30rem]  content-end bg-gradient-to-r from-gray-800 to-white">

                <div className="p-12 text-white">
                    <h2 className="text-5xl font-bold mb-5">{title}</h2>
                    <h3 className="w-1/2 mb-5">{overview}</h3>

                    <div className="text-black font-bold">
                        <button className="px-8 py-2 bg-white rounded-md mr-5">Play</button>
                        <button className="px-8 py-2 bg-white rounded-md">More info</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VideoTitle