import React from 'react'
import { Link } from 'react-router-dom'
import "../Component/Navbar.css"
import logo from "../Component/Assets/WhatsApp_Image_2024-02-08_at_05.14.34_2444a188-removebg-preview.png"

function Navbar() {
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt='' className='img-fluid' width={100}/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item ">
                <Link className="nav-link active px-3" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="/About-us">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="/Blogs">Blogs</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link  px-3" to="/Courses" >
                 Our Courses
                </Link>
               
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="/Contact">Contact Us</Link>
              </li>
              
             
            </ul>
           
            <div className="d-flex ms-auto me-5 ">
             <Link to="/Free-Plan" className='me-5'>  <button id='btn'>Free Plan</button></Link> 
            </div>
           
              
          </div>
        </div>
      </nav>


      
   
   </>
  )
}

export default Navbar