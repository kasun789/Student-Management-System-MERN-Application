
import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();
  const users =[
    {
      email:'test01@gmail.com',
      password:1234
    },
    {
      email:'test02@gmail.com',
      password:7890
    }
]
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleChange = (event )=>{
    event.preventDefault();
    const el = users.find(element=>{return element.email===email});
    if(el){
      // return(
      //   <div>
      //     <Home/>
      //   </div>
      // )
      navigate("/student")
    }
    else{
      navigate("/")
    }
    // console.log(event.target.value)
  }
  

  
  // console.log(password)


  return(
  <div className="container1"><h1 style={{marginTop:'70px',marginLeft:'370px',color:'black'}}>School Management System</h1>
  <div className='container' style={{width :'350px',height : '400px',marginTop:'100px',border:'1px solid lightgray',borderRadius:'30px',padding:'40px'}}>
  
  <form onSubmit={handleChange}>
         <h3>Sign In</h3>
         <div className="mb-3">
           <label>Email address</label>
       <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" >Submit </button>
        </div>
        <p className="forgot-password text-right">Forgot <a href="#">password?</a></p>
      </form>
      </div>
      </div>)
}
export default SignIn
// import React, { Component } from 'react'
// import Home from './Home'
// function sign() {
//   return(
//     <div>
//       <Home/>
//     </div>
    
//   )
// }
// export default class  extends Component {
//   render() {
//     return (
//       <div className='container' style={{width :'350px',height : '400px',marginTop:'160px',border:'1px solid lightgray',borderRadius:'30px',padding:'40px'}}>
//          <form>
//         <h3>Sign In</h3>
//         <div className="mb-3">
//           <label>Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//           />
//         </div>
//         <div className="mb-3">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//           />
//         </div>
//         <div className="mb-3">
//           <div className="custom-control custom-checkbox">
//             <input
//               type="checkbox"
//               className="custom-control-input"
//               id="customCheck1"
//             />
//             <label className="custom-control-label" htmlFor="customCheck1">
//               Remember me
//             </label>
//           </div>
//         </div>
//         <div className="d-grid">
//           <button type="submit" className="btn btn-primary" onClick={sign}>
//             Submit
//           </button>
//         </div>
//         <p className="forgot-password text-right">
//           Forgot <a href="#">password?</a>
//         </p>
//       </form>
//       </div>
//     )
//   }
// }
