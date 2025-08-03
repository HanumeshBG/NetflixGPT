import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACKGROUND_IMAGE } from '../utils/constants.js';

const GptSearch = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen object-cover -z-10">
          <img
          src= { BACKGROUND_IMAGE}
          alt="Netflix Background"
          className='h-full w-full'
          />
      </div>
      <div>
          <GptSearchBar />
          <GptMovieSuggestions />
      </div>
    </>
  )
}

export default GptSearch