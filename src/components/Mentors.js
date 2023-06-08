import React, { useState } from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
// import data from '../Data/data';

function Mentors({teacher,setTeacher}) {

   const deleteMentor = async (mentId)=>{
const response = await fetch(`https://645e1c5212e0a87ac0e7dbc6.mockapi.io/menotrs/${mentId}`,
      {method:"DELETE"});
const data = await response.json();
if(data){
   const remainingMentors = teacher.filter((ment,idx)=>(ment.id !== mentId))  
   setTeacher(remainingMentors);  
}
   } 
 
   const history = useHistory();
    
    
  return (
    <Base
    title={"Mentors Dashboard"}
    description={"This Page contains all Mentors Data"} 
    >
     <br />

     <div className='card-container'>
 
 {teacher.map((teach,mid)=>(
  
    <div className='card' key={mid}>
<h3>{teach.name}</h3>
<p>{teach.batch}</p>
<p>{teach.gender}</p>
<p>{teach.subject}</p>
<div className='button-container'>
<button 
onClick={()=>history.push(`/editmentor/${mid}`)}
>Edit</button>
<button 
onClick={()=>deleteMentor(teach.id)}
>Delete</button>
</div>
 </div>
 
 ))}
 </div>

    </Base>
  )
}

export default Mentors