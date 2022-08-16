import React from 'react'
import Ankara from '../../../src/assets/img/Ankara.png'
import PhoneIcon from '../../../src/assets/img/PhoneIcon.png';
import MessageIcon from '../../../src/assets/img/MessageIcon.png';
import LocationIcon from '../../../src/assets/img/LocationIcon.png';
import Facebook from '../../../src/assets/img/Facebook.png';
import Twitter from '../../../src/assets/img/Twitter.png';
import Instagram from '../../../src/assets/img/Instagram.png';
import LetshegoLogo from '../../../src/assets/img/LetshegoLogo.png';

function Header() {
  return (
    <div>
        <img src={Ankara}  alt="Ankara icon"/>
        <section className='section'>
          <div>
            <img src={PhoneIcon}  alt="PhoneIcon"/><span>(+234)-815 939 3217</span>
          </div>
          <div>
            <img src={MessageIcon} alt="message icon"/><span>nigeria@letshego.com</span>
          </div>
          <div>
            <img src={LocationIcon} alt="Location icon"/><span>305 Herbert Macaulay Way, Yaba, Lagos, Nigeria. </span>
          </div>
               <div><img  className='icon-size' src={Facebook} alt="facebookIcon"/></div>
                <div><img  className='icon-size' src={Twitter} alt="TwitterIcon"/></div>
                <div><img  className='icon-size' src={Instagram} alt="InstagramIcon"/></div>
        </section>
        <section className='section2'>
          <img src={LetshegoLogo} alt="LetshegoLogo" />
          <span>ABOUT US</span>
          <span>SERVICES</span>
          <span>HOW TO APPLY</span>
          <span>CONTACT US</span>
        </section>
    </div>
    
  )
}

export default Header;

