import React, { Children } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Base({title, description, children}) {

  const history = useHistory();
  return (
  
  <div className='main-component base-component'>
    <div className='nav-button'>
      <button
      onClick={() =>history.push("/")}
      >Students-Dashboard</button>
      <button
      onClick={() =>history.push("/add")}
      >Add-Student</button>
      <button
      onClick={()=>history.push("/mentors")}
      >Mentors-Dashboard</button>
      <button
      onClick={()=>history.push("/addmentors")}
      >Add-Mentor</button>

    </div>
    <header>
        <h1 className='
        heading'>{title}</h1>
    </header>
<div className='main-segment'>
    <h2>{description}</h2>
    <div className='child-component'>
    {children}
    </div>
</div>
    </div>
  )
}

export default Base