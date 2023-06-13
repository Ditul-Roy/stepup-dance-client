import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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
            setUser(currentUser)
            
            if(currentUser && currentUser.email){
                const loggedUsed = {
                    email: currentUser.email
                }
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUsed)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setLoading(false);
                    localStorage.setItem('class-access-token', data.token)
                })
            }
            else{
                localStorage.removeItem('class-access-token')
            }
            
        })
        return () => {
            return unsubscribe();
        }
    },[])

    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }

    const signOutUser = () => {
        return signOut(auth);
    }

    const userAuthInfo = {
        user,
        loading,
        signUpUserWithEmail,
        updateUserProfile,
        signInUserWithEmail,
        loggerUserWithGoogle,
        signOutUser
    }

    return (
       <UserAuthContext.Provider value={userAuthInfo}>
        {children}
       </UserAuthContext.Provider>
    );
};

export default AuthProvider;