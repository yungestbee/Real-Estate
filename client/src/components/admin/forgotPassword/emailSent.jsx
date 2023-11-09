import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Head from "../signup/head";
import image from "../images/success.png"

function EmailSent() {

    return (
        <div className="fcontainer1">
            <Head />
                <div className="successDiv">
                        <img className="successImage" src={image} />
                        <h3 className="successHeader">An Email has been sent to you. Follow the instruction to verify your Email Address</h3>
                </div>
        </div>
    )
}

export default EmailSent




