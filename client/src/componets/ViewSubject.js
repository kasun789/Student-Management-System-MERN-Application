import  React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';





function ViewSubject() {

   
  const [subject, setPost] = React.useState(null);
  let userId=useParams();
  console.log(userId)

  React.useEffect(() => {
    fetch(`http://localhost:3500/subject/${userId.id}`)
      .then((res) => res.json())
      .then((data) => setPost(data.p));
  }, [userId]);
  
  if (!subject) return null;
   
  return (
    <div style={{marginTop:'20px'}}>
    <h4>{subject.subjectNamee}</h4>
    <hr/>
    <dl className='row'>
      <dt className="col-sm-3">Subject Name</dt>
      <dd className='col-sm-9'>{subject.subjectName}</dd>
      <dt className="col-sm-3">Subject Code</dt>
      <dd className='col-sm-9'>{subject.subjectCode}</dd>
      <dt className="col-sm-3">Teacher Name</dt>
      <dd className='col-sm-9'>{subject.teacherName}</dd>
      <dt className="col-sm-3">Grade</dt>
      <dd className='col-sm-9'>{subject.Grade}</dd>
      
    </dl>
      
      
    </div>
  );




  // 
  // let userId=useParams();
  //  console.log(userId);
  // axios.get(`http://localhost:3500/book/${userId.id}`).then((res)=>{
  //    if(res.data.Success){
     
  //     setBook(res.data)
  //     //console.log(res.data)
      
  //   }
  // });

  // return(<div>{book.bookName}</div>)

  // const book = book.find((p) => p._id === id);
  // return <div>{book.bookName}</div>;
  

  
}


  

  

export default ViewSubject