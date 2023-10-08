import React, { Component } from 'react'
import axios from 'axios';

export default class AddBook extends Component {

 constructor(props){
  super(props);
  this.state={
    bookName:"",
    authorName:"", 
    title:"",
    ISBN:0,
    noOfCopies:0,
    description:""

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
   const {bookName,authorName,title,ISBN,noOfCopies,description} = this.state;
   const data={
    bookName:bookName,
    authorName:authorName,
    title:title,
    ISBN:ISBN,
    noOfCopies:noOfCopies,
    description:description
   }

   console.log(data);

   axios.post('http://localhost:3500/book/create',data).then((res)=>{
    if(res.data.Success){
       this.setState({

        bookName:"",
        authorName:"", 
        title:"",
        ISBN:0,
        noOfCopies:0,
        description:""
    

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
        <h1 className='h3 mb-3 font-weight-normal'>Add New Book</h1>
        <form className='neeeds-validation' noValidate>
          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Book Name</label>
            <input type="text" className='form-control' name='bookName' placeholder='Enter Book Name' value={this.state.bookName} onChange={this.handleInputChange}></input> 
          </div>
          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Author Name</label>
            <input type="text" className='form-control' name='authorName' placeholder='Enter Author Name' value={this.state.authorName} onChange={this.handleInputChange}></input> 
          </div>
          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Title</label>
            <input type="text" className='form-control' name='title' placeholder='Title' value={this.state.title}  onChange={this.handleInputChange}></input> 
          </div>
          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>ISBN</label>
            <input type="number" className='form-control' name='ISBN' placeholder='Enter ISBN' value={this.state.ISBN} onChange={this.handleInputChange}></input> 
          </div>
          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>No Of Copies</label>
            <input type="number" className='form-control' name='noOfCopies' placeholder='Enter no of copies' value={this.state.noOfCopies} onChange={this.handleInputChange}></input> 
          </div>
          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Description</label>
            <input type="text" className='form-control' name='description' placeholder='Enter Description' value={this.state.description} onChange={this.handleInputChange}></input> 
          </div>

          <button className='btn btn-success' type='submit' style={{marginTop:'15px'}} onClick={this.onSubmit}><i className='far fa-check-square'></i>&nbsp; Save</button>
        </form>
      </div>
    )
  }
}
