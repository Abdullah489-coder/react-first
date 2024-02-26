import React from "react";
import { Link } from "react-router-dom";
import "../Component/Footer.css";
function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark text-light">
        <div class="row">
          <div class="col-3">
            <div className="mt-5 text-center">
              <h1>
                AL-NISA
                <br />
                <p className="fs-5">Quran Institute</p>
              </h1>
              <p className="ms-3 mt-4">
                The main aim of Online Quran learning is to provide a platform
                for Muslims around the world to learn Quran with Tajweed &
                Tafseer, to understand religious education. We provide online
                Quran learning with a comfortable environment to all without
                discrimination of, Caste & age.
              </p>
            </div>
          </div>
          {/**col2 */}
          <div class="col-3">
            <div className="mt-5">
              <h3 className="text-center">Useful Links</h3>
              <div className="text-center">
                <ul>
                  <Link to="/" className="links">
                    <li>Home</li>
                  </Link>
                  <Link to="/About" className="links">
                    <li>About</li>
                  </Link>
                  <Link to="/Contact" className="links">
                    <li>Contact Us</li>
                  </Link>
                  <Link to="/Blogs" className="links">
                    <li>Blogs</li>
                  </Link>
                  <Link to="/FeePlan" className="links">
                    <li>Fee Plan</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          {/**col3 */}
          <div class="col-3">
            <div className="mt-5">
              <h3 className="text-center">Our Services</h3>

              <div className="text-center">
                <ul>
                  <Link to="/Courses" className="links">
                    <li>Learn Noorani Qaida</li>
                  </Link>
                  <Link to="/Courses" className="links">
                    <li>Quran with Tajweed</li>
                  </Link>
                  <Link to="/Courses" className="links">
                    <li>Memorization of Holy Quran</li>
                  </Link>
                  <Link to="/Courses" className="links">
                    <li>Tafseer Quran Iearning</li>
                  </Link>
                  <Link to="/Courses" className="links">
                    <li>Learn Quran for Kids</li>
                  </Link>
                  <Link to="/Courses" className="links">
                    <li>Learn Quran Reading</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          {/**col4 */}

          <div class="col-3">
            <div className="mt-5">
              <h3 className="text-center">Contact Now</h3>
              <div className="mt-4 text-center">
                <a>
                  <i class="fa-solid fa-envelope me-3 fs-3 text-center"></i>
                  abdullahtabassam688@gmail.com
                </a>
                <div className="mt-4">
                  <a>
                    <i class="fa-solid fa-phone ms-3 me-3 "></i>+92 3100551936
                  </a>
                </div>
              </div>
            </div>
            <div>
              
              <div className="share text-center">
                <button className="btn1">
                  <svg
                    fillRule="nonzero"
                    height="30px"
                    width="30px"
                    viewBox="0,0,256,256"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    className="instagram"
                  >
                    <g
                      style={{ mixBlendMode: "normal" }}
                      textAnchor="none"
                      fontSize="none"
                      fontWeight="none"
                      fontFamily="none"
                      strokeDashoffset={0}
                      strokeDasharray
                      strokeMiterlimit={10}
                      strokeLinejoin="miter"
                      strokeLinecap="butt"
                      strokeWidth={1}
                      stroke="none"
                      fillRule="nonzero"
                    >
                      <g transform="scale(8,8)">
                        <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z" />
                      </g>
                    </g>
                  </svg>
                  <span className="tooltiptext1">
                    <div className="card">
                      <svg
                        fill="#000000"
                        width="24px"
                        viewBox="0 0 24 24"
                        height="24px"
                        xmlns="http://www.w3.org/2000/svg"
                        className="account"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z" />
                        <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <div className="username">@meoninsta</div>
                  </span>
                </button>
                <button className="btn2">
                  <svg
                    height="30px"
                    width="30px"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                    className="twitter"
                  >
                    <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" />
                  </svg>
                  <span className="tooltiptext2">
                    <div className="card">
                      <svg
                        fill="#000000"
                        width="24px"
                        viewBox="0 0 24 24"
                        height="24px"
                        xmlns="http://www.w3.org/2000/svg"
                        className="account"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z" />
                        <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <div className="username">@meontwitter</div>
                  </span>
                </button>
                <button className="btn3">
                  <svg
                    viewBox="0 0 448 512"
                    fill="white"
                    height="30px"
                    width="30px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="whatsapp"
                      d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                    ></path>
                  </svg>
                  <span className="tooltiptext3">
                    <div className="card">
                      <svg
                        fill="#000000"
                        width="24px"
                        viewBox="0 0 24 24"
                        height="24px"
                        xmlns="http://www.w3.org/2000/svg"
                        className="account"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z" />
                        <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <div className="username">@meontwitter</div>
                  </span>
                </button>
                <button className="btn4">
                  <svg height="1em" viewBox="0 0 320 512">
                    <path
                      className="facebook"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    ></path>
                  </svg>
                  <span className="tooltiptext4">
                    <div className="card">
                      <svg
                        fill="#000000"
                        width="24px"
                        viewBox="0 0 24 24"
                        height="24px"
                        xmlns="http://www.w3.org/2000/svg"
                        className="account"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z" />
                        <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <div className="username">@meontwitter</div>
                  </span>
                </button>
              </div>
          
                </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
