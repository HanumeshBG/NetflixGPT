import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const { movieNames, movieresult } = useSelector(store => store.gpt);
  if(!movieNames) return null;

  return (
    <div className='px-6 py-3 m-2 bg-black text-white opacity-80'>
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList key={ movieName } title={ movieName } movies={movieresult[index]}/>
        ))}
      </div>
    </div>
  )
}

export default GptMovieSuggestions