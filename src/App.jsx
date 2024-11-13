import { useState } from 'react'
import './App.css'
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from '../public/firebase.init';

function App() {
  const [user, setUser] = useState(null)
  const provider = new GoogleAuthProvider();
  const handleLoginButton = () => {

    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleLogoutButton = () => {
    signOut(auth)
      .then((result) => {
        alert('Logout success');
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      })
  }



  return (

    <>
      <h1 className='text-3xl text-center mb-5'>Simple Firebase</h1>

      <div className="flex justify-center gap-3">
        {
          user ? (
            <>
              <button onClick={handleLogoutButton} className='bg-red-500 text-white px-3 py-1 rounded'>Logout</button>
              <div>
                <img src={user.photoURL} alt={user.displayName} className='w-10 h-10 rounded-full' />
                <p>{user.displayName}</p>
              </div>
            </>
          ) : (
            <button onClick={handleLoginButton} className='btn btn-primary'>Login With Google</button>
          )
        }
      </div>

    </>
  )
}

export default App
