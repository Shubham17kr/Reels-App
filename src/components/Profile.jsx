import './profile.css'
import { auth, db } from '../firebase'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import React from 'react'
import { doc, getDoc } from 'firebase/firestore'
function Profile()
{
    let cUser=useContext(AuthContext)
    let [loading,setLoading]=useState(true);
    let [user,setUser]=useState(null)

     useEffect(function fn(){
            (async function(){

        if(cUser)
        {
            // read data from firebase
            const docRef= doc(db,"users",cUser.uid)
            const userObj=await getDoc(docRef)
            console.log("Document data",userObj.data())
            setUser(userObj.data())
            setLoading(false)
            
        }
    })()
},[])

    return(

        <>
        {
           loading==true?<div>....Loading</div>:
        



        <>
        <div className='header'></div>
        <div className="main">
            <div className="pimg_container">
                <img className='pimg' src='https://via.placeholder.com/640x360' alt=''/>
            </div>
            <div className="details">
                <div className="content">{user.name}</div>
                <div className="content">No. Of posts  :- {user.reelsIds.length}<span className='bold_text'> post</span></div>
                <div className="content">{user.email}</div>
            </div>
        </div> 
        </>
       }
       </>
    )
}
export default Profile