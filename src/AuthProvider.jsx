import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../public/firebase.init";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWIthGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = () => {
        return signOut(auth);
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                console.log("User is logged in", currentUser);
                setUser(currentUser);
                setLoading(false);
            } else {
                console.log("User is not logged in");
                setUser(null);
            }
        });

        //Memory Cleanup
        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWIthGoogle,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;