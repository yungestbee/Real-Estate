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
    const [error, setError] = useState("")

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
            } else {
                setError(res.data.message)
            }            // navigate('/employees')
         })
            .catch((err) => {
                setError(err.response.data.message)
                console.log(err.response.data.message)
            })

    }
    
    
    return(
        <>
            <div className="container">
                <Head />
                <div className="signUpFlex">
                    <div className="signUpDetails">
                        <h2 className="signUpHeader">Sign Up</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputContainer">
                            <label for="user">First Name</label>
                            <input id="user" className="inputBox" type="text" onChange={getFirstName}/>
                            </div>
                            {/* <button className="md:hidden">&#9776;</button> */}

                            <div className="inputContainer">
                            <label for="pass"> Last Name</label>
                            <input id="pass" className="inputBox" type="text" onChange={getLastName}/>
                            </div>

                            <div className="inputContainer">
                            <label for="pass">Email</label>
                            <input id="pass" className="inputBox" type="email" onChange={getEmail}/>
                            </div>

                            <div className="inputContainer">
                            <label for="pass">Username</label>
                            <input id="pass" className="inputBox" type="text" onChange={getUsername}/>
                            </div>

                            <div className="inputContainer">
                            <label for="pass">Password</label>
                            <input id="pass" className="inputBox" type="password" onChange={getPassword}/>
                            </div>

                            {error && <p className="errorPara">{error}</p>}
                            <button className="signUpButton" type="submit">Sign Up</button>

                        <span className="lastPara">Already have an account?. <Link to="/login">Log in</Link> instead</span>
                        </form>
                        
                    </div>
                </div>


            </div>
        </>
    )
}

export default Signup