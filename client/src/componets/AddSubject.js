import React, { Component } from 'react'
import axios from 'axios';

export default class AddSubject extends Component {

 constructor(props){
  super(props);
  this.state={
    subjectName:"",
    subjectCode:"",
    teacherName:"",
    Grade:""

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
   const {subjectName,subjectCode,teacherName,Grade} = this.state;
   const data={
    subjectName:subjectName,
    subjectCode:subjectCode,
    teacherName:teacherName,
    Grade:Grade,
   }

   

   axios.post('http://localhost:3500/subject/create',data).then((res)=>{
    if(res.data.Success){
       this.setState({

        subjectName:"",
        subjectCode:"", 
        teacherName:"",
        Grade:""
        
    

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
        <h1 className='h3 mb-3 font-weight-normal'>Add Subject</h1>
        <form className='neeeds-validation' noValidate>
          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Subject Name</label>
            <input type="text" className='form-control'  name='subjectName' placeholder='Enter Subject Name'  value={this.state.subjectName} onChange={this.handleInputChange}></input> 
          </div>
          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Subject Code</label>
            <input type="text" className='form-control'  name='subjectCode' placeholder='Enter Subject Code' value={this.state.subjectCode} onChange={this.handleInputChange}></input> 
          </div>
          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Teacher Name</label>
            <input type="text" className='form-control' name='teacherName' placeholder='Enter Teacher Name' value={this.state.teacherName}  onChange={this.handleInputChange}></input> 
          </div>
          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Grade</label>
            <input type="number" className='form-control' name='Grade' placeholder='Enter Grade' value={this.state.Grade} onChange={this.handleInputChange}></input> 
          </div>
          
          

          <button className='btn btn-success' type='submit' style={{marginTop:'15px'}} onClick={this.onSubmit}><i className='far fa-check-square'></i>&nbsp; Save</button>
        </form>
      </div>
    )
  }
}
