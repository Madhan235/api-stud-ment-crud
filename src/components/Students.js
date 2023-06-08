import React, { useState } from 'react'
import Base from '../Base/Base';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function Students({students, setStudents, setEditIdx}) {


const deleteStudents = async (studId)=>{
  const response = await fetch(`https://645e1c5212e0a87ac0e7dbc6.mockapi.io/students/${studId}`,
  {method: "DELETE"});
  const data = await response.json();
  if(data){
    const remainingStudents = students.filter((stud,idx)=>stud.id !== studId)
    setStudents(remainingStudents);
    }
  }

const history = useHistory(); 
  return (
    <div> 
        <Base   
title={"Students Dashboard"}
description={"This Page contains all students data"}    
       > 
<br/> 

<div className='card-container'>
 
 {students.map((stud,idx)=>(
  
    <div className='card' key={idx}>
<h3>{stud.name}</h3>
<p>{stud.batch}</p>
<p>{stud.gender}</p>
<p>{stud.qualification}</p>
<div className='button-container'>
<button onClick={()=>history.push(`/edit/${idx}`)}>Edit</button>
<button onClick={()=>deleteStudents(stud.id)}>Delete</button>
</div>
 </div>

 ))}

    

</div>

</Base>
    </div>
  )
}

export default Students