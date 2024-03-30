import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { LOGO } from '../utils/constants';

const Header = () => {
  const userDetails = useSelector(store => store.user);
  const location = useLocation();

  const handleSignOut = () => {
    signOut(auth)
      .catch(error => {
        toast.error(`${error.code} ${error.message}`);
      });
  };

  return (
    <div className='absolute z-20 w-full flex justify-between items-center px-[8%]'>
      <div className="w-40">
        <Link to={'/'}>
          <img
            src={LOGO}
            alt="logo"
            className='w-full object-cover'
          />
        </Link>
      </div>

      {userDetails ? (
        <div className='flex'>
          <span className='mr-3 bg-red-600 px-3 py-1 text-xs text-white rounded-sm'>{userDetails.displayName}</span>
          <button onClick={handleSignOut} className="bg-red-600 px-3 py-1 text-xs text-white rounded-sm">
            Sign out
          </button>
        </div>
      ) : location.pathname !== '/login' && location.pathname !== '/register' ? (
        <div className="">
          <Link to="/login">
            <button className="bg-red-600 px-3 py-1 text-xs text-white rounded-sm">Sign In</button>
          </Link>
        </div>
      ) : null}
    </div>
  )
}

export default Header