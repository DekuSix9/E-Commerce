/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";



export const AuthContext=createContext();

const AuthProvide = ({children}) => {
        const[user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createNewUser=(email,password)=>{
  setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const loginUser=(email,password)=>{
  setLoading(true)
     return signInWithEmailAndPassword(auth,email,password)
}

 useEffect(()=>{
    const unSubcribe= onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false)
     })
     return ()=>{
        unSubcribe();
     }
  },[])


 const logOut=()=>{
    setLoading(true)
    signOut(auth)
  }
const authInfo = {
   createNewUser,
   user,
   setUser,
   logOut,
   loginUser,
   loading
  };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvide;





