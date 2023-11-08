import Dropdown from 'react-bootstrap/Dropdown';
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import Cookies from 'js-cookie'
import { jwtDecode } from "jwt-decode"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import "./dropDown.css"

function DropDown() {
  const navigate = useNavigate();
  const token = Cookies.get('jwt')
  if(token){
    var decoded = jwtDecode(token)
  }

  const logOut = ()=>{
      Cookies.remove('jwt')
      navigate("/login");
  }
    return (
      <Dropdown className="dropDownContainer">
        <Dropdown.Toggle id="dropdown-basic" className="dropDownToggle">
        <FontAwesomeIcon icon={faUser} className="inputIcons" />{token ? decoded.username : ""} 
        </Dropdown.Toggle>
  
        <Dropdown.Menu className="dropDownMenu">
          <Dropdown.Item onClick={logOut} className="dropDownItem">Log out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
  
  export default DropDown;