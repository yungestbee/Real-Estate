import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./viewProperties.css";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode"; // Corrected import statement
import Head from "../signup/head";

       
const Properties = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [itemId, setItemId] = useState(null)
  const [booking, setBooking] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [landSize, setLandSize] = useState("");
  const [documents, setDocuments] = useState([]);
  const [price, setPrice] = useState("");
  const [reply, setReply] = useState("");
  const [DFTR, setDFTR] = useState("");
  const [promo, setPromo] = useState("");
  const [otherInfo, setOtherInfo] = useState("");
  const [selectedImages, setSelectedImages] = useState([])
  const navigate = useNavigate();

  const token = Cookies.get('jwt');
  if (token) {
    var decoded = jwtDecode(token)
    console.log(decoded)
  }

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

  const handleShow1 = () => {
    setShow1(true)
  };

  const handleClose1 = () => setShow1(false);

  const handleShow = () => {
    setShow(true)
  };

  const handleClose = () => setShow(false);

      
    useEffect(() => {
    fetch(`${process.env.REACT_APP_DOMAIN}/api/properties`)
      .then((response) => response.json())
      .then((booking) => {
        console.log(booking[0].documents)
        setBooking(booking);
        setItemsPerPage(booking.length);
      })
      .catch((error) => {
        console.error(error);
      });
    }, []);

  
    const formData = new FormData()
        formData.append("name", name)
        formData.append("landSize", landSize)
        formData.append("location", location)
        formData.append("documents", documents)
        formData.append("price", price)
        formData.append("file", selectedImages)
        formData.append("promo", promo)
        formData.append("otherInfo", otherInfo)
        // formData.append("distanceFromTarredRoad", DFTR)


  const handleEditProperty = async (event) => {
    event.preventDefault()
    try {
      const res = await axios.put(`${process.env.REACT_APP_DOMAIN}/api/property/${itemId}`, formData)
      if (res.status === 200) {
        console.log(res.data)
        alert(res.data.message)
        setShow(false)
        navigate('/admin/properties')
      } else {
        setReply(res.data.message)
        alert(reply)
    
      }
    } catch (error) {
      if (error.response && error.response.status === 40) {
        console.log(error.response.data)
        alert(error.response.data.message)
        setReply(error.response.data.message); 
      } else {
        alert("An error occurred. Please try again later.");
        setReply("An error occurred. Please try again later."); // Generic error message for other errors
      }
    }
  }

  
  
        const handleDelete = async () => {
          try {

              const response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/property/${itemId}`, {
                method: 'DELETE',
              });
      
              if (response.status === 200) {
                setBooking(prevData => prevData.filter(item => item._id !== itemId));
                setShow1(false)
              } else {
                alert('Error deleting property');
              }
          } catch (error) {
            alert(error)
            console.error('Error deleting item:', error);
          }
        };


  return (
       <>
      <div className="fcontainer1">
        <Head />
    
            <table className="fftabularForm">

              <thead>
            <tr className="fftabular-head">
                  <th id="sn">S/N</th>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Land Size</th>
                  <th>Price</th>
                  <th>DFTR</th>
                  <th>Documents</th>
                  <th>Promo</th>
                  <th>Other Info</th>
                  <th>Status</th>
                  <th id="emp">{ }</th>
                </tr>
              </thead>
              <tbody>
                {booking
                  .slice(
                    (currentPage - 1) * itemsPerPage,
                    currentPage * itemsPerPage
                    )
                .map((book, index) => (
                  <tr key={book._id}>
                      <td id="sn">{index + 1}</td>
                      <td>{book.name}</td>
                      <td>{book.location}</td>
                      <td>{book.landSize}</td>
                      <td>{book.price}</td>
                      <td>{book.distanceFromTarredRoad}</td>
                      <td>{book.documents}</td>
                      <td>{book.promo}</td>
                      <td>{book.otherInfo}</td>
                      <td>{book.status}</td>
                      <td id="emp"><div className="icons">
                      <FontAwesomeIcon icon={faPenToSquare} className="inputIcon" onClick={() => {
                        setItemId(book._id)
                        setName(book.name)
                        setLocation(book.location)
                        setLandSize(book.landSize)
                        setPrice(book.price)
                        setDFTR(book.distanceFromTarredRoad)
                        // setDocuments(book.documents)
                        setPromo(book.promo)
                        setOtherInfo(book.otherInfo)
                        setShow(true)
                        }
                      }/>
                          <FontAwesomeIcon icon={faTrash} className="inputIcon" onClick={() => {
                          setItemId(book._id)
                          setShow1(true)
                        }}/>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
        </table>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="modalContainer">
          <Modal.Header closeButton className="modalHeader">
             <Modal.Title className="modalTitle">Edit Property Details</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalBody">
            <form className="modalForm" action="/upload" method="POST" encType="multipart/form-data" onSubmit={handleEditProperty}>
            
            <div className="form-group1">
            <label>Property Name:</label>
            <input
              type="text"
              value={name}
                />  

              </div><div className="form-group1">
              <label>Location:</label>
              <input
                type="text"
                value={location}
              />
            </div>
            <div className="form-group1">
            <label>Land Size:</label>
            <input
              type="text"
              value={landSize}
              onChange={(e) => setLandSize(e.target.value)}
            />
          </div>
            <div className="depart1">
          
            </div>
            
          <div className="form-group1">
            <label>Promo:</label>
            <input
              type="text"
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
            />
                </div>
            
            <div className="form-group1">
                <label>Other Info:</label>
                <input
                  type="text"
                  value={otherInfo}
                  onChange={(e) => setOtherInfo(e.target.value)}
                />
            
          </div>
          <div className="form-group1">
            <label>Documents:</label>
            <fieldset className="checkbox-group1">
              {[
                " Deed of Assignment",
                " Registered Survey",
                " C of O",
              ].map((feature) => (
                <label key={feature} id="effect1">
                  <input
                    type="checkbox"
                    id="checkbox1"
                    value={feature}
                    checked={documents.includes(feature)}
                    onChange={() => handleFeatureChange(feature)}
                  />
                  {feature}
                </label>
              ))}
            </fieldset>
          </div>
          <div className="form-group1">
            <label>Property Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="form-group1">
            <label>Property Image:</label>
            <input
              type="file"
              onChange={handleImageUpload}
              className="imageInput"  
            />
            </div>
            </form>
          </Modal.Body>
          <Modal.Footer className="modalFooter">
            <button variant="secondary" className="modalBtn" onClick={handleClose}>
              Cancel
            </button>
            <button onClick={handleEditProperty} className="modalBtn">
              Update
            </button>
          </Modal.Footer>
        </Modal>

        <Modal show={show1} onHide={handleClose1} backdrop="static" keyboard={false} className="modalContainer">
          <Modal.Header closeButton className="modalHeader">
             <Modal.Title className="modalTitle">Delete Property</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalBody">
            <p className="modalPara">Please confirm if you want to delete property</p>
          </Modal.Body>
          <Modal.Footer className="modalFooter">
            <button onClick={handleClose1} className="modalBtn">
              Cancel
            </button>
            <button onClick={handleDelete} className="modalBtn">
              Delete
            </button>
          </Modal.Footer>
        </Modal>
            
            <div className="pagination">
              <button onClick={() => setCurrentPage(currentPage - 1)}>
                Prev.
              </button>
              <span style={{textDecoration: "none", color: "#000"}}>
                {currentPage} of {Math.ceil(booking.length / itemsPerPage)}
              </span>
              <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        </div>
        <div className="addPropertyBtn-container">
              <button className='addPropertyBtn'><Link style={{textDecoration: "none", color: "#fff"}} to="/admin/add-property">Add New Property</Link></button>
        </div>
        </div>

      </>
  );
};


export default Properties;