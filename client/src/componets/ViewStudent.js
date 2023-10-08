import  React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';





function ViewStudent() {

   
  const [student, setStudent] = React.useState(null);
  let userId=useParams();
  //console.log(userId)

  React.useEffect(() => {
    fetch(`http://localhost:3500/student/${userId.id}`)
      .then((res) => res.json())
      .then((data) => setStudent(data.p));
  }, [userId]);
  
  if (!student) return null;
   
  return (
    <div style={{marginTop:'20px'}}>
    <h4>{student.fname} {student.lname}</h4>
    <hr/>
    <dl className='row'>
      <dt className="col-sm-3">Birthday</dt>
      <dd className='col-sm-9'>{student.birthday}</dd>
      <dt className="col-sm-3">Contact No</dt>
      <dd className='col-sm-9'>{student.contactNo}</dd>
      <dt className="col-sm-3">Address</dt>
      <dd className='col-sm-9'>{student.address}</dd>
      <dt className="col-sm-3">Grade</dt>
      <dd className='col-sm-9'>{student.grade}</dd>
      
    </dl>
      
      
    </div>
  );




  
  

  
}


  

  

export default ViewStudent


