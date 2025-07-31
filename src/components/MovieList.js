import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({ title, movies}) => {
    console.log(movies);
  return (
    <div className='px-6 py-3'>
        <h1 className='text-xl text-white'>{title}</h1>
        <div className='flex py-2 overflow-x-auto'>
            <div className='flex gap-4'>
                {movies?.map((movie) => 
                    <MovieCard key={movie.id} movie={movie}/>
                )}        
            </div>
        </div>
        
    </div>
  )
}

export default MovieList