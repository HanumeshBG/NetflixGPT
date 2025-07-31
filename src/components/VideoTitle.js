const VideoTitle = ({ title, overview}) => {
    return (
        <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black/50">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="py-6 text-md w-1/4">{overview}</p>
            <div>
                <button className="text-black px-4 py-2 bg-white rounded-md cursor-pointer">Play</button>
                <button className="mx-2 text-white px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-700 transition duration-300 cursor-pointer">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;