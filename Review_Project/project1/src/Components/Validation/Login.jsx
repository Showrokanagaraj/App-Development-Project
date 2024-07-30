



// import React,{useState} from 'react'
// import './Login.css'
// import { useNavigate} from 'react-router-dom';


// const Login = () => {

//   const loginStyle = {
//     backgroundImage: 'url(/path/to/your/image.jpg)',
//     backgroundSize: 'cover',
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   };


//     const [name, setname] = useState('');
//     const [password, setpassword] = useState('');

//   const navigate=useNavigate();


// //   const handleSubmit=async()=>{
// //     navigate('/');
// //   console.log(name)  ;
// //   console.log(password);



// //   }

// const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       if (!name) {
//         alert("Please enter your Name.");
//         console.log('Enter Name');
//         return;
//       }
//       if (!password) {
//         alert("Please enter your Password.");
//         console.log('Enter Password');
//         return;
//       }
  
//       // If all fields are provided, log their values and navigate to the root
//       console.log(name);
//       console.log(password);
        
//       navigate('/Home');
//     } catch (error) {
//       alert("An error occurred. Please try again.");
//       console.log('This is an error:', error);
//     }
//   }


//   return (
//     <div style={loginStyle}>
//     <head>
//     <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
//     </head>

// <div className='Container'>
// <div className='COMPLETE'>

// </div>

// <form onSubmit={handleSubmit}>
//     <h1>Login</h1>
//     <br></br>
    
// <div className='inputs'>

    
//     <input className='input-field' type="text" value={name} placeholder='   Username' onChange={e=>setname(e.target.value)} ></input>
//     <br></br>
//     <br></br>
//     <input className='input-field' type="password" value={password} placeholder='   Password' onChange={e=>setpassword(e.target.value)}></input>
//     <br></br>
//     <br></br>
//     <br></br>
//     <button type="submit" class="input-fieldgo"><h3>Login</h3></button>


// </div>
// </form>

// </div>
//     </div>
//   )
// }

// export default Login;


import React, { useState } from 'react';
import './Update_Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!name) {
        alert("Please enter your Name.");
        console.log('Enter Name');
        return;
      }
      if (!password) {
        alert("Please enter your Password.");
        console.log('Enter Password');
        return;
      }
  
      console.log(name);
      console.log(password);
        
      navigate('/Home');
    } catch (error) {
      alert("An error occurred. Please try again.");
      console.log('This is an error:', error);
    }
  };

  return (
    <div className="loginContainer">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
      </head>
      <div className='Container'>
        <div className='COMPLETE'></div>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <br />
          <div className='inputs'>
            <input 
              className='input-field' 
              type="text" 
              value={name} 
              placeholder='   Username' 
              onChange={e => setName(e.target.value)} 
            />
            <br /><br />
            <input 
              className='input-field' 
              type="password" 
              value={password} 
              placeholder='   Password' 
              onChange={e => setPassword(e.target.value)} 
            />
            <br /><br /><br />
            <button type="submit" className="input-fieldgo"><h3>Login</h3></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
