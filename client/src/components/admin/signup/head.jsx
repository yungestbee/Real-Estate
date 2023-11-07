import "./signup.css"
import image from "../images/solan.png"

function Head() {
    return (
        <>
             <div className="head">
                <div className="headFlex">
                    <img src={image} className="headLogo" />
                    <div className="headBorder"></div>
                </div>
            </div>
        </> 
    )
}

export default Head