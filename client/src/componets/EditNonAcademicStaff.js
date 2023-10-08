import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

  function EditNonAcademicStaff() {

    const [name, setName] = useState("");
    const [nonAcademicStaff, setNonAcademicStaff] = React.useState(null);
        let userId=useParams();

      
        React.useEffect(() => {
           fetch(`http://localhost:3500/nonAcademicStaff/add/${userId.id}`)
             .then((res) => res.json())
             .then((data) => setNonAcademicStaff(data.p));
        }, [userId]);
        
        if (!nonAcademicStaff) return null;
            var Name=nonAcademicStaff.name;
            var NIC=nonAcademicStaff.nicNo;
            var ContactNo=nonAcademicStaff.contactNo;
            var Position=nonAcademicStaff.position;
            var Email=nonAcademicStaff.email;
          
  
    function handleInputChange(e){
          
      setName(e.target.value);
        }
        
    function onSubmit(e){
          e.preventDefault();
          const {Name, NIC, ContactNo, Position, Email} = nonAcademicStaff;
          const data={
            name:Name,
            nic:NIC,
            contactNo:ContactNo,
            position:Position,
            email:Email
          }
  
    
          axios.put(`http://localhost:3500/nonAcademicStaff/edit/${userId.id}`,data).then((res)=>{
            if(res.data.Success){
              alert("Non Academic Staff is Updated Successfully");
              
            }
          
          });
        
        }
  
        return (
                  <div className='col-md-8 mt-4 mx-auto'>
                    <h1 className='h3 mb-3 font-weight-normal'>Edit Non Academic Satff</h1>
                    <form className='neeeds-validation' noValidate>
                      <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Name</label>
                        <input type="text" className='form-control' name='Name' placeholder='Enter the Name'  value={nonAcademicStaff.name} onChange={handleInputChange}></input> 
                      </div>
                      <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>NIC no</label>
                        <input type="text" className='form-control' name='nic' placeholder='Enter NIC' value={nonAcademicStaff.nic} ></input> 
                      </div>
                      <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Contact No</label>
                        <input type="text" className='form-control' name='contactNo' placeholder='Contact No' value={nonAcademicStaff.contactNo}  ></input> 
                      </div>
                      <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Position</label>
                        <input type="number" className='form-control' name='position' placeholder='Enter the Position' value={nonAcademicStaff.position} ></input> 
                      </div>
                      <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Email</label>
                        <input type="number" className='form-control' name='email' placeholder='Enter the email' value={nonAcademicStaff.email} ></input> 
                      </div>
            
                      <button className='btn btn-success' type='submit' style={{marginTop:'15px'}} onClick={onSubmit}><i className='far fa-check-square'></i>&nbsp; Update</button> 
                    </form>
                  </div>
                )
  }
  export default EditNonAcademicStaff
  



























