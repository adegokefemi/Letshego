import React from 'react'
import SavingsImage from '../assets/img/SavingsImage.png';
import LetgoCard from '../assets/img/LetshegoCards.png';


function Services() {
  return (
    <div className='services'>
        <section className='align-items-center'>
            <p>OTHER SERVICES</p>
            <h3>More for you</h3>
        </section>
        
        <section className='d-flex justify-content-around'>
                <div>
                    <img src={SavingsImage} alt='Image' />
                    <div className='bg'>
                        <h3>Savings</h3>
                            <p>Save with Letshego and you will be guaranteed access to <br></br> your money whenever and wherever you need it. 
                                We offer<br></br> competitive interest rates on our savings.
                            </p>
                    </div>
                </div>
           

           
               <div>
                    <img src={LetgoCard} alt='Image' />
                    <div className='bg'>
                    <h3>LetsGo Cards</h3>
                    <p> Our LetsGo cards are accepted by all ATM’s and are ideal for<br></br> 
                        everyone looking for accessible, simple and flexible financial<br></br> 
                        solutions that save you cash in fees. The card can be used for<br></br> online transfers, purchases and bill payments.</p>
                    </div>
                </div>
        </section>
    </div>
  )
}

export default Services
