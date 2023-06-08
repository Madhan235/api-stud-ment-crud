import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import Base from '../Base/Base';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function UpdateStudents({students,setStudents,editIdx}) {
    const {id} = useParams();
    const editStudent = students[id];
    const [name,setName] = useState();
    const [batch,setBatch] = useState();
    const [gender,setGender] = useState();
    const [qualification,setQualification] = useState();
    
useEffect(()=>{
 setName(editStudent.name);
 setBatch(editStudent.batch);
 setGender(editStudent.gender);
 setQualification(editStudent.qualification);
//  console.log(editStudent)
},[id])
 
const history = useHistory();
     const updateStudent =async()=>{
         const updatedObj = {
            name,
            batch,
            gender,
            qualification
         }
         const response = await fetch(`https://645e1c5212e0a87ac0e7dbc6.mockapi.io/students/${id}`,
         {method:"PUT",
         body: JSON.stringify(updatedObj),
         headers: {'Content-Type': 'application/json'}
        }
        
         )
         students[id] = updatedObj
         setStudents([...students])
         history.push("/");
     }
     
  return (
<Base 
title={"Edit-Student Page"}
description={"We can edit a student information here"}
>
    <div> 

<div className='input'>

    
        <input
        type='text'
        placeholder='Enter Name'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        /> 

<br/>
        <input
        type='text'
        placeholder='Enter Batch'
        value={batch}
        onChange={(e)=>setBatch(e.target.value)}

        /> 

<br/>
        <input
        type='text'
        placeholder='Enter Gender'
        value={gender}
        onChange={(e)=>setGender(e.target.value)}

        />

        <br/> 
        <input
        type='text'
        placeholder='Enter Qualification'
        value={qualification}
        onChange={(e)=>setQualification(e.target.value)}

        /> 
        <br/>
<button onClick={updateStudent}>Update Students</button>
    
    </div>


    </div>
</Base>
  
  )
}

export default UpdateStudents