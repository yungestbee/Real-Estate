import { Icon } from 'react-icons-kit';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

import "./signup.css"
import { useState, useEffect } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import Head from "./head";

function Signup(){
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(faEyeSlash);
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const getFirstName =(e)=>{
        setFirstName(e.target.value)
    }
    
    const getLastName =(e)=>{
        setLastName(e.target.value)
    }
    const getEmail =(e)=>{
        setEmail(e.target.value)
    }
    const getUsername =(e)=>{
        setUsername(e.target.value)
    }
    const getPassword =(e)=>{
        setPassword(e.target.value)
    }

    function CheckPassword(inputtxt) { 
        var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(inputtxt.value.match(decimal)){ 
        alert('Correct, try another...')
        return true;
        }else{ 
        alert('Wrong...!')
        return false;
        }
    } 
    const handleToggle = () => {
        if (type==='password'){
           setIcon(faEye);
           setType('text')
        } else {
           setIcon(faEyeSlash)
           setType('password')
        }
     }


   
    const handleSubmit =(e)=>{
        e.preventDefault()

        let userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: username,
            password: password
        }

        axios.post(`${process.env.REACT_APP_DOMAIN}/api/register`, userData)
        .then((res)=> {
            console.log(res)
            if(res.status == 200){
                alert(res.data.message)
                navigate("/verification")

            } else {
                setError(res.data.message)
            }            // navigate('/employees')
         })
            .catch((err) => {
                setError(err.response.data.message.message)
                console.log(err.response.data.message.message)
            })

    }
    
    
    return(
        <>
            <div className="fcontainer">
                <Head />
                <div className="signUpFlex">
                    <div className="signUpDetails">
                        <h2 className="signUpHeader">Sign Up</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputContainer">
                            <label for="first">First Name</label>
                            <input id="first" className="inputBox" type="text" onChange={getFirstName}/>
                            </div>
                            {/* <button className="md:hidden">&#9776;</button> */}

                            <div className="inputContainer">
                            <label for="last"> Last Name</label>
                            <input id="last" className="inputBox" type="text" onChange={getLastName}/>
                            </div>

                            <div className="inputContainer">
                            <label for="mail">Email</label>
                            <input id="mail" className="inputBox" type="email" onChange={getEmail}/>
                            </div>

                            <div className="inputContainer">
                            <label for="user">Username</label>
                            <input id="user" className="inputBox" type="text" onChange={getUsername}/>
                            </div>

                            <div className="inputContainer">
                                <label for="pass">Password</label>
                                <div className="passInp">
                                <input id="pass" className="inputBox" type={type} onChange={getPassword} />
                                <FontAwesomeIcon icon={icon} className="eye" onClick={handleToggle}/>
                                </div>
                            </div>

                            {error && <p className="errorPara">{error}</p>}
                            <button className="signUpButton" type="submit">Sign Up</button>

                        <span className="lastPara">Already have an account?. <Link to="/login"style={{textDecoration: "none", color: "#00a2ff"}}>Log in</Link> instead</span>
                        </form>
                        
                    </div>
                </div>


            </div>
        </>
    )
}

export default Signup