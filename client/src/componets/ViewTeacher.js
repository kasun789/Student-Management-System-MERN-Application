import  React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';





function ViewTeacher() {

   
  const [teacher, setTeacher] = React.useState(null);
  let userId=useParams();
  //console.log(userId)

  React.useEffect(() => {
    fetch(`http://localhost:3500/teacher/${userId.id}`)
      .then((res) => res.json())
      .then((data) => setTeacher(data.p));
  }, [userId]);
  
  if (!teacher) return null;
   
  return (
    <div style={{marginTop:'20px'}}>
    <h4>{teacher.tfname} {teacher.tlname}</h4>
    <hr/>
    <dl className='row'>
      <dt className="col-sm-3">Birthday</dt>
      <dd className='col-sm-9'>{teacher.tbirthday}</dd>
      <dt className="col-sm-3">Contact No</dt>
      <dd className='col-sm-9'>{teacher.tcontactNo}</dd>
      <dt className="col-sm-3">Address</dt>
      <dd className='col-sm-9'>{teacher.taddress}</dd>
      <dt className="col-sm-3">Grade</dt>
      <dd className='col-sm-9'>{teacher.subject}</dd>
      
    </dl>
      
      
    </div>
  );




  
  

  
}


  

  

export default ViewTeacher


