import React from 'react'
import "../../pages/Home/Slider.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from 'react-bootstrap/Carousel';
import img4 from "../../Images/download.jpg"
import img5 from "../../Images/download1.jpg"

function Slider() {
  return (
   <>
  <div className='a'>
  <Carousel>
      <Carousel.Item>
        <img src={img4} text="First slide" alt='' width={1340} style={{height: '60vh'}}/>
        <Carousel.Caption>
          <h1 className='animate__animated animate__backInUp' id='first-heading'>Welcome To</h1>
          <h3 className='animate__animated animate__backInUp'>AL-NISA Quran Institute</h3>
          <h1 className='animate__animated animate__backInUp' id='last-heading'>Learn Quran With <span>AL-NISA</span>  Quran Institute</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img5} text="Second slide" alt='' width={1340} style={{height: '60vh'}}/>
        <Carousel.Caption>
          <h1 className='animate__animated animate__backInUp'> <span>Learn Quran Online</span> </h1>
          <h5 className='animate__animated animate__backInUp'>Anytime & Anywhere </h5>
          <h1 className='animate__animated animate__backInUp'>For  <span>Kids</span>  &<span>  Adults</span>  </h1>
         
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
   
   
   
   </div>
   
   </>
  )
}

export default Slider