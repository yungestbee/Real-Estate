import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Head from "../signup/head";
import image from "../images/success.png"

function SuccessPage() {

    return (
        <div className="container1">
            <Head />
                <div className="successDiv">
                        <img className="successImage" src={image} />
                        <h2 className="successHeader">Your Email has been successfully verified</h2>
                </div>
        </div>
    )
}

export default SuccessPage




