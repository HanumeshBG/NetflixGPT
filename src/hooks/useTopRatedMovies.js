import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/movieSlice';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovieList = async () => {
        // Function to fetch the list of currently playing movies
        // This can be implemented using an API call to a movie database
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)

        const json = await data.json();
        dispatch( addTopRatedMovies(json.results))
    }

    useEffect(() => {
        getTopRatedMovieList();
    }, [])
}

export default useTopRatedMovies;