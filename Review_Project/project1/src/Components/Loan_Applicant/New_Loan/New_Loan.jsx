import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // Import uuid for unique ID generation
import './New_Loan.css';

const New_Loan = () => {
  const [formData, setFormData] = useState({
    id: uuidv4(), // Initialize with a unique ID
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    needLoan: '',
    purpose: '',
    loanAmount: '',
    interestRate: 'Rate of Interest: 13%',
    commAddress: '',
    permAddress: '',
    processingCharge: 'Processing Charge: 500 Rupees',
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
      await axios.post('http://localhost:3003/submit-loan', formData);
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

  return (
    <div>
      <div className='LOAN_HEAD'>
        Loan Application
      </div>
      <div className='NEW_LOAN_FORM'>
        <form className='New_Loan_Container' onSubmit={handleSubmit}>
          <div className='textA1'>
            <h3>Applicant's Name</h3>
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
              name='purpose'
              placeholder='Purpose'
              value={formData.purpose}
              onChange={handleChange}
            />
          </div>
          <div className='textA1'>
            <textarea
              name='loanAmount'
              placeholder='Loan Amount'
              value={formData.loanAmount}
              onChange={handleChange}
            />
          </div>
          <div className='textA1'>
            <textarea
              name='interestRate'
              value={formData.interestRate}
              readOnly
            />
          </div>
          <div className='textA1'>
            <textarea
              name='commAddress'
              placeholder='Communication Address'
              value={formData.commAddress}
              onChange={handleChange}
            />
          </div>
          <div className='textA1'>
            <textarea
              name='permAddress'
              placeholder='Permanent Address'
              value={formData.permAddress}
              onChange={handleChange}
            />
          </div>
          <div className='textA1'>
            <textarea
              name='processingCharge'
              value={formData.processingCharge}
              readOnly
            />
          </div>
          <div className='textA1'>
            <textarea
              name='comments'
              placeholder='Comments or Queries ...'
              value={formData.comments}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='Contact_Submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default New_Loan;
