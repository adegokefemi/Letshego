import LadyPics from '../../src/assets/img/LadyPics.png';
import { Button } from 'react-bootstrap';

export function MainSection () {
    return (
            <div className='d-flex my-4 justify-content-around'>
                <div className='col-6 pr-3'>
                    <img src={LadyPics} alt="LadyPics" />
                </div>
                <div className='col-6 my-5 px-4'>
                    <p>ABOUT US</p>
                    <h4>Letshego, improving lives!</h4>
                    <p>We are a Pan-African microfinance bank building businesses and improving lives in Nigeria 
                        since 2017 through our well-tailored products and services. 
                        We offer an array of quick loans designed to support 
                        every Nigerian across the thirty six states in their quest to reach their business 
                        objectives and ultimately achieve their dreams.<br></br>
                        <br></br>
                        Letshego has footprints in 11 African countries including Nigeria, Ghana, Kenya, 
                        Tanzania, Namibia, Mozambique, Rwanda, Lesotho, Swaziland, Uganda and Botswana.<br></br> 
                        <br></br>
                        In Nigeria, we have 22 branches in strategic points. Our goal is to be closer to you, 
                        that way, we are readily available to support you.</p>
                        <div>
                            <Button className='btn btn-lg'>
                                LEARN MORE
                            </Button>
                        </div>
                </div>        
            </div>
    );
}

export default MainSection;
