import React from 'react'
import GptSearchBar from '../components/GptSearchBar'
import GptMovieSuggestions from '../components/GptMovieSuggestions'
import { BACKGROUND_IMAGE_URL } from '../utils/constants'

const GptSuggetionScreen = () => {
  return (
    <div>
      <img src={BACKGROUND_IMAGE_URL} alt="backgroundImage" className='absolute -z-10' />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSuggetionScreen