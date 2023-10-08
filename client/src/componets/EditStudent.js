import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


function EditStudent() {

  const [name, setName] = useState("");
  const [student, setStudent] = React.useState(null);
      let userId=useParams();
      console.log(userId)
    
      React.useEffect(() => {
         fetch(`http://localhost:3500/student/${userId.id}`)
           .then((res) => res.json())
           .then((data) => setStudent(data.p));
       }, [userId]);
      
       if (!student) return null;
          var fname=student.fname;
          var lname=student.lname;
          var birthday=student.birthday;
          var contactNo=student.contactNo;
          var grade=student.grade;
          var address=student.address;
          

      
  function onSubmit(e){
         e.preventDefault();
         //const id= this.props.match.params.id;
         const {fname,lname,birthday,contactNo,grade,address} = student;
         const data={
          fname:fname,
          lname:lname,
          birthday:birthday,
          contactNo:contactNo,
          grade:grade,
          address:address
         }

         console.log(data);
  
        axios.put(`http://localhost:3500/student/update/${userId.id}`,data).then((res)=>{
          if(res.data.Success){
            alert("Student Updated Successfully");
            
          }
        
        });
      
      }

      return (
                <div className='col-md-8 mt-4 mx-auto'>
                  <h1 className='h3 mb-3 font-weight-normal'>Update Student</h1>
                  <form className='neeeds-validation' noValidate>
                    <div className='form-group' style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}}>First Name</label>
                      <input type="text" className='form-control' name='bookName' placeholder='Enter Book Name'  value={fname} onChange={(e) => setName(e.target.value)}></input> 
                    </div>
                    <div className='form-group' style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}}>Last Name</label>
                      <input type="text" className='form-control' name='authorName' placeholder='Enter Author Name' value={lname} ></input> 
                    </div>
                    <div className='form-group' style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}}>Birthday</label>
                      <input type="text" className='form-control' name='title' placeholder='Title' value={birthday}  ></input> 
                    </div>
                    <div className='form-group' style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}}>Contact No</label>
                      <input type="text" className='form-control' name='ISBN' placeholder='Enter ISBN' value={contactNo} ></input> 
                    </div>
                    <div className='form-group' style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}}>Grade</label>
                      <input type="text" className='form-control' name='noOfCopies' placeholder='Enter no of copies' value={grade} ></input> 
                    </div>
                    <div className='form-group' style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}}>Address</label>
                      <input type="text" className='form-control' name='description' placeholder='Enter Description' value={address} ></input> 
                    </div>
          
                    <button className='btn btn-success' type='submit' style={{marginTop:'15px'}} onClick={onSubmit}><i className='far fa-check-square'></i>&nbsp; Update</button> 
                  </form>
                </div>
              )
}
export default EditStudent










































