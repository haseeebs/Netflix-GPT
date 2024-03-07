import React from 'react'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  return (
    <div>
      <div className="absolute">
        <div className='absolute z-10 h-full w-full bg-gradient-to-b from-black opacity-80'></div>
        <div className='absolute z-10 h-full w-full bg-gradient-to-t from-black'></div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="backgroundImage"
          className='h-screen w-screen object-cover'
        />
      </div>

      <div className="h-1/2 w-[37%] text-center text-white absolute z-10 top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className='font-extrabold text-5xl'>Unlimited movies, TV shows and more</h1>

        <div className="text-sm mt-2 leading-[3rem]">
          <p className='font-bold'>Starts at ₹149. Cancel anytime.</p>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          
          <div className="text-white mt-5">
          <Link to={'/register'}>
            <button className='font-medium text-xl bg-red-600 px-5 py-2 rounded-md'>{'Get Started >'}</button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen