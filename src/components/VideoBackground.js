import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieid }) => {
    const tailerVideo = useSelector((store) => store.movies?.trailerVideo);
    useTrailerVideo(movieid);

    return (
        <div className="w-screen">
            <iframe
                className="w-screen aspect-video"
                src={`https://www.youtube.com/embed/${tailerVideo?.key}?autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            />
        </div>

    )
}

export default VideoBackground;