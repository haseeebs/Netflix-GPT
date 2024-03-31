import React from 'react'
import { Link } from 'react-router-dom'
import { BACKGROUND_IMAGE_URL } from '../utils/constants'

const HomeScreen = () => {
  return (
    <div>
      <div className="absolute">
        <div className='absolute z-10 h-full w-full bg-gradient-to-b from-black opacity-80'></div>
        <div className='absolute z-10 h-full w-full bg-gradient-to-t from-black'></div>
        <img
          src={BACKGROUND_IMAGE_URL}
          alt="backgroundImage"
          className='h-screen w-screen object-cover'
        />
      </div>

      <div className="flex flex-col h-full w-full text-center text-white absolute z-10">
        <h1 className='w-2/3 sm:w-1/2 mx-auto mt-40 sm:mt-52  font-extrabold text-3xl sm:text-5xl'>Unlimited movies, TV shows and more</h1>

        <div className="w-3/4 m-auto text-sm leading-[3rem] ">
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