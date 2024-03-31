import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { LOGO } from '../utils/constants';
import { toggleState } from '../slices/gptSlice';
import LanguageOptions from './LanguageOptions';

const Header = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector(store => store.user);
  const showGptSuggestionComponent = useSelector(store => store.gpt.showGptSuggestionComponent);
  const location = useLocation();

  const handleSignOut = () => {
    signOut(auth)
      .catch(error => {
        toast.error(`${error.code} ${error.message}`);
      });
  };

  const handleSearchButton = () => {
    dispatch(toggleState());
  }

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
          {showGptSuggestionComponent ? (
            <LanguageOptions />
          ) : (
            <span className='mr-3 bg-red-600 px-5 py-1 text-xs text-white rounded-sm'>{userDetails.displayName}</span>
          )}

          <button onClick={handleSearchButton} className='mr-3 bg-red-600 px-3 py-1 text-xs text-white rounded-sm hover:bg-red-700'>
            {showGptSuggestionComponent ? 'Homepage' : 'GPT search'}
          </button>

          <button onClick={handleSignOut} className="bg-red-600 px-3 py-1 text-xs text-white rounded-sm hover:bg-red-700">
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