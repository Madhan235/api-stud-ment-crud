import React, { useState } from 'react'
import Base from '../Base/Base';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function AddStudents({students,setStudents}) {
    const [name,setName] = useState();
    const [batch,setBatch] = useState();
    const [gender,setGender] = useState();
    const [qualification,setQualification] = useState();
const history = useHistory();
const createStudent = async () => {
  const newStudent = {
    name, 
    batch,
    gender,
    qualification

}


  const response = await fetch("https://645e1c5212e0a87ac0e7dbc6.mockapi.io/students",
  {
    method:"POST",
  body: JSON.stringify(newStudent),
headers: {'Content-Type': 'application/json'},

})
// const data = await response.json();
setStudents([...students,  newStudent]); ;
history.push("/");
}



  return (
    <Base
    title={"Add-Student Page"}
    description={"We can add New student Here"}
    >
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
<button onClick={createStudent}>Add Students</button>
    
    </div>
    </Base>

  )
}

export default AddStudents