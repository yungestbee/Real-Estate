import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from './images/SOLAN_LOGO.png'
import {Link} from "react-router-dom"

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';

// library.add(faInstagram);

function Nav() {
  return (
    <header className="header">
      <div className="overlay">
        <div className="header-top">
          <div className="container">

            <img className="img1" src={img1} />

          <ul className="navbar-list">

            {/* <li> */}

            {/* </li> */}
            <li>
             <a href="#home" className="navbar-link" data-nav-link>Home</a>
            </li>


            <li>
                <a href="#service" className="navbar-link" data-nav-link>Services</a>
            </li>

            <li>
                <Link to="/properties" className="navbar-link" data-nav-link>Properties</Link>
            </li>

            <li>
                <a href="#about" className="navbar-link" data-nav-link>About</a>
            </li>

            {/* <li>
              <a href="#blog" className="navbar-link" data-nav-link>Blog</a>
            </li> */}

           

          </ul>





                        </div>
          </div>
        </div>
      
    </header>
  );
}

export default Nav;
