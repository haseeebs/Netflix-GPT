import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { validEmail, validPassword, validUsername } from '../utils/formValidation';

const RegisterScreen = () => {

    const username = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const [usernameError, setUsernameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const isUsernameValid = validUsername(username.current.value);
        const isEmailValid = validEmail(email.current.value);
        const isPasswordValid = validPassword(password.current.value);

        console.log(username, email, password);
        console.log(isUsernameValid, isEmailValid, isPasswordValid);
        setUsernameError(isUsernameValid);
        setEmailError(isEmailValid);
        setPasswordError(isPasswordValid);
        console.log(usernameError, emailError, passwordError);
    }

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

            <div className="h-3/4 w-full sm:w-[21.5rem] p-10 bg-black bg-opacity-75 text-white absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className='font-medium text-2xl'>Sign up</h1>

                <form onSubmit={handleSubmit} className='h-3/4 flex flex-col justify-between mt-5 text-sm'>
                    <input ref={username} type="text" placeholder='Enter username' className='w-full p-2.5 rounded-[4px] bg-[#333] outline-none' />
                    {usernameError && <p className='text-red-600 text-xs'>{usernameError}</p>}

                    <input ref={email} type="text" placeholder='Enter email' className='w-full p-2.5 rounded-[4px] bg-[#333] outline-none' />
                    {emailError && <p className='text-red-600 text-xs'>{emailError}</p>}

                    <input ref={password} type="password" placeholder='Enter password' className='w-full p-2.5 rounded-[4px] bg-[#333] outline-none' />
                    {passwordError && <p className='text-red-600 text-xs'>{passwordError}</p>}

                    <button className='bg-red-600 w-full p-2.5 rounded-[4px]'>Sign up</button>
                </form>

                <div className="flex gap-1 text-xs mt-5">
                    <h3 className='text-[#737373]'>Already registered?</h3>
                    <Link to={'/login'}>
                        <h3 className='cursor-pointer hover:underline'>Sign In</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RegisterScreen