import React from 'react'
import img12 from './images/SOLAN_LOGO.png'
import img13 from './images/whatsapp.svg'
import img14 from './images/marker.svg'
import img15 from './images/play-alt.svg'
import img16 from './images/facebook.svg'
import img17 from './images/phone-call.svg'

function Footer(){
    return(
        <div>
            <footer className='footer'>
                <div className='footer-img'>
                <img className='img12' src={img12} />
                </div>
                <div className='footer1'>
                <div className='level1'>
                    <img className='link2' src={img14} />
                    <p className='edit2'>NO 12 ANDY UWEJAYAN CRESCENT <br /> OPPOSITE DELTA STATE VOCATIONAL
                   <br /> EDUCATION CENTER ASABA DELTA STATE</p>
                 </div> 
                 <div className='level1'> 
                    <img className='link2 l3' src={img17} />
                   <p className='edit3'>+234 7045155590, +234 9138322808</p>
                 </div> 
                 {/* <div className='level2'> 
                   <img className='link link1' src={img13} />
                   <img className='link link2' src={img14} />
                   <img className='link link3' src={img15} />
                   <img className='link link4' src={img16} />
                  </div>  */}
                </div>
                <div className='footer2'>
                    <h1>Company</h1>
                    <p>Services</p>
                    <p>About</p>
                    <p>Properties</p>
                    <p>Blog</p>
                    <p>App</p>
                </div>
                <div className='footer3'>
                    <h1>Services</h1>
                    <p>Purchase & Sale</p>
                    <p>Real Estate Consultancy</p>
                    <p>Property Tech</p>
                    <p>Architecture</p>
                    <p>Interiors</p>
                    <p>Building Construction and Management</p>
                    <p>Investment Partnerships in Real Estate</p>
                </div>
            </footer>
            <p className='copyright'>&copy; 2023 <a href="#" style={{ color: "#fff" }}>Solan Afriqque</a>. All Rights Reserved</p>
        </div>

    )
}

export default Footer;