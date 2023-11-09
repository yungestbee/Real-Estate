import React from "react";
import img10 from './images/about-banner-1.png'
import { Link } from 'react-router-dom'

function About(){
    return(
        <div className="about">
           <div> 
            <img className="img10" src={img10} />
           </div> 
           <div>
            <p className="us" id="about"> 
                About Us
            </p>
            <p className="rev">
                REVOLUTIONALIZING REAL ESTATE & INTEGRATING TECH and REAL ESTATE.
            </p>
            <p className="rev2">
            We have established ourselves as an authority in the Asaba real estate space through leading
            the ideology of organized and innovative real estate.<br /> In a place like Asaba where real estate used to be up to touts and unskilled agents the presence
            of solan afrique has really changed the narrative of real estate in this space.
            </p>
            <p className="rev2 ">
            So far we have sold a little below 1000 plots of land while making 600 plus clients proud land
            owners.<br />
            Here at solan afrique we are very keen about empathy towards our clients.
            We run an ecosystem that ensures transparency inclusiveness and transparency
            </p>
            <p className="rev2">
            We are also pioneers in the property tech (prop tech space) with the launching of the landvext
            app we are revolutionalizing real estate, integrating tech and real estate, while making sure that
            we maintain our culture of empathy towards our clients (in this case the user).
            </p>
            <p className="rev3">
            The lanvext app is engineered to help people across social class to save for their rent in micro
            amounts
            </p>

            <button className="app-btn">
                Download App
            </button>
           </div>
        </div>

    )
}

export default About;