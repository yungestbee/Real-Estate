import { useState, useEffect } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import Head from "../signup/head";

function ForgotPassword(){
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const getEmail = (e) => { 
        setEmail(e.target.value)
    }
    
    const handleSubmit =(e)=>{
        e.preventDefault()
        if (email == "") {
            setError("Please enter your Email Address")
        }else{
            
            let userData = {
                email: email
            }
    
            axios.post(`${process.env.REACT_APP_DOMAIN}/reset-password`, userData)
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
        }

    return (
        <div className="fcontainer1">
            <Head />
        <form onSubmit={handleSubmit} className="for">
            <div className="inputContainer">
                <p  className="inputPara">Enter your Email Address and we'll send you instructions on how to reset your password</p>
                <input id="user" className="inputBox" type="email" onChange={getEmail} placeholder="Email Address"/>
            </div>
                
            {error && <p className="errorPara">{error}</p>}
            <button className="resetBtn">Send Mail</button>
            <p className="finalPara">Go back to <Link to="/login" style={{textDecoration: "none", color: "#00a2ff"}}>Login page</Link> </p>
        </form>
        </div>
    )
}

export default ForgotPassword