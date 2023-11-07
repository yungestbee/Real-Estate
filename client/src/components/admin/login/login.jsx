import "../signup/signup.css"
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import Head from "../signup/head";

function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(faEyeSlash);
    const navigate = useNavigate()


    const getUsername =(e)=>{
        setUsername(e.target.value)
    }
    const getPassword =(e)=>{
        setPassword(e.target.value)
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
            username: username,
            password: password
        }

        axios.post(`${process.env.REACT_APP_DOMAIN}/api/login`, userData)
        .then((res)=> {
            console.log(res)
            if (res.status == 200) {
                alert(res.data.reply)
                navigate("/admin/primary-page")
            } else {
                setError(res.data.message)
            }            // navigate('/')
         })
            .catch((err) => {
                setError(err.response.data.error)
                console.log(err)
            })

    }
    
    
    return(
        <>
            <div className="fcontainer">
                <Head />
                <div className="signUpFlex">
                    <div className="signUpDetails">
                <h2 className="signUpHeader">Log In</h2>
                        <form onSubmit={handleSubmit}>

                            <div className="inputContainer">
                            <label for="pass">Username</label>
                            <input id="pass" className="inputBox" type="text" onChange={getUsername}/>
                            </div>

                            <div className="inputContainer">
                                <label for="pass">Password</label>
                                <div className="passInp">
                                <input id="pass" className="inputBox" type={type} onChange={getPassword} />
                                <FontAwesomeIcon icon={icon} className="eye" onClick={handleToggle}/>
                                </div>
                            </div>
                            {error && <p className="errorPara">{error}</p>}

                            <button className="signUpButton" type="submit">Log In</button>
                            <p className="forPass"><Link to="/forgot-password" style={{textDecoration: "none", color: "#00a2ff"}}>Forgot Password?</Link></p>

                        </form>
                        <span className="lastPara">Don't have an account yet?.  Click here to <Link to="/sign-up" style={{textDecoration: "none", color: "#00a2ff"}}>Register</Link></span>
                        
                    </div>
                </div>


            </div>
        </>
    )
}

export default Login