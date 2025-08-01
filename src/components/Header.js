import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../utils/FireBaseConfig.js';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice.js';
import { useEffect } from 'react'
import { LOGO, SUPPORTED_LANGUAGE } from '../utils/constants.js';
import { toggleGptSearchView } from '../utils/gptSlice.js';
import { changeLanguage } from '../utils/configSlice.js';

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  useEffect(() => {
    const Unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const {uid, email, displayName}= user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
        navigate("/browser");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });

    return () => Unsubscribed() // Cleanup subscription on unmount
}, [])

  return (
    <div className='relative z-50 px-8 py-2 bg-gradient-to-b from-black flex items-center justify-between w-full'>
        <img
          src= { LOGO }
          alt="Netflix Logo"
          className='w-44'
        />
        {user && (<div>
            {
              showGptSearch && (<select className='text-white p-2 bg-gray-800 rounded-md' onChange={handleLanguageChange}>
                {
                  SUPPORTED_LANGUAGE.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.label}</option>)
                }
              </select>)
            }         
            <button onClick={handleGptSearch} className='text-white px-4 py-2 mx-2 bg-purple-600 rounded-md hover:bg-purple-700 transition duration-300 cursor-pointer'>{showGptSearch ? "Home Page" : "GPT Search"}</button>
            <button onClick={handleSignOut} className='text-white px-4 py-2 bg-red-600 rounded-md hover:bg-red-700 transition duration-300 cursor-pointer'>Sign Out</button>
          </div>)
        }
    </div>
  )
}

export default Header