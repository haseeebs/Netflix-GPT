import React from 'react'
import { useSelector } from 'react-redux';
import MoviesContainer from './MoviesContainer';

const GptMovieSuggestions = () => {

  const searchedMovies = useSelector(store => store.gpt.searchedMovies);

  return (
    <div>
      {searchedMovies ? (<MoviesContainer title={'Searched Movies'} movieDetails={searchedMovies} />) : (
        <div className='font-bold text-white text-center text-xl bg-red-500 p-10 mt-10'>Search for a movie...</div>
      )}
    </div>
  )
}

export default GptMovieSuggestions