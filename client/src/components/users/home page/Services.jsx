import React from "react";
import img2 from './images/real-estate-1898.jpeg'
import img3 from './images/real-estate-1871.jpeg'
import img4 from './images/house-186400_1280.jpeg'
import img5 from './images/house-2469067_1280.jpeg'
import img6 from './images/luxury-home-2409518_1280.jpeg'
import img7 from './images/residence-2219972_1280.jpeg'


function Services(){
    return(
        <div className="service-section">
            

            <h1 className="our" id="service">Our Services </h1>

            <div className='grid-container'>
              <div className='grid-items'>  
                <img className="grid-image" src={img2} />
              </div>
              <div className='grid-items'>  
                <img className="grid-image" src={img3} />
              </div>
              <div className='grid-items'>  
                <img className="grid-image" src={img4} />
              </div>
              <div className='grid-items'>  
                <img className="grid-image" src={img6} />
              </div>
              <div className='grid-items'>  
                <img className="grid-image" src={img5} />
              </div>
              <div className='grid-items'>  
                <img className="grid-image" src={img7} />
              </div>  

            </div>

            <div className="btn-div">
                <button className="service-btn">
                    Proceed
                </button>
            </div>
        </div>

    )
}

export default Services;