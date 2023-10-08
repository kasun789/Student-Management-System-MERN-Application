import React, { Component } from 'react'
import axios from 'axios';


export default class Subject extends Component {
constructor(props){
  super(props);

  this.state={
    subject:[] //array 
  };
}


componentDidMount(){


  this.retrievePosts();
}

retrievePosts(){
  axios.get("http://localhost:3500/subject").then(res=>{
  if(res.data.Success){
    this.setState({
      subject:res.data.resulting  //array above
    });
    console.log(this.state.subject);
   
  }
  });
}

onDelete=(id)=>{
  axios.delete(`http://localhost:3500/subject/delete/${id}`).then(res =>{
      alert("DeleteSuccessfully");
      this.retrievePosts();
    } );
    
}
  
  
  render() {
    return (
      <div className="container">
       <h1>Subject</h1>
       <table className="table">
         <thead>
           <tr>
            <th scope="col">No</th>
            <th scope="col">Subject Name</th>
            <th scope="col">Subject Code</th>
            <th scope="col">Teacher Name</th>
            <th scope="col">Grade</th>
            
           </tr>
          
         </thead>
         <tbody>
          {this.state.subject.map((subject,index)=>(
            <tr>
              <th scope="raw">{index+1}</th>
              <td>
                 <a href={`/subject/${subject._id}`} style={{textDecoration:'none'}}>
                      {subject.subjectName}
                 </a>
                 
              </td>
              <td>{subject.subjectCode}</td>
              <td>{subject.teacherName}</td>
              <td>{subject.grade}</td>
              
              <td>
                <a className= 'btn btn-warning' href = {`/subject/update/${subject._id}`}>
                  <i className='fas fa-edit'></i>&nbsp;Edit
                </a>
                &nbsp;
                <a className= 'btn btn-danger' href = "#" onClick={()=>this.onDelete(subject._id)}>
                  <i className='far fa-trash-alt'></i>&nbsp;Delete
                </a>
              </td>
            </tr>
          ))}
         </tbody>

       </table>
       <button className='btn btn-success'><a href="/subject/create" style={{textDecoration:'none',color:'white'}}>Add New Subject</a></button>
      </div>
    )
  }
}
