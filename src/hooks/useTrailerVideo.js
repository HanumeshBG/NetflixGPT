import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../utils/movieSlice.js";
import { API_OPTIONS } from "../utils/constants";

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();
    const getTrailerVideo = async() => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json();

        const filteredData = json.results.filter((video) => video.type === "Trailer")
        const trailerVideo = filteredData.length ? filteredData[0] : json.results[0];
        dispatch(addTrailerVideo(trailerVideo))
    }

    useEffect(() => {
        getTrailerVideo()
    }, [])
}

export default useTrailerVideo;