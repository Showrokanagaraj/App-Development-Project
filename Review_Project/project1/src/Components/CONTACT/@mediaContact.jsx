import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs
import './@mediaContact.css';
import { useNavigate } from 'react-router-dom';

const Contactmedia = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: uuidv4(), // Initialize with a unique ID
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    needLoan: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3008/submit-contact', formData);
      console.log('Data filled');
      alert('Data saved to Excel file');
      // Generate a new unique ID for the next submission
      setFormData({
        ...formData,
        id: uuidv4()
      });
    } catch (error) {
      console.error('There was an error saving the data!', error);
    }
  };

  const GoBACKK = () => {
    navigate('/Log');
  };

  return (
    <div className='contactBackground'>
      <div className='container01'>
        <form onSubmit={handleSubmit}>
          <div className='textA1'>
            <h3>Name</h3>
            <textarea
              name='firstName'
              placeholder='First Name'
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='textA1'>
            <textarea
              name='lastName'
              placeholder='Last Name'
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className='textA1'>
            <h3>Email</h3>
            <textarea
              name='email'
              placeholder='example@gmail.com'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <h3>Gender</h3>
          <label>
            <input
              type='radio'
              name='gender'
              value='Male'
              onChange={handleChange}
            /> Male
          </label>
          <label>
            <input
              type='radio'
              name='gender'
              value='Female'
              onChange={handleChange}
            /> Female
          </label>
          <h4>Need Loan?</h4>
          <label>
            <input
              type='radio'
              name='needLoan'
              value='Yes'
              onChange={handleChange}
            /> Yes
          </label>
          <label>
            <input
              type='radio'
              name='needLoan'
              value='No'
              onChange={handleChange}
            /> No
          </label>
          <h3>Comments</h3>
          <div className='textA1'>
            <textarea
              name='comments'
              placeholder='Comments'
              value={formData.comments}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='Contact_Submit'>Submit</button>
        </form>
      </div>

      <div className='Goback'>
        <button className='Go_back' onClick={GoBACKK}>Go Back</button>
      </div>
    </div>
  );
};

export default Contactmedia;
