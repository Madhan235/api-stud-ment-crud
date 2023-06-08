import React, { useEffect, useState } from 'react'
import Base from '../Base/Base';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

function UpdateMentor({teacher, setTeacher}) {
    const {tid} = useParams();
    const editTeacher = teacher[tid];
    const [name, setName] = useState();
    const [batch,setBatch] = useState();
    const [gender,setGender] = useState();
    const [subject,setSubject] = useState();
    
     
console.log("Update")
    

    useEffect(()=>{
        
        setName(editTeacher.name);
        setBatch(editTeacher.batch);
        setGender(editTeacher.gender);
        setSubject(editTeacher.subject);
       
       },[tid])
    
        
       const history = useHistory();
            async function updateMentor(){
                const updatedObject = {
                   name,
                   batch,
                   gender,
                   subject,
                }
  const response = await fetch(`https://645e1c5212e0a87ac0e7dbc6.mockapi.io/menotrs/${tid}`,
  {method:"PUT",
body:JSON.stringify(updatedObject),
headers:{"Content-Type":"application/json"}
});
                teacher[tid] = updatedObject
                setTeacher([...teacher])
                history.push("/mentors");
            }
  return (
    <Base
    title={"Edit-Mentor Page"}
    description={"Edit the below form and press Update-Mentor button"}>
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
<button onClick={updateMentor}>Update-Mentor</button>

</div>
    </Base>
  )
}

export default UpdateMentor