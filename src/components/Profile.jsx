import './profile.css'
import { auth } from '../firebase'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import React from 'react'
function Profile()
{
    let cUser=useContext(AuthContext)
    return(

        <>
        {
           cUser==null?<div>Need to Login</div>:
           <div>User is {cUser.uid}</div>
        }
        </>



        // <>
        // { <div className='header'></div>
        // <div className="main">
        //     <div className="pimg_container">
        //         <img className='pimg' src='https://via.placeholder.com/640x360' alt=''/>
        //     </div>
        //     <div className="details">
        //         <div className="content">Shubham</div>
        //         <div className="content">No. Of posts <span className='bold_text'>post</span></div>
        //         <div className="content">Email <span className='bold_text'>email</span></div>
        //     </div>
        // </div> }
        // </>
    )
}
export default Profile