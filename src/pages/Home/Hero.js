import React from 'react'
import "../../Pages/Home/Hero.css"
import slider1 from "../../Component/Assets/images.jpg"
import slider2 from "../../Component/Assets/images1.jpg"
import img1 from "../../Component/Assets/24-hours-400x400.png"
import img2 from "../../Component/Assets/free-400x4001.png"
import img3 from "../../Component/Assets/certificate-400x400.png"
function Hero() {
  return (
    <>




    
      <div className='container mt-4'>
      <div className="card-group ">
      <div className='col-4 mb-4'>
        <div className="card me-3"  id='card'>
          <img src={img2} className="card-img-top text-center " id='card-img'  alt="..." />
          <div className="card-body">
            <h3 className="card-title  text-center text-white mt-4">Free Trail Class</h3>
            <p className="card-text fs-5  text-center text-white mt-3">Get free trial class for any course</p>
          </div>
         </div>
        </div>
        <div className='col-4 mb-4'>
        <div className="card me-3" id='card' >
        <img src={img1} className="card-img-top text-center" id='card-img'  alt="..." />
          <div className="card-body">
            <h3 className="card-title  text-center text-white">  Classes Around The Clock</h3>
            <p className="card-text fs-5  text-center text-white">Take classes at any time that suit you</p>
          </div>
          </div>
        </div>
       
        <div className='col-4 mb-4'>
        <div className="card"  id='card'>
          <img src={img3} className="card-img-top" id='card-img' alt="..." />
          <div className="card-body">
            <h3 className="card-title text-center text-white">Completion Certificates</h3>
            <p className="card-text fs-5  text-center  text-white">Get a certificate after completing the course</p>
          </div>
         </div>
        </div>
      </div>
      </div>

      <div className='container'>

      </div>
    


      <div className='container my-5 text-center'>
<h1 className='heading my-4 fs-1'>We are providing the best quality of learning the Holy Quran</h1>

  <p className='mt-3'>Welcome to Quran Institute the premier online Quran education academy! At Quran Institute, we offer quality, engaging lessons and interactive activities to help your children learn the Holy Quran from the comfort of their own homes. Our experienced and knowledgeable tutors are passionate about teaching the Quran and will customize each lesson to meet the individual needs of your child. We make sure that each student is supported on their journey toward mastering the Holy Quran, so they can benefit from its timeless teachings for many years to come. So don’t wait any longer – enroll your child in an online Quran class today with Quran Institute.</p>
</div>




    </>
  )
}

export default Hero