import React, { useState } from 'react';
import axios from 'axios';
// import './Exists_Loan.css';

const Exists_Loan = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3002/check-loan', { email });
      if (response.data.status === 'success') {
        setStatus('Data found');
        setData(response.data.data);
      } else {
        setStatus('No data found');
      }
    } catch (error) {
      console.error('There was an error checking the data!', error);
      setStatus('Error checking data');
    }
  };

  return (
    <div className='Exists_Loan_Container'>
      <div className='Exits_Container'>
        <p>Enter Email</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit" onClick={handleSubmit}>Check</button>
        <div className='DISPLAY_STATUS'>{status}</div>
        {data.length > 0 && (
          <div className='DATA_DISPLAY'>
            {data.map((row, index) => (
              <div key={index}>
                <p><strong>Unique ID:</strong> {row[1]}</p>
                <p><strong>First Name:</strong> {row[2]}</p>
                <p><strong>Last Name:</strong> {row[3]}</p>
                <p><strong>Email:</strong> {row[4]}</p>
                <p><strong>Gender:</strong> {row[5]}</p>
                <p><strong>Need Loan:</strong> {row[6]}</p>
                <p><strong>Purpose:</strong> {row[7]}</p>
                <p><strong>Loan Amount:</strong> {row[8]}</p>
                <p><strong>Interest Rate:</strong> {row[9]}</p>
                <p><strong>Communication Address:</strong> {row[10]}</p>
                <p><strong>Permanent Address:</strong> {row[11]}</p>
                <p><strong>Processing Charge:</strong> {row[12]}</p>
                <p><strong>Comments:</strong> {row[13]}</p>
                <hr />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Exists_Loan;
