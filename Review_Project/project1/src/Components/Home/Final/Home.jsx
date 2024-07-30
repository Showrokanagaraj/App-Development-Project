import React, { useContext, useRef, useState } from 'react';
import '../Updated_Home.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext/UserContext.js';

const Home = () => {
  const { role } = useContext(UserContext);

  // States for managing editing modes and content
  const [isEditingHeader, setIsEditingHeader] = useState(false);
  const [isEditingSection1, setIsEditingSection1] = useState(false);
  const [isEditingSection2, setIsEditingSection2] = useState(false);
  const [isEditingSection3, setIsEditingSection3] = useState(false);
  const [isEditingSection4, setIsEditingSection4] = useState(false);
  const [isEditingLinks, setIsEditingLinks] = useState(false);
  const [isEditingPart2, setIsEditingPart2] = useState(false);

  // States for content text
  const [headerText, setHeaderText] = useState('Welcome to Home Page');
  const [section1Text, setSection1Text] = useState(`Union Bank provides a complete suite for products and services for Agricultural/ SSI/ Tertiary Sector needs. The range is large and varied, and tailored for all segments of customers from individuals to corporate. Lending to Priority Sectors of the economy is a very important part of our advances portfolio.`);
  const [section2Text, setSection2Text] = useState(`The Agriculture sector plays a major role not only in the economy of our country but also in providing livelihoods to millions of rural folk. We support the farmer by way of Short term credit for financing crop production, by helping with purchase of seeds, fertilizers, pesticides etc. All types of crops are supported, from staples like rice to cash crops like sugarcane and cotton including multiple cropping.`);
  const [section3Text, setSection3Text] = useState(`Our Government Business Cell offers a bouquet of products for our customers: Pension payments, Collection of various Taxes, Deposit Schemes like Senior Citizens Deposit Scheme & Public Provident Fund Accounts, Investment opportunities in Government Bonds, Future - securing Schemes like the New Pension Scheme. In many ways, we are like a bridge linking the people and the Government.`);
  const [section4Text, setSection4Text] = useState(`Information is provided about the Ministry of Agriculture & Farmers Welfare. Users can find details related to programmes and schemes related to horticulture, seeds, plant protection, etc. Information about drought management, vigilance, weather and agricultural activities is given. Reports related to various agricultural topics are also available`);
  const [linksText, setLinksText] = useState(`Union CBG (Compressed Bio Gas) scheme
Union Kisan Pushpak
Debt Swap Scheme
Finance to Nursery`);
  const [part2Text, setPart2Text] = useState(`Information is provided about the Ministry of Agriculture & Farmers Welfare. Users can find details related to programmes and schemes related to horticulture, seeds, plant protection, etc. Information about drought management, vigilance, weather and agricultural activities is given. Reports related to various agricultural topics are also available
Information on Bihar Saur Kranti Sinchai yojana (Solar Energy Irrigation Scheme) Under this scheme, farmers will get solar pumps for irrigation purposes. 75% subsidy grant is offered by the farmers and the remaining 25% will be deposited by the farmers.
Website of National Agriculture Infra Financing Facility The role of infrastructure is crucial for agriculture development and for taking the production dynamics to the next level. It is only through the development of infrastructure, especially at the post-harvest stage that the produce can be optimally utilized with opportunity for value addition and fair deal for the farmers.`);

  const navigate = useNavigate();

  // const CONNAV = () => {
  //   navigate('/CONNAV');
  // };

  const aboutSectionRef = useRef(null);
  const handleLogoutClick = () => {
    navigate('/Log');
  };

  const GOFORM = () => {
    navigate('/FORM');
  };

  // Header editing functions
  const handleEditHeaderClick = () => {
    setIsEditingHeader(true);
  };

  const handleSaveHeaderClick = () => {
    setIsEditingHeader(false);
    console.log(`Header text updated to: ${headerText}`);
  };

  const handleCancelHeaderClick = () => {
    setIsEditingHeader(false);
  };

  // Section 1 editing functions
  const handleEditSection1Click = () => {
    setIsEditingSection1(true);
  };

  const handleSaveSection1Click = () => {
    setIsEditingSection1(false);
    console.log(`Section 1 text updated to: ${section1Text}`);
  };

  const handleCancelSection1Click = () => {
    setIsEditingSection1(false);
  };

  // Section 2 editing functions
  const handleEditSection2Click = () => {
    setIsEditingSection2(true);
  };

  const handleSaveSection2Click = () => {
    setIsEditingSection2(false);
    console.log(`Section 2 text updated to: ${section2Text}`);
  };

  const handleCancelSection2Click = () => {
    setIsEditingSection2(false);
  };

  // Section 3 editing functions
  const handleEditSection3Click = () => {
    setIsEditingSection3(true);
  };

  const handleSaveSection3Click = () => {
    setIsEditingSection3(false);
    console.log(`Section 3 text updated to: ${section3Text}`);
  };

  const handleCancelSection3Click = () => {
    setIsEditingSection3(false);
  };

  // Section 4 editing functions
  const handleEditSection4Click = () => {
    setIsEditingSection4(true);
  };

  const handleSaveSection4Click = () => {
    setIsEditingSection4(false);
    console.log(`Section 4 text updated to: ${section4Text}`);
  };

  const handleCancelSection4Click = () => {
    setIsEditingSection4(false);
  };

  // Links editing functions
  const handleEditLinksClick = () => {
    setIsEditingLinks(true);
  };

  const handleSaveLinksClick = () => {
    setIsEditingLinks(false);
    console.log(`Links text updated to: ${linksText}`);
  };

  const handleCancelLinksClick = () => {
    setIsEditingLinks(false);
  };

  // Part 2 editing functions
  const handleEditPart2Click = () => {
    setIsEditingPart2(true);
  };

  const handleSavePart2Click = () => {
    setIsEditingPart2(false);
    console.log(`Part 2 text updated to: ${part2Text}`);
  };

  const handleCancelPart2Click = () => {
    setIsEditingPart2(false);
  };


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
  const handleNavigationAbout = (page) => {
    
    if (page === 'About') {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to About section
    }
  };

  const CONNAV  = () => {
 
      if (role === 'admin') {
        navigate('/AdminViewContactPage');  // Redirect Admin to AdminViewLoanPage
      } else 
      if(role==='user')
      {
        navigate('/CONNAV');  // Redirect Users to FORM page
      }
    
  };

  return (
    <div>
      <div className='HEADS'>
        <div className='Top_NavBar'>
          <ul>
            <li className="active"><a href="#">Home</a></li>
            {/* <li><a href="#Loan" onClick={GOFORM}>Loan</a></li> */}
            <li><a href="#Loan" onClick={() => handleNavigation('Loan')}>Loan</a></li>
            <li><a href="#Loan Status">Loan Status</a></li>
            <li><a href="#Profile">Profile</a></li>
            {/* <li><a href="#About" onClick={() => handleNavigationAbout('About')} ref={aboutSectionRef} className='HOME_ABOUT'  >About</a></li> */}
            <li><a href="#Contact" onClick={CONNAV}>Contact us</a></li>
          </ul>
          <div className='Log_out'>
            <button className='Log' onClick={handleLogoutClick}>Log</button>
          </div>
        </div>

        <div className='NewLaunches'>
          {/* Header Editing */}
          {role === 'admin' ? (
            <div>
              {isEditingHeader ? (
                <div>
                  <input 
                    type="text" 
                    value={headerText} 
                    onChange={(e) => setHeaderText(e.target.value)} 
                  />
                  <button onClick={handleSaveHeaderClick}>Save Header</button>
                  <button onClick={handleCancelHeaderClick}>Cancel Header</button>
                </div>
              ) : (
                <div>
                  <h1>{headerText}</h1>
                  <button onClick={handleEditHeaderClick}>Edit Header</button>
                </div>
              )}
            </div>
          ) : (
            <h1>{headerText}</h1>
          )}

          {/* Section 1 Editing */}
          {role === 'admin' ? (
            <div>
              {isEditingSection1 ? (
                <div>
                  <textarea 
                    value={section1Text} 
                    onChange={(e) => setSection1Text(e.target.value)} 
                    rows="5"
                    cols="50"
                  />
                  <button onClick={handleSaveSection1Click}>Save Section 1</button>
                  <button onClick={handleCancelSection1Click}>Cancel Section 1</button>
                </div>
              ) : (
                <div>
                  <h3>AGRICULTURE LOAN :</h3>
                  <hr />
                  <p>{section1Text}</p>
                  <button onClick={handleEditSection1Click}>Edit Section 1</button>
                </div>
              )}
            </div>
          ) : (
            <div>
              <h3>AGRICULTURE LOAN :</h3>
              <hr />
              <p>{section1Text}</p>
            </div>
          )}

          {/* Section 2 Editing */}
          {role === 'admin' ? (
            <div>
              {isEditingSection2 ? (
                <div>
                  <textarea 
                    value={section2Text} 
                    onChange={(e) => setSection2Text(e.target.value)} 
                    rows="5"
                    cols="50"
                  />
                  <button onClick={handleSaveSection2Click}>Save Section 2</button>
                  <button onClick={handleCancelSection2Click}>Cancel Section 2</button>
                </div>
              ) : (
                <div>
                  <h3>Short Term Credit :</h3>
                  <hr />
                  <p>{section2Text}</p>
                  <button onClick={handleEditSection2Click}>Edit Section 2</button>
                </div>
              )}
            </div>
          ) : (
            <div>
              <h3>Short Term Credit :</h3>
              <hr />
              <p>{section2Text}</p>
            </div>
          )}

          {/* Section 3 Editing */}
          {role === 'admin' ? (
            <div>
              {isEditingSection3 ? (
                <div>
                  <textarea 
                    value={section3Text} 
                    onChange={(e) => setSection3Text(e.target.value)} 
                    rows="5"
                    cols="50"
                  />
                  <button onClick={handleSaveSection3Click}>Save Section 3</button>
                  <button onClick={handleCancelSection3Click}>Cancel Section 3</button>
                </div>
              ) : (
                <div>
                  <h3>Long Term Credit :</h3>
                  <p>{section3Text}</p>
                  <button onClick={handleEditSection3Click}>Edit Section 3</button>
                </div>
              )}
            </div>
          ) : (
            <div>
              <h3>Long Term Credit :</h3>
              <p>{section3Text}</p>
            </div>
          )}

          {/* Section 4 Editing */}
          {role === 'admin' ? (
            <div>
              {isEditingSection4 ? (
                <div>
                  <textarea 
                    value={section4Text} 
                    onChange={(e) => setSection4Text(e.target.value)} 
                    rows="5"
                    cols="50"
                  />
                  <button onClick={handleSaveSection4Click}>Save Section 4</button>
                  <button onClick={handleCancelSection4Click}>Cancel Section 4</button>
                </div>
              ) : (
                <div>
                  <div className='con1'>
                    <h2>Website of Ministry of Agriculture & Farmers Welfare</h2>
                  </div>
                  <br />
                  <p>{section4Text}</p>
                  <button onClick={handleEditSection4Click}>Edit Section 4</button>
                </div>
              )}
            </div>
          ) : (
            <div>
              <div className='con1'>
                <h2>Website of Ministry of Agriculture & Farmers Welfare</h2>
              </div>
              <br />
              <p>{section4Text}</p>
            </div>
          )}

          {/* Links Editing */}
          {role === 'admin' ? (
            <div>
              {isEditingLinks ? (
                <div>
                  <textarea 
                    value={linksText} 
                    onChange={(e) => setLinksText(e.target.value)} 
                    rows="5"
                    cols="50"
                  />
                  <button onClick={handleSaveLinksClick}>Save Links</button>
                  <button onClick={handleCancelLinksClick}>Cancel Links</button>
                </div>
              ) : (
                <div className='LINKS'>
                  <pre>{linksText}</pre>
                  <button onClick={handleEditLinksClick}>Edit Links</button>
                </div>
              )}
            </div>
          ) : (
            <div className='LINKS'>
              <pre>{linksText}</pre>
            </div>
          )}

          {/* Part 2 Editing */}
          {role === 'admin' ? (
            <div>
              {isEditingPart2 ? (
                <div>
                  <textarea 
                    value={part2Text} 
                    onChange={(e) => setPart2Text(e.target.value)} 
                    rows="10"
                    cols="80"
                  />
                  <button onClick={handleSavePart2Click}>Save Part 2</button>
                  <button onClick={handleCancelPart2Click}>Cancel Part 2</button>
                </div>
              ) : (
                <div className='Part_2'>
                  <div className='Box2'>
                    <div className='Notice'>
                      Notice
                    </div>
                    <p>{part2Text}</p>
                    <button onClick={handleEditPart2Click}>Edit Part 2</button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className='Part_2'>
              <div className='Box2'>
                <div className='Notice'>
                  Notice
                </div>
                <p>{part2Text}</p>
              </div>
            </div>
          )}
          <div className='HOME_ABOUT'>

   <div className='ABOUTT'>
      <p className='ROLL_HERE_ABOUT'>
      About
      </p>
   

   </div>
    

          </div>
   {/* <p></p> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
