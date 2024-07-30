import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AdminViewContactPage = () => {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await axios.get('http://localhost:3009/get-contact-data');
        setContactData(response.data);
      } catch (error) {
        console.error('Error fetching contact data:', error);
      }
    };

    fetchContactData();
  }, []);

  return (
    <div className='admin-view-contact-page'>
      <h1>Contact Requests</h1>
      <div className='display-data'>
        {contactData.length === 0 ? (
          <p>No contact requests available</p>
        ) : (
          <table className='contact-data-table'>
            <thead>
              <tr>
                {contactData[0] && Object.keys(contactData[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {contactData.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, idx) => (
                    <td key={idx}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminViewContactPage;
