import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import { UserContext } from '../../UserContext/UserContext.js';
import '../Update_Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { setRole } = useContext(UserContext);
  const navigate = useNavigate();

  const validate = () => {
    let isValid = true;
  
    setEmailError(''); // Clear previous errors
    setPasswordError(''); // Clear previous errors

    if (email.trim() === '') {
      setEmailError('Please enter your email');
      isValid = false;
    }

    if (password.trim() === '') {
      setPasswordError('Please enter your password');
      isValid = false;
    }

    return isValid;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let flag = false;
  
    if (!validate()) return;
  
    try {
      const response = await axios.get("http://localhost:3031/users");
      console.log('API response:', response.data); // Debugging line
  
      const user = response.data.find(user => user.Email === email && user.Password === password);
      const role = email.endsWith('@admin.com') ? 'admin' : 'user';
      if(role==='admin'||role==='user')
      {
      
        flag=true;
        
        
        
        if (user) {
          setRole(role); // Set role in context
          alert("Successful LOGIN");
          navigate('/Home');
        }
        } else {
        alert("Wrong email or password");
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert("An error occurred. Please try again later.");
    }
  };
  

  const handleSubmits = async (event) => {
    event.preventDefault();

    // Validate inputs
    if (!validate()) return;

    try {
      // Determine role based on email

      // Fetch user data
      const response = await axios.get("http://localhost:3031/users");
      const user = response.data.find(user => user.Email === email && user.Password === password);

      if (user) {
        alert("Successful LOGIN");
        navigate('/Home'); // Navigate to Home if login is successful
      } else {
        alert("Wrong email or password");
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="loginContainer">
      <div className='Container'>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input
            className='input-field'
            type="text"
            value={email}
            placeholder='Email'
            onChange={e => setEmail(e.target.value)}
          />
          {emailError && <p className="error-message">{emailError}</p>} {/* Display email error */}
          
          <input
            className='input-field'
            type="password"
            value={password}
            placeholder='Password'
            onChange={e => setPassword(e.target.value)}
          />
          {passwordError && <p className="error-message">{passwordError}</p>} {/* Display password error */}
          
          <button type="submit" className="input-fieldgo">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
