import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from '../firebase/firebase_config';

export const UserAuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUpUserWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUserWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loggerUserWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider )
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    },[])

    const userAuthInfo = {
        user,
        loading,
        signUpUserWithEmail,
        signInUserWithEmail,
        loggerUserWithGoogle
    }

    return (
       <UserAuthContext.Provider value={userAuthInfo}>
        {children}
       </UserAuthContext.Provider>
    );
};

export default AuthProvider;