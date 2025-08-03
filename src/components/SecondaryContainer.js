import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((state) => state.movies)

    return (
        <div className="bg-black">
            <div className="mt-0 md:-mt-42 z-20 relative">
                <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
                <MovieList title={"Top Rated"} movies={movies?.topRatedMovies}/>
                <MovieList title={"Most Popular"} movies={movies?.popularMovies}/>
                <MovieList title={"Upcoming"} movies={movies?.upcomingMovies}/>
            </div>
        </div>
    )
}

export default SecondaryContainer;