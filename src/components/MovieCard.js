import React from 'react'
import { IMAGE_BASE_URL } from '../utils/constants';

const MovieCard = ({ movie }) => {
    const { original_title, poster_path } = movie;
  return (
    <div className='w-38'>
        <img alt = {original_title}
            src = {IMAGE_BASE_URL + poster_path}>
        </img>
    </div>
  )
}

export default MovieCard