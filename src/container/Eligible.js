import React from 'react'
import  Eligibly from '../assets/img/Eligibility-image.png';

function Eligible() {
  return (
    <div className='bg-primary d-flex justify-content-around'>
      <div>
        <img src={Eligibly} alt='photo' />
      </div>
      <div>
        <h3>Who is Eligible For A Loan? </h3>
        <hr/>
        <p>For you to be eligible to access our loans, you must<b></b> 
        have been in Business or employment for a minimum<br></br> 
        of 6months. For products like Agric loans, the clien<br></br> 
        must have completed three production cycles.</p>
        <p>Our application requirements are easy and vary according to the<br></br>
        type of loans. To find out, please <a href='/'>contact us</a> now.</p>
        <br></br>
        <br></br>
        <h3> Payment Frequency </h3>
        <hr/>
        <p>Our loan payment options are flexible as customers can choose to <br></br>
         repay their loans on a weekly, monthly or quarterly basis</p>
        <button className='bg-yellow' type='button'>APPLY NOW</button>
      </div>
    </div>
  )
}

export default Eligible
