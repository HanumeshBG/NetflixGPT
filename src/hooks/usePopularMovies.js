import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = useSelector(store => store.movies.popularMovies);

    const getPopularMovieList = async () => {
        // Function to fetch the list of currently playing movies
        // This can be implemented using an API call to a movie database
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)

        const json = await data.json();
        dispatch( addPopularMovies(json.results))
    }

    useEffect(() => {
        !getPopularMovies && getPopularMovieList();
    }, [])
}

export default usePopularMovies;