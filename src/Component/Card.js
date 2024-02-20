import React from 'react'
import "../Component/Card.css"
import card1 from "../Images/Card1.jpg"
import card2 from "../Images/Card2.jpg"
import card3 from "../Images/Card3.jpg"
import card4 from "../Images/Card4.jpg"
import card5 from "../Images/Card5.jpg"
import card6 from "../Images/Card6.jpg"
function Card() {
  return (
    <>
    
    
   
    <div className='container'>

<div class="card-group mt-5">
  <div class="card mx-5 col-md-12" id='card'>
    <img src={card1} class="card-img-top" alt="..." id='card-img'/>
    <div class="card-body">
      <h3 class="card-title" id='card-title'>Noorani Qaida</h3>
      <p class="card-text" id='card-text'>To achieve proper accent and fluency, we have Norani Qaida for beginners in the shed of experienced tutors.</p>
      <a href="#s" class="btn mt-4 " id='btn'>Learn More</a>
    </div>
   
  </div>
  <div class="card" id='card'>
    <img src={card2} class="card-img-top" alt="..." id='card-img'/>
    <div class="card-body">
      <h3 class="card-title" id='card-title'>Quran Reading Course</h3>
      <p class="card-text" id='card-text'>This course is titled with Quran Reading course but it covers some other basic needs like Masnoon duas and Salah structure.</p>
      <a href="#s" class="btn mt-1" id='btn'>Learn More</a>
    </div>
    
  </div>
  <div class="card" id='card'>
    <img src={card3} class="card-img-top" alt="..." id='card-img'/>
    <div class="card-body">
      <h3 class="card-title" id='card-title'>Quran with Tajweed</h3>
      <p class="card-text" id='card-text'>The purpose of this course is to teach students Quran with tajweed and make them able to correct mistakes after knowing the basic rules of tajweed.</p>
      <a href="#s" class="btn mt-2" id='btn'>Learn More</a>
    </div>
    
  </div>
</div>
<div class="card-group mt-5">
  <div class="card" id='card'>
    <img src={card4} class="card-img-top" alt="..." id='card-img'/>
    <div class="card-body">
      <h3 class="card-title" id='card-title'>Quran Memorization</h3>
      <p class="card-text " id='card-text'>Our online Hifz Program is ready to be the most exhilarating experience of the lives of many across the globe.</p>
      <a href="#s" class="btn mt-4" id='btn'>Learn More</a>
    </div>
    
  </div>
  <div class="card" id='card'>
    <img src={card5} class="card-img-top" alt="..." id='card-img'/>
    <div class="card-body">
      <h3 class="card-title" id='card-title'>Tafseer e Quran Course</h3>
      <p class="card-text" id='card-text'>This course is for one, who want to understand Quran properly. Here we teach proper meaning of every single Ayah with proper context</p>
      <a href="#s" class="btn " id='btn'>Learn More</a>
    </div>
    
  </div>
  <div class="card" id='card'>
    <img src={card6} class="card-img-top" alt="..." id='card-img'/>
    <div class="card-body">
      <h3 class="card-title" id='card-title'>Learn Quran for Kids</h3>
      <p class="card-text" id='card-text'> AL-NISA provides a platform that enables the students to learn the Quran from home anywhere.</p>
      <a href="#s" class="btn mt-5" id='btn'>Learn More</a>
    </div>
    
  </div>
</div>

    </div>

    </>
  )
}

export default Card