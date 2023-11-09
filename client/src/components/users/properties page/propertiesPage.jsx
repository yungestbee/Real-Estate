import './cardComponent.css'; // Import the CSS file
import React, { useState, useEffect } from "react";
import axios from 'axios';
import image from "../../admin/images/firstBg.jpg"
import Nav from '../home page/Navbar';
import Footer from '../home page/Footer';

function PropertiesPage() {
    const [data, setData] = useState(null);
    const [showDetails, setShowDetails] = useState(false); // State to track whether to show additional details

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_DOMAIN}/api/properties`)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    // Function to toggle the "Read More" button
    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <>
            <div className="Contain">
                <Nav />
                {data ? (
                    <div className="cards">
                        {data.map((item) => 
                            (
                                <div key={item._id} className='cardContainer'>
                                    <img src={image} alt="Card Image" className='cardImage'/>
                                    <div className="cardTextContainer">
                                        <h2>{item.name}</h2>
                                        <div className="cardTextFlex">
                                            <p><b>Location: </b>{item.location}</p>
                                            <p><b>Land Size: </b>{item.landSize}</p>
                                        </div>
                                        <div className="cardTextFlex">
                                            <p><b>Price: </b>N{item.price}</p>
                                            <p><b>Status: </b>{item.status}</p>
                                        </div>
                                    </div>
                                    {showDetails && (
                                        <div className="additionalDetails">
                                        <p><b>Distance Frome Tarred Road: </b>{item.distanceFromTarredRoad}</p>
                                        <p><b>Documents: </b>{item.documents}</p>
                                        <p><b>Promo: </b>{item.promo}</p>
                                        <p><b>Other Info: </b>{item.otherInfo}</p>
                                        </div>
                                    )}
                                    <button className="cardBtn" onClick={toggleDetails}>
                                        {showDetails ? "Read Less" : "Read More"}
                                    </button>
                                </div>
                            )
                        )}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <Footer />
        </>
    );
}

export default PropertiesPage;
