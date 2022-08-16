import React from 'react'
import classes from './About.module.css';

function About() {
  return (
    <div className={classes.about}>
      <div className={classes.center}>
        <p className='m-5'>Do you want a LOAN?</p>
        <h3 className='m-3'>We have just the right loans for you</h3>
        <br className='max-width-30%'></br>
        <p>To find out how we can support you with our convenient<br></br> 
           loans, please complete the following fields and we will get in touch with you</p>
      </div>
      <div className={classes.space}>
        <input placeholder='Name' /><br></br>
        <input placeholder='Email' /><br></br>
        <input placeholder='PhoneNumber e.g 080 ******' /><br></br>
        <input placeholder='How did you hear about Letshego MFB' />
      </div>
      <div className='m-3'>
        I am a Business owner <input type='checkbox'/>  Salary eaner <input type='checkbox'/>
      </div>
      <button className='btn btn-secondary align-items-center m-3' type='button'>SUBMIT</button>
    </div>
  )
}

export default About
