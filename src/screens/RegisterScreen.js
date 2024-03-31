import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { validEmail, validPassword, validUsername } from '../utils/formValidation';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addUser } from '../slices/userSlice';
import { BACKGROUND_IMAGE_URL } from '../utils/constants';

const RegisterScreen = () => {

    const dispatch = useDispatch();

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

        setUsernameError(isUsernameValid);
        setEmailError(isEmailValid);
        setPasswordError(isPasswordValid);

        if (!isUsernameValid && !isEmailValid && !isPasswordValid) {
            handleSignUp();
        }
    }

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredentials) => {
                const user = userCredentials.user;
                updateProfile(user, {
                    displayName: username.current.value
                }).then(() => {
                    const { uid, email, displayName } = auth.currentUser;
                    dispatch(addUser({ uid, email, displayName }));
                })
            })

            .catch((error) => {
                toast.error(`${error.code} ${error.message}`);
            })
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

            <div className="h-3/4 w-full sm:w-[21.5rem] p-10 bg-black bg-opacity-75 text-white absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className='font-medium text-2xl'>Sign up</h1>

                <form onSubmit={handleSubmit} className='h-3/4 flex flex-col justify-between mt-5 text-sm'>
                    <input ref={username} type="text" placeholder='Enter username' className='w-full p-2.5 rounded-[4px] bg-[#333] outline-none' />
                    {usernameError && <p className='text-red-600 text-xs'>{usernameError}</p>}

                    <input ref={email} type="text" placeholder='Enter email' className='w-full p-2.5 rounded-[4px] bg-[#333] outline-none' />
                    {emailError && <p className='text-red-600 text-xs'>{emailError}</p>}

                    <input ref={password} type="password" placeholder='Enter password' className='w-full p-2.5 rounded-[4px] bg-[#333] outline-none' />
                    {passwordError && <p className='text-red-600 text-xs'>{passwordError}</p>}

                    <button type='submit' className='bg-red-600 w-full p-2.5 rounded-[4px]'>Sign up</button>
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