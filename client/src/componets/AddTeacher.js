import React, { Component } from 'react'
import axios from 'axios';

export default class AddTeacher extends Component {
  constructor(props){
    super(props);
    this.state={
      tfname:"",
      tlname:"", 
      tbirthday:"",
      tcontactNo:"",
      subject:"",
      taddress:""
  
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
     const {tfname,tlname,tbirthday,tcontactNo,subject,taddress} = this.state;
     const data={
      tfname:tfname,
      tlname:tlname,
      tbirthday:tbirthday,
      tcontactNo:tcontactNo,
      subject:subject,
      taddress:taddress


     }
  
     console.log(data);
  
     axios.post('http://localhost:3500/teacher/save',data).then((res)=>{
      if(res.data.Success){
         this.setState({
  
          tfname:"",
          tlname:"", 
          tbirthday:"",
          tcontactNo:"",
          subject:"",
          taddress:""
      
  
         })
      }
     
    });
  
   }
  
  
  
    render() {
      return (
        <div className='col-md-8 mt-4 mx-auto'>
          <h1 className='h3 mb-3 font-weight-normal'>Add New Teacher</h1>
          <form className='neeeds-validation' noValidate>
            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>First Name</label>
              <input type="text" className='form-control' name='tfname' placeholder='Enter First Name' value={this.state.tfname} onChange={this.handleInputChange}></input> 
            </div>
            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Last Name</label>
              <input type="text" className='form-control' name='tlname' placeholder='Enter Last Name' value={this.state.tlname} onChange={this.handleInputChange}></input> 
            </div>
            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Birthday</label>
              <input type="text" className='form-control' name='tbirthday' placeholder='Enter Birthday' value={this.state.tbirthday}  onChange={this.handleInputChange}></input> 
            </div>
            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Contact No</label>
              <input type="text" className='form-control' name='tcontactNo' placeholder='Enter Contact No' value={this.state.tcontactNo}  onChange={this.handleInputChange}></input> 
            </div>
            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Subject</label>
              <input type="text" className='form-control' name='subject' placeholder='Enter Subject' value={this.state.subject}  onChange={this.handleInputChange}></input> 
            </div>
            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Address</label>
              <input type="text" className='form-control' name='taddress' placeholder='Enter Address' value={this.state.taddress} onChange={this.handleInputChange}></input> 
            </div>
  
            <button className='btn btn-success' type='submit' style={{marginTop:'15px'}} onClick={this.onSubmit}><i className='far fa-check-square'></i>&nbsp; Save</button>
          </form>
        </div>
      )
    }
}
