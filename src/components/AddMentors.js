import React, { useState } from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function AddMentors({teacher,setTeacher}) {
    const [name, setName] = useState();
    const [batch,setBatch] = useState();
    const [gender,setGender] = useState();
    const [subject,setSubject] = useState();

    const history = useHistory();
    const createMentor=async()=>{
const newMentor = {
    name,
    batch,
    gender,
    subject
}
const response = await fetch("https://645e1c5212e0a87ac0e7dbc6.mockapi.io/menotrs",
  {
    method:"POST",
body: JSON.stringify(newMentor),
headers:{"Content-Type": "application/json"},
});
setTeacher([...teacher,newMentor])
history.push("/mentors")
    }

  return (
    <Base
    title={"Add-Mentor Page"}
    description={"Fill the below form and press Add-Mentor button"}>
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
placeholder='Enter Subject'
value={subject}
onChange={(e)=>setSubject(e.target.value)}

/> 
<br/>
<button onClick={createMentor}>Add Mentor</button>

</div>
    </Base>
    
  )
}

export default AddMentors