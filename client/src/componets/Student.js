import React, { Component } from 'react'
import axios from 'axios';


export default class Student extends Component {
constructor(props){
  super(props);

  this.state={
    students:[] //array 
  };
}


componentDidMount(){


  this.retrievePosts();
}

retrievePosts(){
  axios.get("http://localhost:3500/student").then(res=>{
  if(res.data.Success){
    this.setState({
      students:res.data.resulting  //array above
    });
    console.log(this.state.students);
   
  }
  });
}


onDelete=(id)=>{
  axios.delete(`http://localhost:3500/student/delete/${id}`).then(res =>{
      alert("DeleteSuccessfully");
      this.retrievePosts();
    } );
}
  
  render() {
    return (
      <div className="container">
       <h1>Students</h1>
       <table className="table">
         <thead>
           <tr>
            <th scope="col">No</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Birthday</th>
            <th scope="col">Contact No</th>
            <th scope="col">Grade</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
           </tr>
          
         </thead>
         <tbody>
          {this.state.students.map((students,index)=>(
            <tr>
              <th scope="raw">{index+1}</th>
              <td>
                 <a href={`/student/${students._id}`} style={{textDecoration:'none'}}>
                      {students.fname}
                 </a>
                 
              </td>
              <td>{students.lname}</td>
              <td>{students.birthday}</td>
              <td>{students.contactNo}</td>
              <td>{students.grade}</td>
              <td>{students.address}</td>
              <td>
                <a className= 'btn btn-warning' href = {`/student/update/${students._id}`}>
                  <i className='fas fa-edit'></i>&nbsp;Edit
                </a>
                &nbsp;
                <a className= 'btn btn-danger' href = "#" onClick={()=>this.onDelete(students._id)}>
                  <i className='far fa-trash-alt'></i>&nbsp;Delete
                </a>
              </td>
            </tr>
          ))}
         </tbody>

       </table>
       <button className='btn btn-success'><a href="/student/create" style={{textDecoration:'none',color:'white'}}>Add New Student</a></button>
      </div>
    )
  }
}
