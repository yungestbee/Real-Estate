import { useState, useEffect } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import Head from "../signup/head";

function ResetPassword(){
    const [newPassword, setNewPassword] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")


    const getNewPassword =(e)=>{
        setNewPassword(e.target.value)
    }
    const getPassword =(e)=>{
        setPassword(e.target.value)
    }
    
    const handleSubmit =(e)=>{
        e.preventDefault()

        let userData = {
            newPassword: password,
            confirmNewPassword: newPassword
        }

        axios.post(`${process.env.REACT_APP_DOMAIN}/reset-Password/:id/:token`, userData)
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
                        <h2 className="signUpHeader1">Change Password</h2>
                        <form onSubmit={handleSubmit}>
                           
                           <div className="inputContainer">
                                <label for="pass">Enter New Password</label>
                                <input id="pass" className="inputBox" type="password" onChange={getPassword}/>
                            </div>

                            <div className="inputContainer">
                                <label for="pass">Confirm New Password</label>
                                <input id="pass" className="inputBox" type="password" onChange={getNewPassword}/>
                            </div>
                            {error && <p className="errorPara">{error}</p>}

                            <button className="signUpButton" type="submit">Done</button>

                        </form>
                        
                    </div>
                </div>


            </div>
        </>
    )
}

export default ResetPassword