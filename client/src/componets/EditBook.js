import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


function EditBook() {

  const [name, setName] = useState("");
  const [book, setBook] = React.useState(null);
      let userId=useParams();
      console.log(userId)
    
      React.useEffect(() => {
         fetch(`http://localhost:3500/book/${userId.id}`)
           .then((res) => res.json())
           .then((data) => setBook(data.p));
       }, [userId]);
      
       if (!book) return null;
          var bookName=book.bookName;
          var authorName=book.authorName;
          var title=book.title;
          var ISBN=book.ISBN;
          var noOfCopies=book.noOfCopies;
          var description=book.description;
          

      
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


  
  

  // function handleInputChange(e){
        
  //   setName(e.target.value);
    
  //       //let {name,value} =e.target;
  //            // [name]=value
  //       // console.log(e.target.value)
  //       //value = e.target.value
  //       //console.log(value)
        
  //      }
      
  function onSubmit(e){
         e.preventDefault();
         //const id= this.props.match.params.id;
         const {bookName,authorName,title,ISBN,noOfCopies,description} = book;
         const data={
          bookName:bookName,
          authorName:authorName,
          title:title,
          ISBN:ISBN,
          noOfCopies:noOfCopies,
          description:description
         }

         console.log(data);
  
        axios.put(`http://localhost:3500/book/update/${userId.id}`,data).then((res)=>{
          if(res.data.Success){
            alert("Book Updated Successfully");
            
          }
        
        });
      
      }

      return (
                <div className='col-md-8 mt-4 mx-auto'>
                  <h1 className='h3 mb-3 font-weight-normal'>Update Book</h1>
                  <form className='neeeds-validation' noValidate>
                    <div className='form-group' style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}}>Book Name</label>
                      <input type="text" className='form-control' name='bookName' placeholder='Enter Book Name'  value={bookName} onChange={(e) => setName(e.target.value)}></input> 
                    </div>
                    <div className='form-group' style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}}>Author Name</label>
                      <input type="text" className='form-control' name='authorName' placeholder='Enter Author Name' value={authorName} ></input> 
                    </div>
                    <div className='form-group' style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}}>Title</label>
                      <input type="text" className='form-control' name='title' placeholder='Title' value={title}  ></input> 
                    </div>
                    <div className='form-group' style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}}>ISBN</label>
                      <input type="number" className='form-control' name='ISBN' placeholder='Enter ISBN' value={ISBN} ></input> 
                    </div>
                    <div className='form-group' style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}}>No Of Copies</label>
                      <input type="number" className='form-control' name='noOfCopies' placeholder='Enter no of copies' value={noOfCopies} ></input> 
                    </div>
                    <div className='form-group' style={{marginBottom:'15px'}}>
                      <label style={{marginBottom:'5px'}}>Description</label>
                      <input type="text" className='form-control' name='description' placeholder='Enter Description' value={description} ></input> 
                    </div>
          
                    <button className='btn btn-success' type='submit' style={{marginTop:'15px'}} onClick={onSubmit}><i className='far fa-check-square'></i>&nbsp; Update</button> 
                  </form>
                </div>
              )
}
export default EditBook













































// export default class EditBook extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       bookName:"",
//       authorName:"", 
//       title:"",
//       ISBN:0,
//       noOfCopies:0,
//       description:""
  
//     }
  
    
//    }
  
//    handleInputChange=(e)=>{
//     const {name,value} =e.target;
  
//     this.setState({
//       ...this.state,
//       [name]:value
//     })
//    }
  
//    onSubmit=(e)=>{
//      e.preventDefault();
//      const id= this.props.match.params.id;
//      const {bookName,authorName,title,ISBN,noOfCopies,description} = this.state;
//      const data={
//       bookName:bookName,
//       authorName:authorName,
//       title:title,
//       ISBN:ISBN,
//       noOfCopies:noOfCopies,
//       description:description
//      }
  
//      console.log(data);
  
//      axios.put(`http://localhost:3500/book/update/${id}`,data).then((res)=>{
//       if(res.data.Success){
//         alert("Book Updated Successfully");
//          this.setState({
  
//           bookName:"",
//           authorName:"", 
//           title:"",
//           ISBN:0,
//           noOfCopies:0,
//           description:""
      
  
//          })
//       }
     
//     });
  
//    }

//   //  function edit() {
//   //     const [book, setPost] = React.useState(null);
//   //     let userId=useParams();
//   //     console.log(userId)
    
//   //     React.useEffect(() => {
//   //       fetch(`http://localhost:3500/book/${userId.id}`)
//   //         .then((res) => res.json())
//   //         .then((data) => setPost(data.p));
//   //     }, [userId]);
      
//   //     if (!book) return null;
//   //  }
   
  
//   //  componentDidMount(){
//   //   const {userId}=useParams();

//   //   axios.get(`http://localhost:3500/book/${userId.id}`).then((res)=>{
//   //     if(res.data.Success){
//   //       this.setState({
//   //          bookName:res.data.p.bookName,
//   //          authorName:res.data.p.authorName,
//   //          title:res.data.p.title,
//   //          ISBN:res.data.p.ISBN,
//   //          noOfCopies:res.data.p.noOfCopies,
//   //          description:res.data.p.description

//   //       });
        
//   //     }
//   //   });
//   //  }
  
  
//     render() {
//       return (
//         <div className='col-md-8 mt-4 mx-auto'>
//           <h1 className='h3 mb-3 font-weight-normal'>Edit Book</h1>
//           <form className='neeeds-validation' noValidate>
//             <div className='form-group' style={{marginBottom:'15px'}}>
//               <label style={{marginBottom:'5px'}}>Book Name</label>
//               <input type="text" className='form-control' name='bookName' placeholder='Enter Book Name' value={this.state.bookName} onChange={this.handleInputChange}></input> 
//             </div>
//             <div className='form-group' style={{marginBottom:'15px'}}>
//               <label style={{marginBottom:'5px'}}>Author Name</label>
//               <input type="text" className='form-control' name='authorName' placeholder='Enter Author Name' value={this.state.authorName} onChange={this.handleInputChange}></input> 
//             </div>
//             <div className='form-group' style={{marginBottom:'15px'}}>
//               <label style={{marginBottom:'5px'}}>Title</label>
//               <input type="text" className='form-control' name='title' placeholder='Title' value={this.state.title}  onChange={this.handleInputChange}></input> 
//             </div>
//             <div className='form-group' style={{marginBottom:'15px'}}>
//               <label style={{marginBottom:'5px'}}>ISBN</label>
//               <input type="number" className='form-control' name='ISBN' placeholder='Enter ISBN' value={this.state.ISBN} onChange={this.handleInputChange}></input> 
//             </div>
//             <div className='form-group' style={{marginBottom:'15px'}}>
//               <label style={{marginBottom:'5px'}}>No Of Copies</label>
//               <input type="number" className='form-control' name='noOfCopies' placeholder='Enter no of copies' value={this.state.noOfCopies} onChange={this.handleInputChange}></input> 
//             </div>
//             <div className='form-group' style={{marginBottom:'15px'}}>
//               <label style={{marginBottom:'5px'}}>Description</label>
//               <input type="text" className='form-control' name='description' placeholder='Enter Description' value={this.state.description} onChange={this.handleInputChange}></input> 
//             </div>
  
//             <button className='btn btn-success' type='submit' style={{marginTop:'15px'}} onClick={this.onSubmit}><i className='far fa-check-square'></i>&nbsp; Update</button>
//           </form>
//         </div>
//       )
//     }
// }

