import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.language)

  return (
    <div className='mt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input type="text" placeholder={lang[langKey].whatWouldYouLikeToWatch} className="p-2 m-2 text-white col-span-9 border border-gray-300 rounded-md" />
            <button className="m-2 px-4 py-2 col-span-3 bg-red-600  text-white rounded-md hover:bg-red-700 transition duration-300">{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar;