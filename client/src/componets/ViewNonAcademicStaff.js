import  React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';





function ViewNonAcademicStaff() {

   
  const [nonAcademicStaff, setNonAcademicStaff] = React.useState(null);
  let userId=useParams();
  //console.log(userId)

  React.useEffect(() => {
    fetch(`http://localhost:3500/nonAcademicStaff/${userId.id}`)
      .then((res) => res.json())
      .then((data) => setNonAcademicStaff(data.p));
  }, [userId]);
  
  if (!nonAcademicStaff) return null;
   
  return (
    <div style={{marginTop:'20px'}}>
    <h4>{nonAcademicStaff.name}</h4>
    <hr/>
    <dl className='row'>
      <dt className="col-sm-3">NIC No</dt>
      <dd className='col-sm-9'>{nonAcademicStaff.nicNo}</dd>
      <dt className="col-sm-3">Contact No</dt>
      <dd className='col-sm-9'>{nonAcademicStaff.contactNo}</dd>
      <dt className="col-sm-3">Position</dt>
      <dd className='col-sm-9'>{nonAcademicStaff.position}</dd>
      <dt className="col-sm-3">Email</dt>
      <dd className='col-sm-9'>{nonAcademicStaff.email}</dd>
      
    </dl>
      
      
    </div>
  );




  
  

  
}



export default ViewNonAcademicStaff


