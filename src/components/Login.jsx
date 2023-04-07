import { useState } from "react"

function Login()
{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const trackEmail=function(e)
    {
        setEmail(e.target.value)
    }
    const trackpassword=function(e)
    {
        setPassword(e.target.value)
    }
    const printResult=()=>{
        alert(email+" "+password)
    }

    return(
        <>
        <input type="email"  onChange={trackEmail} placeholder="Email"/><br/>
        <input type="password"  onChange={trackpassword} placeholder="password"/><br/>
        <button type="click" onClick={printResult} >Login</button>
        </>
    )
}
export default Login