import React from "react";
import "../Component/Footer.css";
import logo from "../Images/Logo.svg.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      {/**Footer-Start */}
      <div className="container-fluid" id="container-fluid">
        <div class="row row-cols-4">
          <div class="col">
            <h2 className="text-white">
              <img src={logo} alt="" className="img-fluid mt-4" width={120} />
            </h2>

            <p className="text-white mt-4 ms-4">
              The main aim of Online Quran learning is to provide a platform for
              Muslims around the world to learn Quran with Tajweed & Tafseer, to
              understand religious education. We provide online Quran learning
              with a comfortable environment to all without discrimination of,
              Caste & age.
            </p>
          </div>
          {/**Footer-pages */}
          <div class="col">
            <h2 className="mt-5 text-center ">Pages</h2>
            <div className="text-center mt-4" id="footer-links">
              <ul>
                <li>
                  <Link to="/About" id="link-footer">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" id="link-footer">
                    Contact Us
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/FeePlan" id="link-footer">
                    Fee Plan
                  </Link>
                </li>
                <li>
                  <Link to="/OurCourses" id="link-footer">
                    Our Courses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/**Footer-Services-Links */}
          <div class="col">
            <h2 className="mt-5 text-center">Our Services</h2>
            <div className="text-center pt-4">
              <ul>
                <li>
                  <Link to="/About" id="link-footer">
                    Learn Noorani Qaida
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" id="link-footer">
                    Learn Quran Reading
                  </Link>
                </li>
                <li>
                  <Link to="/FeePlan" id="link-footer">
                    Quran with Tajweed
                  </Link>
                </li>
                <li>
                  <Link to="/OurCourses" id="link-footer">
                    Memorization of Holy Quran
                  </Link>
                </li>
                <li>
                  <Link to="/OurCourses" id="link-footer">
                    Tafseer Quran Iearning
                  </Link>
                </li>
                <li>
                  <Link to="/OurCourses" id="link-footer">
                    Learn Quran for Kids
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/**Footer-Contact */}
          <div class="col">
            <h2 className="mt-5 text-center">Contact Us</h2>
            <div className="text-center mt-5">
              <a
                href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                target="blank"
                className="text-white"
                id="link-footer"
              >
                abdullahtabassam688@gmail.com
              </a>
            </div>
            <div className="text-center mt-4">
              <a
                href="https://wa.me/+923129176057"
                className="text-center"
                target="blank"
                id="link-footer"
              >
                +92 312 9176 057 
              </a>
              
            </div>
           <div className="text-center mt-4">
           <i class="bi bi-facebook" id="icon"></i>
           <i class="bi bi-twitter-x" id="icon"></i>
           <i class="bi bi-instagram" id="icon"></i>
           <i class="bi bi-youtube" id="icon"></i>

           </div>
          </div>
        
        </div>
      </div>
    </>
  );
}

export default Footer;
