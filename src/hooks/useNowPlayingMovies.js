import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovieList = async () => {
        // Function to fetch the list of currently playing movies
        // This can be implemented using an API call to a movie database
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)

        const json = await data.json();
        dispatch( addNowPlayingMovies(json.results))
    }

    useEffect(() => {
        getNowPlayingMovieList();
    }, [])
}

export default useNowPlayingMovies;