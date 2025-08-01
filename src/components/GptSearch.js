import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACKGROUND_IMAGE } from '../utils/constants.js';

const GptSearch = () => {
  return (
    <div>
        <div>
            <img
            src= { BACKGROUND_IMAGE}
            alt="Netflix Background"
            className="absolute top-0 left-0 w-full h-full object-cover brightness-50 -z-10"
            />
        </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch