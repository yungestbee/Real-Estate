import './cardComponent.css'; // Import the CSS file
import React, { useState, useEffect } from "react";
import axios from 'axios';
import image from "../../admin/images/firstBg.jpg"

function PropertiesPage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_DOMAIN}/api/properties`)
            .then((res) => {
                setData(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <div className="Container-fluid">
            {data ? (
                <div className="cards">
                    {data.map((item) => 
                        (
                            <div key={item._id} className='cardContainer'>
                            {/* <img src={item.image} alt="Card Image" /> */}
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
                            <button className="cardBtn">Read More</button>
                            </div>
                        )
                    )}
                </div>
                
                
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default PropertiesPage;
