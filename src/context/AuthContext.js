import React, { useState ,useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext=   React.createContext();

export function AuthContextProvider({children})
{

    const [cUser,setUser]=useState(null)
    const[mainLoad,setmainLoad]=useState(true)


    useEffect(()=>{
       
          onAuthStateChanged(auth,(user)=>{

            if(user)
            {
                setUser(user)
            }
            else{
                setUser(null)
            }

            setmainLoad(false)
          })

    })
    
    let value=cUser;
    return(
        <>
        <AuthContext.Provider value={value}>
            {mainLoad==false && children}
        </AuthContext.Provider>
        </>
    )
    


}

