import React from 'react'
import "../../Pages/Home/WhyChouse.css"
import img from "../../Component/Assets/247.jpg"
import img1 from "../../Component/Assets/121.jpg"
import img2 from "../../Component/Assets/free_trail.jpg"
import img3 from "../../Component/Assets/img_quran_tutor.jpg"
import img4 from "../../Component/Assets/images3.jpg"
function WhyChouse() {
  return (
    <>
    <div className='container text-center mt-5 mb-5 '>
<h1 className='heading fs-1'>Why Choose AL-NISA Quran Institute?</h1>

<div class="card-group ">
  <div class="card border-0">
    <div className='text-center'>
    <img  src={img2} alt='' className='' id='img'/>
    </div>
    <div class="card-body">
      <h3 class=" card-title fw-bold">FREE TRIAL CLASSES</h3>
      <p class="card-text">At Quran Online Academy, we have experience of many years of Quran teaching online with devotion; and intention of seeking the cause of Allah. We are offering free trial Quran classes online anytime. Register for online Skype Quran Classes</p>
      
    </div>
  </div>
  <div class="card border-0">
  <div className='text-center'>
  <img  src={img1} alt='' className='' id='img'/>
   </div>
    <div class="card-body">
      <h3 class="card-title fw-bold">ONE-TO-ONE CLASSES</h3>
      <p class="card-text">Online Quran classes system at Quran Online Academy comprises of a single Quran teacher giving Quran lessons to a single student thus ensuring devoted attention for better Quran learning. In One-to-One Quran classes system every family member get his proper time for study with Quran teacher.</p>
      
    </div>
  </div>
  <div class="card border-0">
  <div className='text-center'>
<img  src={img} alt='' className='' id='img'/>
   </div>
    <div class="card-body">
      <h3 class=" card-title fw-bold">24/7 FLEXIBLE SCHEDULE</h3>
      <p class="card-text">Quran Online Academy offers one of the most effective online Quran teaching websites, through its interactive digital environment. You & your family can Read and Memorize Quran from the comfort of your home. QuranTutors are available 24 hours a day, seven days a week.</p>
      
    </div>
  </div>
</div>



<div class="card-group mt-5">
  <div class="card border-0">
    <div className='text-center'>
    <img  src={img3} alt='' className='' id='img'/>
   
    </div>
    <div class="card-body">
      <h3 class=" card-title fw-bold">FEMALE TUTORS</h3>
      <p class="card-text">For teaching female students Al-Kahf provides professionally skilled & experienced teachers, and for the comfort of female students, there are proper arrangements for female teachers. 

</p>
      
    </div>
  </div>
  <div class="card border-0">
  <div className='text-center pt-5'>
  <img  src={img4} alt='' className='' id='img1'/>
   </div>
    <div class="card-body">
      <h3 class=" card-title fw-bold">Card title</h3>
      <p class="card-text">It is first & foremost the responsibility of Muslim parents in USA & all over the world to give knowledge of the Quran to their kids. AL-NISA provides a platform that enables the students to learn the Quran from home anywhere.
</p>
      
    </div>
  </div>
  <div class="card border-0">
  <div className='text-center mt-4'>
  <i class="bi bi-stopwatch-fill fs-1 mt-5" id='img'></i>
   </div>
    <div class="card-body">
      <h3 class=" card-title fw-bold">Card title</h3>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      
    </div>
  </div>
</div>




    </div>
    
    </>
  )
}

export default WhyChouse