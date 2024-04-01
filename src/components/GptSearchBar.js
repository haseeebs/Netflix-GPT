import { useSelector } from "react-redux"
import { LANGUAGES } from "../utils/languageConstant";

const GptSearchBar = () => {

    const selectedLanguage = useSelector(store => store.config.choosedLanguage);

    return (
        <div className='h-56 flex justify-center items-center'>
            <form action="" className='sm:w-1/2 w-4/5 flex gap-2'>
                <input className=' appearance-none w-full py-2  px-5 border-b-4 rounded-md outline-none border-red-600' type="text" placeholder={LANGUAGES[selectedLanguage].placeholder} />
                <button type='submit' className='mr-3 bg-red-600 px-5 py-1 text-white rounded-sm hover:opacity-90'>
                    {LANGUAGES[selectedLanguage].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar