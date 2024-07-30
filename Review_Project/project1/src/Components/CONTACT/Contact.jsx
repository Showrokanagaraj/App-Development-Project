import React from 'react'
// import './Contact_Updated.css'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contactBackground'>

   <div className='HEAD'>Contact</div>
    <div className='container01'>
      <div className='textA1'><h3>Name</h3><textarea placeholder='First Name'></textarea></div>
      <div className='textA1'><textarea placeholder='Last Name'></textarea></div>
      <div className='textA1'><h3>Email</h3><textarea placeholder='example@gmail.com'></textarea></div>
<h3>Gender</h3>
  <label>
   <input type="radio"/>Male
  </label>
  {/* <p>or</p> */}
  {/* <br></br> */}
   <label><input type="radio"/>Female</label>
   <h4>Need Loan ?</h4>
   <label>

   <input type="radio"/>Yes
   </label>
   <label>

   <input type="radio"/>No
   </label>
   <h3>comments</h3>
      <div className='textA1'><h3></h3><textarea placeholder='comments'></textarea></div>
      <button type="submit" className='Contact_Submit'>Submit</button>
      {/* <div className='textA1'><h3></h3><textarea placeholder='example@gmail.com'></textarea></div> */}
    </div>
    </div>
  )
}

export default Contact