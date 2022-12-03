import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase'


export const AuthContext = createContext()
const auth = getAuth(app)

const Contex = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loding, setLoding] = useState(true)

    // 1. createUser
    const createUser = (email, password) => {
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // 2. ubdate name 
    const updateName = (profile) => {
        setLoding(true);
        return updateProfile(auth.currentUser, profile)
    }
    // 3. verify email
    const verifyEmail = () => {
        setLoding(true);
        return sendEmailVerification(auth.currentUser)
    }


    // 4. googleSignin
    const googleSignin = (gProvider) => {
        setLoding(true);
        return signInWithPopup(auth, gProvider)
    }

    // 5. logOut
    const logOut = () => {
        localStorage.removeItem('token')
        setLoding(true);
        return signOut(auth)
    }
    // 6. login 
    const login = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // 7. forget password 
    const forgetPassword = (email) => {
        setLoding(true);
        return sendPasswordResetEmail(auth, email)
    }





    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)
            setLoding(false);

        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = { user, loding, createUser, updateName, verifyEmail, login, googleSignin, logOut, forgetPassword }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    )
}

export default Contex
