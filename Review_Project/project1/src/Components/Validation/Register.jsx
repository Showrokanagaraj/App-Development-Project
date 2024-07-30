import React, { useState } from 'react';
import './Updated_Register.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [Name, SetName] = useState("");
  const [Username, SetUsername] = useState("");
  const [Password, SetPassword] = useState("");
  const [Email, SetEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!Name || !Username || !Password || !Email) {
        alert("Please fill in all fields.");
        return;
      }
      if (!Email.includes('@')) {
        alert("Please enter a valid Email address.");
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(Email)) {
        alert("Please enter a valid Email address.");
        return;
      }

      // Assume registration logic here
      await axios.post('/api/register', { Name, Username, Password, Email });

      alert("Registration successful");
      navigate('/Log'); // Navigate to login page after successful registration
    } catch (error) {
      alert("An error occurred. Please try again.");
      console.log('Error:', error);
    }
  };

  return (
    <div className='RegisterContainer'>
      <div className='Container'>
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <input
            className='input-field'
            type="text"
            value={Name}
            placeholder='Name'
            onChange={e => SetName(e.target.value)}
          />
          <input
            className='input-field'
            type="text"
            value={Username}
            placeholder='Username'
            onChange={e => SetUsername(e.target.value)}
          />
          <input
            className='input-field'
            type="text"
            value={Email}
            placeholder='Email'
            onChange={e => SetEmail(e.target.value)}
          />
          <input
            className='input-field'
            type="password"
            value={Password}
            placeholder='Password'
            onChange={e => SetPassword(e.target.value)}
          />
          <button type="submit" className="input-fieldgo">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
