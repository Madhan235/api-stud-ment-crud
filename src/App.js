import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Base from './Base/Base';
import Students from './components/Students';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import AddStudents from './components/AddStudents';
import UpdateStudents from './components/UpdateStudents';
import { useEffect, useState } from 'react';
import data from './Data/data';
import Nopage from './components/Nopage';
import Mentors from './components/Mentors';
import AddMentors from './components/AddMentors';
import mentData from "./Data/mentors";
import UpdateMentor from './components/UpdateMentor';


function App() {
  const [students, setStudents] = useState([]);
  const [teacher, setTeacher] = useState([]);


useEffect(()=>{
const getStudents = async()=>{
  const response = await fetch("https://645e1c5212e0a87ac0e7dbc6.mockapi.io/students",{
    method:"GET",
  });
  const data = await response.json();
  // console.log(data)
  if(data){
    setStudents(data)
  }
};
getStudents()

const getMentors = async()=>{

  const response = await fetch("https://645e1c5212e0a87ac0e7dbc6.mockapi.io/menotrs",
  {method:"GET",});
  const data = await response.json();
  if(data){
    setTeacher(data)
  }

}
getMentors();

},[])



  
  const [editIdx,setEditIdx] = useState();



  return (
    <div className="App">
         <Switch>
          <Route exact path="/">
            <Students
            students={students}
            setStudents={setStudents}
            />
          </Route>
          <Route path="/add">
            <AddStudents
            students={students}
            setStudents={setStudents}
            />
          </Route>
          <Route path="/edit/:id">
            <UpdateStudents
            students={students}
            setStudents={setStudents}
            editIdx={editIdx}
            />
          </Route>

<Route path="/mentors">
  <Mentors
   teacher={teacher}
   setTeacher={setTeacher}
  />
</Route>
<Route path="/addmentors">
  <AddMentors
  teacher={teacher}
  setTeacher={setTeacher}
  />
  </Route>
<Route path="/editmentor/:tid">
  <UpdateMentor
   teacher={teacher}
   setTeacher={setTeacher}
  />
</Route>

          <Route path="**">
<Nopage/>
          </Route>
         </Switch>
    </div>
  );
}    
 

export default App;
