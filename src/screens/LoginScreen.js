import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { validEmail, validPassword } from '../utils/formValidation';
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { BACKGROUND_IMAGE_URL } from '../utils/constants';

const LoginScreen = () => {
  
  const email = useRef(null);
  const password = useRef(null);

  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailValidationResult = validEmail(email.current.value);
    const passwordValidationResult = validPassword(password.current.value);

    setEmailError(emailValidationResult);
    setPasswordError(passwordValidationResult);

    if (!emailValidationResult && !passwordValidationResult) {
      handleLogin();
    }
  }

  const handleLogin = () => {

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .catch((error) => {
        toast.error(`${error.code} ${error.message}`)
      });
  }

  return (
    <div className=''>

      <div className="absolute">
        <div className='absolute z-10 h-full w-full bg-black opacity-50'></div>
        <img
          src={BACKGROUND_IMAGE_URL}
          alt="backgroundImage"
          className='h-screen w-screen object-cover'
        />
      </div>

      <div className="h-3/5 w-full sm:w-[21.5rem] p-10 bg-black bg-opacity-75 text-white absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className='font-medium text-2xl'>Sign In</h1>

        <form onSubmit={handleSubmit} className='h-2/3 flex flex-col justify-between mt-5 text-sm'>
          <input ref={email} type="text" placeholder='Enter email' className='w-full p-2.5 rounded-[4px] bg-[#333] outline-none' />
          {emailError && <p className='text-red-600 text-xs'>{emailError}</p>}

          <input ref={password} type="password" placeholder='Enter password' className='w-full p-2.5 rounded-[4px] bg-[#333] outline-none' />
          {passwordError && <p className='text-red-600 text-xs'>{passwordError}</p>}
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