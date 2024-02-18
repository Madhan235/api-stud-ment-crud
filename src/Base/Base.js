import React, { Children } from 'react'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min'

function Base({title, description, children}) {

  const history = useHistory();
  const location = useLocation();
 
  return (
  
  <section section className='main-component base-component'>
    <div className='nav-button'>
      <button
      onClick={()=>history.push("/")}
      style={{backgroundColor: location.pathname === "/" &&  "rgb(3, 88, 195)"}}
      >Signup</button>

      <button
      onClick={()=>history.push("/login")}
      style={{backgroundColor: location.pathname === "/login" &&  "rgb(3, 88, 195)"}}
      >Login</button>
      
      <button
      onClick={() =>history.push("/students")}
      style={{backgroundColor: location.pathname === "/students" &&  "rgb(3, 88, 195)"}}
      >Students-Dashboard</button>
      <button
      onClick={() =>history.push("/add")}
      style={{backgroundColor: location.pathname === "/add" &&  "rgb(3, 88, 195)"}}
      >Add-Student</button>
      <button
      onClick={()=>history.push("/mentors")}
      style={{backgroundColor: location.pathname === "/mentors" &&  "rgb(3, 88, 195)"}}
      >Mentors-Dashboard</button>
      <button
      onClick={()=>history.push("/addmentors")}
      style={{backgroundColor: location.pathname === "/addmentors" &&  "rgb(3, 88, 195)"}}
      >Add-Mentor</button>

    </div>
    
    <header> 
        <h1 className='
        heading'> {title} </h1>
    </header>
<div className='main-segment'>
    <h2 className='description'> {description} </h2>
    
    <div className='child-component'>
    {children}
    </div>
</div>
    </section >
  )
}

export default Base