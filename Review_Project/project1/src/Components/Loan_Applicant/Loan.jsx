import React from 'react';
import './Loan.css';
import { useNavigate } from 'react-router-dom';

const Loan = () => {

  const navigate =useNavigate();
  const NEWLOAN=()=>{
navigate('/NEWLOAN')
    
  }
  const Exists_LoanD=()=>{
navigate('/Exists_Loan')
    
  }
  return (
    <div className='full-background'>

    <div className='center-container'>
      <div className='Loan_BackGround'>
        <h3>Choose</h3>
        <div className='Loan_Button'>
          <p onClick={Exists_LoanD}>Exist's Loan</p>
        </div>
        <div className='Loan_Button'>

          <p onClick={NEWLOAN}>New Loan</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Loan;
