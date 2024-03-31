const LanguageOptions = () => {
    return (
        <div className="mr-3 text-xs text-white">
            <select className="bg-red-600 px-5 py-1 rounded-sm">
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="fr">French</option>
            </select>
        </div>
    )
}

export default LanguageOptions