import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addMovieResults } from '../utils/gptSlice'

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const searchText = useRef(null);
    const langKey = useSelector(store => store.config.language)

    const searchMovieTMDB = async (movieName) => {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&page=1`, API_OPTIONS);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.results
    }

    const handleSearch = async () => {
      const getQuery = `Act as a movie recommanadation system and suggest some movies for the query: ${searchText.current.value} . onlly give 5 movies name with comma separated.`;

      // const response = await openai.responses.create({
      //   model: 'gpt-3.5-turbo',
      //   messages: [
      //     { role: 'user', content: getQuery }
      //   ],
      // });

      // console.log(response.choices);

      // const response = await openai.responses.create({
      //   model: 'gpt-3.5-turbo',
      //   instructions: 'user',
      //   input: getQuery,
      // });

      // console.log(response.output_text);

      // Dummay data for testing
      const movies = "Guru Shishyaru, Rama Shama Bhama, Panchatantra, Victory".split(',').map(movie => movie.trim());
    
      const promiseArray = movies.map(movie => searchMovieTMDB(movie));
      const movieResult = await Promise.all(promiseArray)

      console.log(movieResult);
      dispatch(addMovieResults({ movieNames: movies, movieresult: movieResult }));
    }

  return (
    <div className='mt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input ref={searchText} type="text" placeholder={lang[langKey].whatWouldYouLikeToWatch} className="p-2 m-2 text-white col-span-9 border border-gray-300 rounded-md" />
            <button 
              className="m-2 px-4 py-2 col-span-3 bg-red-600  text-white rounded-md hover:bg-red-700 transition duration-300 cursor-pointer"
              onClick={handleSearch}>
              {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar;