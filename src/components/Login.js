import React, { useState } from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err,setErr] = useState("");
const history = useHistory();

const handleLogin = async ()=>{
    const userInfo = {
        email,
        password
    }
    const res = await fetch(`https://node-3-copy.vercel.app/users/login`,
    {method: "POST",
body: JSON.stringify(userInfo),
headers: {'Content-Type': 'application/json'},
});
const data = await res.json();
 setErr(data.data)
 console.log(data.data)
 if(!data.data) {return;}else{
    
    localStorage.setItem("token", data.data.token);

    history.push("/students")
}
} 

const canClick = Boolean(email && password !== "")

const timeOut = setTimeout(() => {
    setErr("");
  }, 2000);
  
    return (
     <Base
     title={"Login-page"}
     description={"Already a user ? please login"}
     >
     <div className='input'>
<input
autoFocus
type='text'
placeholder='Enter your email address'
value={email}
onChange={(e)=>setEmail(e.target.value.trim())}
/>
{/* <br/> */}
<input
type='password'
placeholder='Enter your password'
value={password}
onChange={(e)=>setPassword(e.target.value.trim())}
/>
<div style={{color:"red"}}>{err ? <p>{err}</p> : ""}</div>
<button
onClick={handleLogin}
disabled={!canClick}
style={{cursor: canClick ? "pointer" : "not-allowed"}}
>Login</button>
     </div>
     </Base>
  )
}

export default Login