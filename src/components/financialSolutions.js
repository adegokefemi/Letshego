import classes from './financialSolutions.module.css';
import SetUpPics from '../assets/img/SetUp.png';
import Education from '../assets/img/Education.png';
import Consumer from '../assets/img/consumerPics.png';
import Housing from '../assets/img/HousingImage.png';
import Agriculture from '../assets/img/AgriculturePics.png';
import Health from '../assets/img/HealthPics.png';
import Easy from '../assets/img/EasyPics.png';




function FinancialSolutions () {
    return (
        <div className={classes.finance}>
            <div className='align-items-center'>
                <p className='color-white'>OUR FINANCIAL SOLUTIONS</p>
                <h4>What we offer you</h4>
            </div>
            <section className={classes.container}>
                <div className={classes.section}>
                    <div className='d-flex justify-item-between'>
                        <h3>Step up</h3>
                        <img className='img-responsive float-right' src={SetUpPics} alt='SetUpicon'/>
                    </div>
                    <p>Our Step Up loans are for micro, 
                        small and medium enterprises such as manufacturers, 
                        artisans, retailers, wholesalers and more. 
                        The business must have been running for a minimum of 6 
                        months to access loans of up to N20,000,000</p>
                </div>
                <div className={classes.section}>
                <div className='d-flex justify-item-between'>
                        <h3>Education</h3>
                        <img className='img-responsive float-left' src={Education} alt='Education Icon'/>
                    </div>
                    <p>Our Education loans are suitable for schools, tutorial canters 
                        and creches. They are also open to teachers, parents and school suppliers. 
                        Qualified businesses/persons can access loans of up to N20,000,000</p>
                </div>
                <div className={classes.section}>
                <div className='d-flex justify-item-between'>
                        <h3>Consumer</h3>
                        <img className='img-responsive float-left' src={Consumer} alt='Consumer icon'/>
                    </div>
                    <p>Our Consumer loans are available to Government and Non-Government employees 
                        (State and Federal Government Civil Servants and private sector employees) receiving a regular salary.  
                        With these loans, you can access up to N3,000,000 with no guarantor or collaterals required. </p>
                </div>
                <div className={classes.section}>
                <div className='d-flex justify-item-between'>
                        <h3>Affordable Housing</h3>
                        <img className='img-responsive float-left' src={Housing} alt='Housing Icon'/>
                    </div>
                    <p>Our Housing loans are appropriate for individuals in the public & private 
                        sector and also business owners. The facility can be used for business or 
                        residential purposes and qualified persons can access loans of up to N20,000,000</p>
                </div>
                <div className={classes.section}>
                <div className='d-flex justify-item-between'>
                        <h3>Agriculture</h3>
                        <img className='img-responsive float-left' src={Agriculture} alt='Agriculture'/>
                    </div>
                    <p>Our Agriculture loans support businesses in the agricultural ecosystem like farmers, 
                        dealers of agricultural machinery and processors. Qualified businesses and persons can 
                        access loans of up to N10,000,000</p>
                </div>
                <div className={classes.section}>
                <div className='d-flex justify-item-between'>
                        <h3>Health</h3>
                        <img className='img-responsive float-left' src={Health} alt='Health icon'/>
                    </div>
                    <p>Our Health loans are accessible to businesses in the health ecosystem such as hospitals, 
                        pharmacies, health centers, clinics etc Qualified facilities can get loans of up to N10,000,000</p>
                </div>
                <div className={classes.section}>
                <div className='d-flex justify-item-between'>
                        <h3>Easy</h3>
                        <img className='img-responsive float-left' src={Easy} alt='Easyicon'/>
                    </div>
                    <p>Our Easy loans are appropriate for employees of reputable organizations and they are to help your 
                        personal needs like rent, school fees, medical bills and more. Qualified persons can access up to N3,000,000</p>
                </div>
             </section>
        </div>
    );
}

export default FinancialSolutions;