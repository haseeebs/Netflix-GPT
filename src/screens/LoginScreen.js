import React from 'react'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
  return (
    <div className=''>

      <div className="absolute">
        <div className='absolute z-10 h-full w-full bg-black opacity-50'></div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="backgroundImage"
          className='h-screen w-screen object-cover'
        />
      </div>

      <div className="h-3/5 w-full sm:w-[21.5rem] p-10 bg-black bg-opacity-75 text-white absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className='font-medium text-2xl'>Sign In</h1>

        <form action="" className='h-2/3 flex flex-col justify-between mt-5 text-sm'>
          <input type="text" placeholder='Enter email' className='w-full p-2.5 rounded-[4px] bg-[#333] outline-none' />
          <input type="password" placeholder='Enter password' className='w-full p-2.5 rounded-[4px] bg-[#333] outline-none' />
          <button className='bg-red-600 w-full p-2.5 rounded-[4px]'>Sign In</button>
        </form>

        <div className="flex gap-1 text-xs mt-5">
          <h3 className='text-[#737373]'>New to Netflix?</h3>
          <Link to={'/register'}>
            <h3 className='cursor-pointer hover:underline'>Sign up now</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen