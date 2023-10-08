import  React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';





function ViewBook() {

   
  const [book, setPost] = React.useState(null);
  let userId=useParams();
  console.log(userId)

  React.useEffect(() => {
    fetch(`http://localhost:3500/book/${userId.id}`)
      .then((res) => res.json())
      .then((data) => setPost(data.p));
  }, [userId]);
  
  if (!book) return null;
   
  return (
    <div style={{marginTop:'20px'}}>
    <h4>{book.bookName}</h4>
    <hr/>
    <dl className='row'>
      <dt className="col-sm-3">Author Name</dt>
      <dd className='col-sm-9'>{book.authorName}</dd>
      <dt className="col-sm-3">Title</dt>
      <dd className='col-sm-9'>{book.title}</dd>
      <dt className="col-sm-3">ISBN</dt>
      <dd className='col-sm-9'>{book.ISBN}</dd>
      <dt className="col-sm-3">No of Copies</dt>
      <dd className='col-sm-9'>{book.noOfCopies}</dd>
      <dt className="col-sm-3">Description</dt>
      <dd className='col-sm-9'>{book.description}</dd>
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


  

  

export default ViewBook


