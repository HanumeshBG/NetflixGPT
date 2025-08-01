import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovieList = async () => {
        // Function to fetch the list of currently playing movies
        // This can be implemented using an API call to a movie database
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)

        const json = await data.json();
        dispatch( addUpcomingMovies(json.results))
    }

    useEffect(() => {
        getUpcomingMovieList();
    }, [])
}

export default useUpcomingMovies;