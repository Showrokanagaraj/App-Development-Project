import React, { useContext, useState } from 'react';
import './Updated_Home.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext/UserContext.js';  // Import UserContext

const Home = () => {
  const { role } = useContext(UserContext);  // Access the user's role
  const [isEditing, setIsEditing] = useState(false);
  const [headerText, setHeaderText] = useState('Welcome to Home Page');
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    if (page === 'Loan') {
      if (role === 'admin') {
        navigate('/AdminViewLoanPage');  // Redirect Admin to AdminViewLoanPage
      } else {
        navigate('/FORM');  // Redirect Users to FORM page
      }
    } else {
      navigate(page);  // Redirect Users to the normal page
    }
  };

  const handleLogoutClick = () => {
    navigate('/Log');
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    console.log(`Header text updated to: ${headerText}`);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <div className='HEADS'>
        <div className='Top_NavBar'>
          <ul>
            <li className="active"><a href="#" onClick={() => handleNavigation('/Home')}>Home</a></li>
            <li><a href="#Loan" onClick={() => handleNavigation('Loan')}>Loan</a></li>
            <li><a href="#Loan Status" onClick={() => handleNavigation('/LoanStatus')}>Loan Status</a></li>
            <li><a href="#Profile" onClick={() => handleNavigation('/Profile')}>Profile</a></li>
            <li><a href="#Contact" onClick={() => handleNavigation('/Contact')}>Contact us</a></li>
          </ul>

          <div className='Log_out'>
            <button className='Log' onClick={handleLogoutClick}>Log</button>
          </div>
        </div>

        <div className='NewLaunches'>
          {/* Conditional rendering based on the role */}
          {role === 'admin' ? (
            <div>
              {isEditing ? (
                <div>
                  <input 
                    type="text" 
                    value={headerText} 
                    onChange={(e) => setHeaderText(e.target.value)} 
                  />
                  <button onClick={handleSaveClick}>Save</button>
                  <button onClick={handleCancelClick}>Cancel</button>
                </div>
              ) : (
                <div>
                  <h1>{headerText}</h1>
                  <button onClick={handleEditClick}>Edit</button>
                </div>
              )}
            </div>
          ) : (
            <h1>{headerText}</h1>
          )}
          
          {/* Content below */}
          <br />
          <h3>AGRICULTURE LOAN :</h3>
          <hr />
          <p>Union Bank provides a complete suite for products and services for Agricultural/ SSI/ Tertiary Sector needs. The range is large and varied, and tailored for all segments of customers from individuals to corporate. Lending to Priority Sectors of the economy is a very important of our advances portfolio.</p>
          <h3>Short Term Credit :</h3>
          <hr />
          <p>The Agriculture sector plays a major role not only in the economy of our country but also in providing livelihoods to millions of rural folk. We support the farmer by way of Short term credit for financing crop production, by helping with purchase of seeds, fertilizers, pesticides etc. All types of crops are supported, from staples like rice to cash crops like sugarcane and cotton including multiple cropping.</p>
          <br /><br />
          <hr />
          <hr />
          <hr />
          <hr />
          <h4>UNION KRISHI KAMDHENU GOLD LOAN SCHEME</h4>
          <h4>KISAN CREDIT CARD (UNION GREEN CARD)</h4>
          <h4>Kisan Credit Card ( Animal Husbandry & Fishery)</h4>
          <h4>Loan against Silver</h4>
          <h4>SCHEME FOR LOAN AGAINST SOVEREIGN GOLD BONDS</h4>
          <h4>SOD AGAINST GOLD ORNAMENTS</h4>
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <h3>Long Term Credit :</h3>
          <p>Our Government Business Cell offers a bouquet of products for our customers: Pension payments, Collection of various Taxes, Deposit Schemes like Senior Citizens Deposit Scheme & Public Provident Fund Accounts, Investment opportunities in Government Bonds, Future - securing Schemes like the New Pension Scheme. In many ways, we are like a bridge linking the people and the Government.</p>
          <h2>Union Kisan Pushpak</h2>
          <h2>Long Term Credit Government Business Finance</h2>
          <h2><a>Union Kisan Pushpak</a></h2>
          <div className='LINKS'>
            <a className='h2' href=''>Union CBG (Compressed Bio Gas) scheme</a>
            <br />
            <a className='h2' href=''>image Long Term Credit</a>
            <br />
            <a className='h2' href=''>Union Kisan Pushpak</a>
            <br />
            <a className='h2' href=''>Debt Swap Scheme</a>
            <br />
            <a className='h2' href=''>Finance to Nursery</a>
            <hr />
            <hr />
          </div>
          <div className='Part_2'>
            <div className='Box2'>
              <div className='Notice'>
                Notice
              </div>
              <div className='con1'>
                <h2>Website of Ministry of Agriculture & Farmers Welfare</h2>
              </div>
              <br />
              <p>Information is provided about the Ministry of Agriculture & Farmers Welfare. Users can find details related to programmes and schemes related to horticulture, seeds, plant protection, etc. Information about drought management, vigilance, weather and agricultural activities is given. Reports related to various agricultural topics are also available</p>
              <div className='con2'>
                <h2>Information on Bihar Saur Kranti Sinchai yojana (Solar Energy Irrigation Scheme)</h2>
              </div>
              <br />
              <p>Under this scheme, farmers will get solar pumps for irrigation purposes. 75% subsidy grant is offered by the farmers and the remaining 25% will be deposited by the farmers.</p>
              <div className='con3'>
                <h2>Website of National Agriculture Infra Financing Facility</h2>
              </div>
              <br />
              <p>The role of infrastructure is crucial for agriculture development and for taking the production dynamics to the next level. It is only through the development of infrastructure, especially at the post-harvest stage that the produce can be optimally utilized with opportunity for value addition and fair deal for the farmers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Home;
