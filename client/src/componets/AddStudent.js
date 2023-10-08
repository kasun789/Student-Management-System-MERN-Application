import React, { Component } from 'react'
import axios from 'axios';
export default class AddStudent extends Component {
  constructor(props){
    super(props);
    this.state={
      fname:"",
      lname:"", 
      birthday:"",
      contactNo:"",
      grade:"",
      address:""
  
    }
  
    
   }
  
   handleInputChange=(e)=>{
    const {name,value} =e.target;
  
    this.setState({
      ...this.state,
      [name]:value
    })
   }
  
   onSubmit=(e)=>{
     e.preventDefault();
     const {fname,lname,birthday,contactNo,grade,address} = this.state;
     const data={
      fname:fname,
      lname:lname,
      birthday:birthday,
      contactNo:contactNo,
      grade:grade,
      address:address


     }
  
     console.log(data);
  
     axios.post('http://localhost:3500/student/create',data).then((res)=>{
      if(res.data.Success){
         this.setState({
  
          fname:"",
          lname:"", 
          birthday:"",
          contactNo:"",
          grade:"",
          address:""
      
  
         })
         alert("Added Successfuly!");
      }
      else{
        alert("Error Found!");
      }
     
     
    });
  
   }
  
  
  
    render() {
      return (
        <div className='col-md-8 mt-4 mx-auto'>
          <h1 className='h3 mb-3 font-weight-normal'>Add New Student</h1>
          <form className='neeeds-validation' noValidate>
            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>First Name</label>
              <input type="text" className='form-control' name='fname' placeholder='Enter First Name' value={this.state.fname} onChange={this.handleInputChange}></input> 
            </div>
            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Last Name</label>
              <input type="text" className='form-control' name='lname' placeholder='Enter Last Name' value={this.state.lname} onChange={this.handleInputChange}></input> 
            </div>
            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Birthday</label>
              <input type="text" className='form-control' name='birthday' placeholder='Enter Birthday' value={this.state.birthday}  onChange={this.handleInputChange}></input> 
            </div>
            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Contact No</label>
              <input type="text" className='form-control' name='contactNo' placeholder='Enter Contact No' value={this.state.contactNo}  onChange={this.handleInputChange}></input> 
            </div>
            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Grade</label>
              <input type="text" className='form-control' name='grade' placeholder='Enter Grade' value={this.state.grade}  onChange={this.handleInputChange}></input> 
            </div>
            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Address</label>
              <input type="text" className='form-control' name='address' placeholder='Enter Address' value={this.state.address} onChange={this.handleInputChange}></input> 
            </div>
  
            <button className='btn btn-success' type='submit' style={{marginTop:'15px'}} onClick={this.onSubmit}><i className='far fa-check-square'></i>&nbsp; Save</button>
          </form>
        </div>
      )
    }
}
