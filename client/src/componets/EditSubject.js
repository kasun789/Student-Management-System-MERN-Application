import React, { Component } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


function EditSubject() {

  const [subject, setSubject] = React.useState(null);
      let userId=useParams();
      console.log(userId)
    
      React.useEffect(() => {
         fetch(`http://localhost:3500/subject/${userId.id}`)
           .then((res) => res.json())
           .then((data) => setSubject(data.p));
       }, [userId]);
      
       if (!subject) return null;
          var subjectName=subject.subjectName;
          var subjectCode=subject.subjectCode;
          var teacherName=subject.teacherName;
          var Grade=subject.Grade;
          
          

      
    // axios.get(`http://localhost:3500/book/${userId.id}`).then((res)=>{
    //   if(res.data.Success){
    //     this.setState({
    //        bookName:res.data.p.bookName,
    //        authorName:res.data.p.authorName,
    //        title:res.data.p.title,
    //        ISBN:res.data.p.ISBN,
    //        noOfCopies:res.data.p.noOfCopies,
    //        description:res.data.p.description

    //     });
        
    //   }
    // });


  
  
  function handleInputChange(e){
        let {name,value} =e.target;
             // [name]=value
        // console.log(e.target.value)
        value = e.target.value
        
       }
      
  function onSubmit(e){
         e.preventDefault();
         //const id= this.props.match.params.id;
         const {subjectName,subjectCode,teacherName,Grade} = subject;
         const data={
            subjectName:subjectName,
            subjectCode:subjectCode,
            teacherName:teacherName,
            Grade:Grade,
         }

         console.log(data);
  
        axios.put(`http://localhost:3500/subject/update/${userId.id}`,data).then((res)=>{
          if(res.data.Success){
            alert("subject Updated Successfully");
            
          }
        
        });
      
      }

      return (
                <div className='col-md-8 mt-4 mx-auto'>
                  <h1 className='h3 mb-3 font-weight-normal'>Update Subject</h1>
                  <form className='neeeds-validation' noValidate>
                    <div className='form-group' style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}}>Subject Name</label>
                      <input type="text" className='form-control' name='bookName' placeholder='Enter Book Name'  value={subjectName} onChange={handleInputChange}></input> 
                    </div>
                    <div className='form-group' style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}}>Subject Code</label>
                      <input type="text" className='form-control' name='authorName' placeholder='Enter Author Name' value={subjectCode} ></input> 
                    </div>
                    <div className='form-group' style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}}>Teacher Name</label>
                      <input type="text" className='form-control' name='title' placeholder='Title' value={teacherName}  ></input> 
                    </div>
                    
                    
          
                    <button className='btn btn-success' type='submit' style={{marginTop:'15px'}} onClick={onSubmit}><i className='far fa-check-square'></i>&nbsp; Update</button> 
                  </form>
                </div>
              )
}
export default EditSubject
