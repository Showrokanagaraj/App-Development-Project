import React, { useState } from 'react';
import '../../Validation/Update_Login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [Name, SetName] = useState("");
  const [Password, SetPassword] = useState("");
  const [Email, SetEmail] = useState("");
  const [Role, SetRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!Name) {
        alert("Please enter your Name.");
        console.log('Enter Name');
        return;
      }
      if (!Password) {
        alert("Please enter your Password.");
        console.log('Enter Password');
        return;
      }
      if (!Email) {
        alert("Please enter your Email.");
        console.log('Enter Email');
        return;
      }
      if (!Email.includes('@')) {
        alert("Please enter a valid Email address that contains '@'.");
        console.log('Enter valid Email with @');
        return;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(Email)) {
        alert("Please enter a valid Email address.");
        console.log('Enter valid Email');
        return;
      }
      if (!Role) {
        alert("Please select your Role.");
        console.log('Enter Role');
        return;
      }

      console.log(Name);
      console.log(Password);
      console.log(Email);
      console.log(Role);

     
      

      try
      {
       
        const response = await axios.post("http://localhost:3031/users",{
          Name:Name,
          Email:Email,
          Password:Password,
          
        });
        
        alert("Succesfull Signed Up");
        try{
          navigate('/Log');
        }
        catch(error)
        {
          console.error('this is a error',error)
        }
      }
      
    catch(error)
    {
    console.error('this is a error',error)
      }
      
      
      
      
      
  
} catch (error) {
      alert("An error occurred. Please try again.");
      console.log('This is an error:', error);
    }
  };

  return (
    <div className='RegisterContainer'>
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>
      <div className='Container'>
        <div className='COMPLETE'></div>
        <form onSubmit={handleSubmit}>
          <h1>Register ?</h1>
          <br></br>
          <div className='inputs'>
            <input className='input-field' type="text" value={Name} placeholder='   Name' onChange={e => SetName(e.target.value)}></input>
            <br></br>
            <input className='input-field' type="text" value={Email} placeholder='   Email' onChange={e => SetEmail(e.target.value)}></input>
            <br></br>
            <input className='input-field' type="password" value={Password} placeholder='   Password' onChange={e => SetPassword(e.target.value)}></input>
            <br></br>
            <select className='input-field' value={Role} onChange={e => SetRole(e.target.value)}>
              <option value="" disabled>Select Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <br></br>
            <br></br>
            <button type="submit" className="input-fieldgo"><h3>Register</h3></button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
