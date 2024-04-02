import React from 'react'
import { useSelector } from 'react-redux';
import MoviesContainer from './MoviesContainer';

const GptMovieSuggestions = () => {

  const searchedMovies = useSelector(store => store.gpt.searchedMovies);

  return (
    <div>
      {searchedMovies && <MoviesContainer title={'Searched Movies'} movieDetails={searchedMovies} />}
    </div>
  )
}

export default GptMovieSuggestions