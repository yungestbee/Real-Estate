// import 'font-awesome/css/font-awesome.min.css';
import {Link} from "react-router-dom"
import "./primaryPage.css"
import Head from "../signup/head";




function PrimaryPage(){
    
    return(
        <>
             <div className="container13">

                <div className="fcontainer1">
                    <Head />
            
               <Link style={{textDecoration: "none", color: "#fff"}} to='/admin/properties'>
               <div className="primaryCard">
                    {/* <img src={image4} /> */}
                    <h3> Manage Properties</h3>
                </div>
            </Link>
        </div>
        </div>
         
        </>
    )
}

export default PrimaryPage