import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.svg.png";
import "../Component/Header.css"

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light  text-center" id="nav">
        <div class="container-fluid">
          <a class="navbar-brand" href="#h">
            <img src={Logo} alt="" width={100} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/"
                  id="nav-links"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/About" id="nav-links">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Courses" id="nav-links">
                  Our Courses
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/FeePlan" id="nav-links">
                  Fee Plan
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Blogs" id="nav-links">
                  Blogs
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/FreeTrail" id="nav-FreeTrail">
                  Free Trail
                </Link>
              </li>
            </ul>
            <div className="d-flex ms-auto " id="hole-page">
            
           
             
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
