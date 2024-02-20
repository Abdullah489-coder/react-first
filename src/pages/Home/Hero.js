import React from 'react'
import "../../pages/Home/Hero.css"
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <>
    <h1 className='container text-center mt-5 col-sm-12' id='title'>Prospective of AL-NISA Quran Institute</h1>
    <p className='container mt-4 ' id='p-title'>Welcome to AL-NISA Quran Institute the premier online Quran education academy! At  AL-NISA Quran Institute, we offer quality, engaging lessons and interactive activities to help your children learn the Holy Quran from the comfort of their own homes. We aim to provide the best understanding of Basic Quran Reading, Quran with Tajweed, Quran Memorization, Tafseer e Quran  on one platform with proficient, esteemed tutors of AL-NISA Quran Institute.We have both male & female teachers. You can choose any of them depending upon your convenience. we are providing one and one classes . We make sure that each student is supported on their journey toward mastering the Holy Quran,. Our prime focus is teaching the best readings of the Quran with the help of detailed knowledge on Tajweed, understanding of this prestigious book, and Quranic Arabic.  </p>
    <h1 className='container text-center'id='title' > 3 Days Free Trial Classes</h1>

    <div className='container '>

    <div class="row row-cols-1 row-cols-md-2  g-4">
    <div class="col-sm-10 text-center">
    <div class="card border-0" id='p-title'>
     
      <div class="card-body">
        <h2 class="card-title text-center mb-5">Take Trial Online Quran Classes</h2>
        <p class="card-text" >As soon as you book an online trial class come & take the online class on time. Without any payment, online classes are offered to students</p>
        <Link to="/register" className='btn btn-primary text-center'>Register Now</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-10 text-center " id='p-title'>
    
  <div class="card border-0">
      <div class="card-body">
      
        <h2 class="card-title text-center mb-3">Register in Quran Classes</h2>
        <p class="card-text" >Get registered with our academy for proper learning after taking trial online classes. Our professionally skilled Quran Tutors are available to provide online teaching services.</p>
        <Link to="/register" className='btn btn-primary text-center'>Register Now</Link>
      </div>
    </div>
  </div>

    </div>
    </div>
    
    </>
  )
}

export default Hero