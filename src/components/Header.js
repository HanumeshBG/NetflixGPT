import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../utils/FireBaseConfig.js';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice.js';
import { useEffect } from 'react'
import { LOGO } from '../utils/constants.js';

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
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
    <div className='absolute z-50 px-8 py-2 bg-gradient-to-b from-black flex items-center justify-between w-full'>
        <img
          src= { LOGO }
          alt="Netflix Logo"
          className='w-44'
        />
        {user && (<div>
            <button onClick={handleSignOut} className='text-white px-4 py-2 bg-red-600 rounded-md hover:bg-red-700 transition duration-300 cursor-pointer'>Sign Out</button>
          </div>)
        }
    </div>
  )
}

export default Header