import './profile.css'
import { auth, db } from '../firebase'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import React from 'react'
import { doc, getDoc } from 'firebase/firestore'
function Profile()
{
    let cUser=useContext(AuthContext)

     useEffect(function fn(){
            (async function(){

        if(cUser)
        {
            const docRef= doc(db,"users",cUser.uid)
            const docSnap=await getDoc(docRef)
            console.log("Document data",docSnap)
            if(docSnap.exists()){

                console.log(docSnap.data())
            }
            else{
                console.log("No Data");
            }
        }
    })()
},[cUser])

    return(

        <>
        {
           cUser==null?<div>Need to Login</div>:
        



        <>
        <div className='header'></div>
        <div className="main">
            <div className="pimg_container">
                <img className='pimg' src='https://via.placeholder.com/640x360' alt=''/>
            </div>
            <div className="details">
                <div className="content">Shubham</div>
                <div className="content">No. Of posts <span className='bold_text'>post</span></div>
                <div className="content">Email <span className='bold_text'>email</span></div>
            </div>
        </div> 
        </>
       }
       </>
    )
}
export default Profile