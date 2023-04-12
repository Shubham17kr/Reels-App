import { useState } from "react"
import { auth } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"

function Signup()
{
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[fname,setFname]=useState("")
    const [user,setUser]=useState("")
    const [load,setLoad]=useState(false)
    const[error,setError]=useState("")

    async function processDetails()
    {
        try
        {
            setLoad(true)
            let userCred =await createUserWithEmailAndPassword(auth,email,password)
            setUser(userCred.user)
        }
        catch(error)
        {
            setError(error.message)
            setTimeout(()=>{
                setError("")
            },2000)

        }
        setLoad(false)
        
         
    }
    return(
        <>
        { 
          error!=""?<h1>error is {error}</h1>:
          load==true?<h1>....Loading</h1>:
          user!=""?<h1>user is {user.uid}</h1>:  
        <>
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="email"></input><br />
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="password"></input><br/>
        <input type="text" value={fname} onChange={(e)=>{setFname(e.target.value)}} placeholder="fullname"></input><br/>
        <button onClick={processDetails}>SignUp</button>
        </>
        }
       </>
    )
}
export default Signup