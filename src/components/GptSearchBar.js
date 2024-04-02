import { useDispatch, useSelector } from "react-redux"
import { LANGUAGES } from "../utils/languageConstant";
import { useRef } from "react";
import OpenAI from 'openai';
import { toast } from "react-toastify";
import { API_OPTIONS } from "../utils/constants";
import { setSearchedMovies } from "../slices/gptSlice";

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API,
    dangerouslyAllowBrowser: true
});

const GptSearchBar = () => {

    const dispatch = useDispatch();
    const searchMovieText = useRef();
    const selectedLanguage = useSelector(store => store.config.choosedLanguage);

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        
        try {
            if(searchMovieText.current.value === ''){
                dispatch(setSearchedMovies({}));
            }
            const searchQuery = `Act as a movie recommended system and suggest some movies for the query "${searchMovieText.current.value}". only give me names of 5 movies, comma seperated like the example results given ahead. Example Results: Mughal-E-Azam, Hera pheri, Munna bhai MBBS, Gol maal, Dhamaal`
            toast.success(`Searching for: ${searchMovieText.current.value}`)
            const chatCompletion = await openai.chat.completions.create({
                messages: [{ role: 'user', content: searchQuery }],
                model: 'gpt-3.5-turbo',
            });

        } catch (error) {
            toast.error(`Please check your plan and billing details. ${error.code}, or Search by movie name.`)
            handleLocalSearch()
        }
    }

    const handleLocalSearch = async () => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchMovieText.current.value}&include_adult=false&language=en-US&page=1`, API_OPTIONS)
            const json = await data.json();
            dispatch(setSearchedMovies(json.results));
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className='h-56 flex justify-center items-center'>
            <form action="" className='sm:w-1/2 w-4/5 flex gap-2' onSubmit={handleSearchSubmit}>
                <input ref={searchMovieText} className=' appearance-none w-full py-2  px-5 border-b-4 rounded-md outline-none border-red-600' type="text" placeholder={LANGUAGES[selectedLanguage].placeholder} />
                <button type='submit' className='mr-3 bg-red-600 px-5 py-1 text-white rounded-sm hover:opacity-90'>
                    {LANGUAGES[selectedLanguage].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar