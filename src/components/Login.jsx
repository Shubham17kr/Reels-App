import { useState } from "react"
import {auth} from '../firebase'
import {signInWithEmailAndPassword,signOut} from 'firebase/auth'
function Login()
{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [user,setUser]=useState(null)
    const [load,setLoad]=useState(false)
    const[error,setError]=useState("")

    const trackEmail=function(e)
    {
        setEmail(e.target.value)
        
    }
    const trackpassword=function(e)
    {
        setPassword(e.target.value)
    }
    const printResult= async function(){
        
        try
        {
           setLoad(true)
           let userCredential=await signInWithEmailAndPassword(auth,email,password)
           setUser(userCredential.user)

        }
        catch(err)
        {
            setError(err.message)
            setTimeout(()=>{
                setError("")
            },2000)

        }
        setLoad(false)
    }

    const logOut=async function()
    {
        await signOut(auth)
        setUser(null)
    }

    return(
        <>
        {
            error != "" ?<h1>error is {error}</h1>:
            load!=false?<h1>......Loading</h1>:
            user != null? <><h1>user is {user.uid}</h1> <button onClick={logOut}>LogOut</button></>:
        <>
        <input type="email"   onChange={trackEmail} placeholder="Email"/><br/>
        <input type="password"  onChange={trackpassword} placeholder="password"/><br/>
        <button type="click" onClick={printResult} >Login</button>
        </>
        }
        </>
    )
}
export default Login