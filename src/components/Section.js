import Pics from '../../src/assets/img/shutterstockPage.png';
import LetshegoPattern from '../../src/assets/img/LetshegoPatternArt.png'


function Section (){
    return(
        <section>
            <div className='head-text'>
                <div>
                <img src={Pics} alt="PictureLogo" />
                </div>
                <div className='text-on-image'>
                    <p>Get loans to support and <br></br> take you to next level.</p> 
                    <button  className='button btn btn-sm bg-white'>APPLY NOW</button>
                </div>
            </div>
            <div>
                <img src={LetshegoPattern} alt="LetshegoLogo"  />
            </div>
        </section>
    );
}

export default Section;

