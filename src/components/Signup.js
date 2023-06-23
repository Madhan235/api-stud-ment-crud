import React, { useState } from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err,setErr] = useState("");
    const history = useHistory()
const handleSignup = async() => {
    
    const newUser = {
        email,
        password
    }
    const res = await fetch(`https://node-3-copy.vercel.app/users/signup`,
    {method: 'POST',
 body:JSON.stringify(newUser),
 headers:{'Content-Type': 'application/json'}
});

 const data = await res.json();
   setErr(data.data)
}


  return (
     <Base
     title={"Signup-page"}
     description={"New user ? please Singup"}
     >
     <div className='input'>
<input
type='text'
placeholder='Enter your email address'
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>
 
<input
type='password'
placeholder='Enter your password'
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>
<div style={{color:"red"}}>{err ? <p>{err}</p> : ""}</div>
<button
onClick={handleSignup}
>Singup</button>
     </div>
     </Base>
  )
}

export default Signup