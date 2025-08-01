import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
    const movies = useSelector((state) => state.movies?.nowPlayingMovies);
    if(!movies || movies.length == 0) return;

    const mainMovie = movies[0];
    const {original_title, overview, id} = mainMovie;
    return (
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieid={id}/>
        </div>
    )
}

export default MainContainer;