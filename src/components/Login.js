import React, { useRef, useState } from 'react'
import Header from './Header'
import { Link } from "react-router-dom";
import { checkValidData } from '../utils/validate.js';
import { auth } from '../utils/FireBaseConfig.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js';
import { BACKGROUND_IMAGE } from '../utils/constants.js';

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState("")
  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  const handleButtonClick = () =>{
    const message = checkValidData(email.current.value, password.current.value)
    setErrorMessage(message) ;
    if(message) return;

    if(!isSignInForm){
      // Signup logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value
        }).then(() => {
          const {uid, email, displayName}= auth.currentUser;
          dispatch(addUser({uid: uid, email: email, displayName: displayName}))
        }).catch((error) => {
          // An error occurred
          setErrorMessage(error.message);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + ": " + errorMessage);
      });
    } else {
      // Signin logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + ": " + errorMessage);
      });
    }
  }
  return (
    <div className="relative h-screen">
      <Header />
      <div>
        <img
          src= { BACKGROUND_IMAGE}
          alt="Netflix Background"
          className="absolute top-0 left-0 w-full h-full object-cover brightness-50 -z-10"
        />
      </div>
      <div className='flex items-center justify-center h-full'>
        <form onSubmit={(e) => e.preventDefault()} className='bg-black/50 w-4/12 p-8 flex flex-col rounded-lg text-white shadow-lg'>
          <h2 className="text-2xl font-bold mb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
          {!isSignInForm && (<input
            ref = {name}
            type="Name"
            placeholder="Full Name"
            className="p-3 m-2 bg-gray-800 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white-500"
          />)}
          <input
            ref = {email}
            type="email"
            placeholder="Email"
            className="p-3 m-2 bg-gray-800 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white-500"
          />
          <input
            ref = {password}
            type="password"
            placeholder="Password"
            className="p-3 m-2 bg-gray-800 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white-500"
          />
          <label className='text-red-500 px-2 text-lg'>{errorMessage}</label>
          <button className='m-2 mt-4 p-3 rounded-lg bg-red-600 hover:bg-red-700 transition duration-200 font-semibold cursor-pointer'
            onClick={handleButtonClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-sm mt-6 text-gray-400">
            {isSignInForm ? "New to Netflix? " : "Already Registered? "} <Link href="#" className="text-white hover:underline" onClick={toggleSignInForm}>{isSignInForm ? "Sign Up now." : "Sign In now."}</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login