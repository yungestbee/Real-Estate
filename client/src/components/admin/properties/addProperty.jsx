import { useState, useEffect } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import "./addProperty.css"
import Head from "../signup/head";


function AddProperty() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [landSize, setLandSize] = useState("");
  const [documents, setDocuments] = useState([]);
  const [price, setPrice] = useState("");
  const [reply, setReply] = useState("");
  const [DFTR, setDFTR] = useState("");
  const [promo, setPromo] = useState("");
  const [otherInfo, setOtherInfo] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const navigate = useNavigate();
    

 const handleImageUpload = (e) => {
   setSelectedImages(e.target.files[0]);
};

  const handleFeatureChange = (feature) => {
    if (documents.includes(feature)) {
      setDocuments(documents.filter((item) => item !== feature));
    } else {
      setDocuments([...documents, feature]);
    }
  };


  const handleAddProperty = async (event) => {
    event.preventDefault()
    if (
      location === "" ||
      name === "" ||
      landSize === "" || price === 0 || DFTR === "" 
      ) {
      console.error("Please fill in all fields and provide at least one image");
      setReply("Please fill in all fields and provide at least one image");
        return;
      }
      

    const formData = new FormData()
        formData.append("name", name)
        formData.append("landSize", landSize)
        formData.append("location", location)
        formData.append("documents", documents)
        formData.append("price", price)
        formData.append("file", selectedImages)
        formData.append("promo", promo)
        formData.append("otherInfo", otherInfo)
        formData.append("distanceFromTarredRoad", DFTR)

    try {

      const res = await axios.post(`${process.env.REACT_APP_DOMAIN}/api/property`, formData)
          if (res.status === 201) {
            console.log(res.data)
            alert(res.data.message)
            setReply(res.data.message)
            console.log(reply)
            navigate('/admin/properties')
          } else {
            setReply(res.data.message)
            alert(reply)

          }
    } catch (error) {
      if (error.response && error.response.status === 400) {
                console.log(error.response.data)
                setReply(error.response.data); // Assuming the error message is in the response data
              } else {
                setReply("An error occurred. Please try again later."); // Generic error message for other errors
              }
    }




        // setName("");
        // setLocation("");
        // setLandSize("");
        // setDocuments([]);
        // setPrice("");
        // setSelectedImages("");

        }
  return (
    <>
      <div className='fcontainer1'>
        <Head />
      <div className="add-room-container">
      <h1 className='addPropertyH2'>Add New Property</h1>
        <form className="add-room-form" action="/upload" method="POST" encType="multipart/form-data" onSubmit={handleAddProperty}>
            <div className="form-group">
            <label>Property Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
                />  
              </div><div className="form-group">
              <label>Location:</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="form-group">
            <label>Land Size:</label>
            <input
              type="text"
              value={landSize}
              onChange={(e) => setLandSize(e.target.value)}
            />
          </div>
            <div className="depart1">
          
            </div>
            
            <div className="form-group">
              <label>DFTR:</label>
              <input
                type="text"
                value={DFTR}
                onChange={(e) => setDFTR(e.target.value)}
                />
            </div>

          <div className="form-group">
            <label>Promo:</label>
            <input
              type="text"
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
            />
                </div>
            
            <div className="form-group">
                <label>Other Info:</label>
                <input
                  type="text"
                  value={otherInfo}
                  onChange={(e) => setOtherInfo(e.target.value)}
                />
            
          </div>
          <div className="form-group">
            <label>Property documents:</label>
            <fieldset className="checkbox-group">
              {[
                " Deed of Assignment",
                " Registered Survey",
                " C of O",
              ].map((feature) => (
                <label key={feature} className="effect">
                  <input
                    type="checkbox"
                    value={feature}
                    checked={documents.includes(feature)}
                    onChange={() => handleFeatureChange(feature)}
                  />
                  {feature}
                </label>
              ))}
            </fieldset>
          </div>
          <div className="form-group">
            <label>Property Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Property Image:</label>
            <input
              type="file"
              onChange={handleImageUpload}
              className="imageInput"  
            />
            </div>
        {reply && (<p className="errorPara">{reply}</p>)}
            <div className="newRoom-btn-container">
          <button className="newRoom-btn" type="submit">
            Add Property
              </button>
              </div>
        </form>
      </div>
      </div>
    </>
  );
}

export default AddProperty;