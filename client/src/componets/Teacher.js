import React, { Component } from 'react'
import axios from 'axios';


export default class Teacher extends Component {
constructor(props){
  super(props);

  this.state={
    teachers:[] //array 
  };
}


componentDidMount(){


  this.retrievePosts();
}

retrievePosts(){
  axios.get("http://localhost:3500/teacher").then(res=>{
  if(res.data.Success){
    this.setState({
        teachers:res.data.resulting  //array above
    });
    console.log(this.state.teachers);
   
  }
  });
}


onDelete=(id)=>{
  axios.delete(`http://localhost:3500/teacher/delete/${id}`).then(res =>{
      alert("DeleteSuccessfully");
      this.retrievePosts();
    } );
}
  
  render() {
    return (
      <div className="container">
       <p>Teachers</p>
       <table className="table">
         <thead>
           <tr>
            <th scope="col">No</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Birthday</th>
            <th scope="col">Contact No</th>
            <th scope="col">Subject</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
           </tr>
          
         </thead>
         <tbody>
          {this.state.teachers.map((teachers,index)=>(
            <tr>
              <th scope="raw">{index+1}</th>
              <td>
                 <a href={`/teacher/${teachers._id}`} style={{textDecoration:'none'}}>
                      {teachers.tfname}
                 </a>
                 
              </td>
              <td>{teachers.flname}</td>
              <td>{teachers.fbirthday}</td>
              <td>{teachers.fcontactNo}</td>
              <td>{teachers.subject}</td>
              <td>{teachers.taddress}</td>
              <td>
                <a className= 'btn btn-warning' href = "#">
                  <i className='fas fa-edit'></i>&nbsp;Edit
                </a>
                &nbsp;
                <a className= 'btn btn-danger' href = "#" onClick={()=>this.onDelete(teachers._id)}>
                  <i className='far fa-trash-alt'></i>&nbsp;Delete
                </a>
              </td>
            </tr>
          ))}
         </tbody>

       </table>
       <button className='btn btn-success'><a href="/teacher/create" style={{textDecoration:'none',color:'white'}}>Add New Teacher</a></button>
      </div>
    )
  }
}
