import "./signup.css";
import React, { useState, useEffect } from "react";
import image from "../images/solan.png";
import Dropdown from 'react-bootstrap/Dropdown';
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode"; // Corrected import statement
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import DropDown from "./dropDown";
// import { useCookies } from "react-cookie"

function Head() {
  const [view, setView] = useState(false);
    // const [log, setLog] = useState("")
  const navigate = useNavigate();

  const token = Cookies.get('jwt');
  console.log(token);

  if (token) {
    var decoded = jwtDecode(token);
    console.log(decoded)
  }

  const logOut = () => {
    setView(false)
    Cookies.remove('jwt');
    navigate("/login");
  }

  
    const handleViewLog = () => {
        if (view === false) {
            setView(true)
        } else {
          setView(false)
        }

  }



  return (
    <>
      <div className="head">
        <div className="headFlex">
          <img src={image} className="headLogo" />
          <div className="headBorder"></div>
        </div>
              <div className="dropContainer">
                  <button className="dropBtn" onClick={handleViewLog}>
                  <FontAwesomeIcon icon={faUser} className="dropIcon" />{decoded} 
          </button>
          {view && (<p className="dropPara" onClick={logOut}>Log Out</p>)}
        </div>
      </div>
    </>
  )
}

export default Head;

