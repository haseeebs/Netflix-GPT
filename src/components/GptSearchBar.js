const GptSearchBar = () => {
    return (
        <div className='h-56 flex justify-center items-center'>
            <form action="" className='w-1/2 flex gap-2'>
                <input className=' appearance-none w-full py-2  px-5 border-b-4 rounded-md outline-none border-red-600' type="text" placeholder='Which movie you wanna watch today!' />
                <button type='submit' className='mr-3 bg-red-600 px-5 py-1 text-white rounded-sm hover:opacity-90'>
                    Search
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar