import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {

  const location = useLocation();

  return (
    <div className='absolute z-20 w-full flex justify-between items-center px-[8%]'>
      <div className="w-40">
        <Link to={'/'}>
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
          className='w-full object-cover'
        />
        </Link>
      </div>

      {location.pathname === '/' && <div className="">
        <Link to={'/login'}> <button className='bg-red-600 px-3 py-1 text-xs text-white rounded-sm'>Sign In</button> </Link>
      </div>}
    </div>
  )
}

export default Header