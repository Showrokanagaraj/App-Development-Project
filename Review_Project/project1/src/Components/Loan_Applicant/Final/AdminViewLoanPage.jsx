import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Final/AdminViewPage.css';  // Import your CSS file

const AdminViewLoanPage = () => {
  const [loanData, setLoanData] = useState([]);

  useEffect(() => {
    const fetchLoanData = async () => {
      try {
        const response = await axios.get('http://localhost:3006/get-loan-data');
        setLoanData(response.data);
      } catch (error) {
        console.error('Error fetching loan data:', error);
      }
    };

    fetchLoanData();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await axios.post('http://localhost:3006/update-loan-status', { id, status });
      setLoanData(prevData =>
        prevData.map(loan => (loan.id === id ? { ...loan, status } : loan))
      );
    } catch (error) {
      console.error('Error updating loan status:', error);
      alert('Failed to update loan status. Check console for details.');
    }
  };

  return (
    <div className='admin-view-loan-page'>
      <h1>Loan Data</h1>
      <div className='display-data'>
        {loanData.length === 0 ? (
          <p>No data available</p>
        ) : (
          <table className='loan-data-table'>
            <thead>
              <tr>
                {loanData[0] && Object.keys(loanData[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loanData.map((row, index) => (
                <tr key={index} className={row.status === 'Approved' ? 'approved' : row.status === 'Rejected' ? 'rejected' : ''}>
                  {Object.values(row).map((value, idx) => (
                    <td key={idx}>{value}</td>
                  ))}
                  <td>
                    <button
                      onClick={() => updateStatus(row.id, 'Approved')}
                      className='approve-btn'
                      disabled={row.status === 'Approved'}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateStatus(row.id, 'Rejected')}
                      className='reject-btn'
                      disabled={row.status === 'Rejected'}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminViewLoanPage;
