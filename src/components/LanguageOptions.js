import { useDispatch } from "react-redux"
import { setLanguage } from "../slices/configSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";

const LanguageOptions = () => {

    const dispatch = useDispatch();

    const handleSelectedLanguage = (event) => {
        dispatch(setLanguage(event.target.value));
    }

    return (
        <div className="mr-3 text-xs text-white">
            <select className="bg-red-600 px-5 py-1 rounded-sm" onChange={handleSelectedLanguage}>
                {SUPPORTED_LANGUAGES.map(language =>
                    <option key={language.identifiyer} value={language.identifiyer}>{language.name}</option>
                )}
            </select>
        </div>
    )
}

export default LanguageOptions