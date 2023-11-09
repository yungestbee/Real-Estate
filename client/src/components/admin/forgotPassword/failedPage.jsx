import Head from "../signup/head";
import image from "../images/fail.png"

function FailedPage() {

    return (
        <div className="fcontainer1">
            <Head />
                <div className="successDiv">
                        <img className="successImage" src={image} />
                        <h2 className="successHeader">Your Email verification failed</h2>
                </div>
        </div>
    )
}

export default FailedPage