import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.config';
export const authContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const createLogin = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const createLogout = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const userUpdate = (userInfo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser,userInfo)
    }
    useEffect(()=>{
       const unSubscribe =  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    const authInfo = {user,loading,createUser,createLogin,createLogout,userUpdate}
    return (
        <div>
           <authContext.Provider value={authInfo}>
            {children}
           </authContext.Provider>
        </div>
    );
};

export default AuthProvider;