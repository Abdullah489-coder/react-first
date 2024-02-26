import React from 'react'
import "../../Pages/Home/Card.css"
import card1 from "../../Component/Assets/Learn_noorani_qaida-1.jpg"
import card2 from "../../Component/Assets/images2.jpg"
import card3 from "../../Component/Assets/download.jpg"
import card4 from "../../Component/Assets/Tafseer_e_Quran-1.jpg"
import card5 from "../../Component/Assets/download5.jpg"
import card6 from "../../Component/Assets/images6.jpg"
import { Link } from 'react-router-dom'
function Card() {
  return (
   <>
   <div className='container text-center'>
    <h1 className='heading'>Our Courses</h1>
    <p className='contant' >The best place to learn Quran, tafsir and Quranic Arabic at same time.<br /> Be a part of us and start your spiritual journey now!</p>
   </div>
   <div className='container mt-5'>
   <div className="card-group">
        <div className="card  me-4 border-0">
          <img src={card1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bold">Learn Noorani Qaida</h5>
            <p className="card-text">Noorani Qaida is a fundamental book for learning the Quran. This is a critical level Quran class that includes Arabic letters, joining letters, lowering, capitalizing, using vowels, and Madda letters.</p>
            <Link to="/Courses">
            <button type="button" class="btn btn-primary mt-3">Learn More</button></Link>
          </div>
          
        </div>
        <div className="card me-4 border-0">
          <img src={card2} className="card-img-top " alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bold">Learn Quran Reading</h5>
            <p className="card-text">We provide a specialized Quran Reading Course online in which we go lesson by lesson and take the student to the top level to learn the Quran with Tajweed. Students can easily learn the Quran under the supervision of parents and teachers at home.</p>
            <Link to="/Courses">
            <button type="button" class="btn btn-primary">Learn More</button></Link>
            
          </div>
          
        </div>
        <div className="card border-0">
          <img src={card3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bold">Quran with Tajweed</h5>
            <p className="card-text">The purpose of this course is to teach students Quran with tajweed and make them able to correct mistakes after knowing the basic rules of tajweed. the completion, of course, makes students able to recite the holy Quran in the best possible ways.</p>
            <Link to="/Courses">
            <button type="button" class="btn btn-primary">Learn More</button></Link>
          </div>
          
        </div>
      </div>
      <div className="card-group mt-5">
        <div className="card me-2 border-0">
          <img src={card4} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bold">Memorization of Holy Quran</h5>
            <p className="card-text">We offer a surprisingly effective approach for kids and adults to memorize the Holy Quran. This step-by-step process of learning helps them to memorize the Holy Quran effectively.</p>
            <Link to="/Courses">
            <button type="button" class="btn btn-primary mt-5">Learn More</button></Link>
          </div>
          
        </div>
        <div className="card me-2 border-0">
          <img src={card5} className="card-img-top"  alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bold">Tafseer-E-Quran Learning</h5>
            <p className="card-text">Teaching as well as learning Quran with Tafseer is essential for learning Islam and its teachings in detail. In this course, students learn the commands of Allah for spending life according to it. Some surahs of the Holy Quran or the whole Quran are learned by the students in this course.</p>
            <Link to="/Courses">
            <button type="button" class="btn btn-primary">Learn More</button></Link>
          </div>
          
        </div>
        <div className="card border-0 ">
          <img src={card6} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bold">Learn Quran for Kids</h5>
            <p className="card-text mb-3">It is first & foremost the responsibility of Muslim parents in USA & all over the world to give knowledge of the Quran to their kids. Al-Kahf provides a platform that enables the students to learn the Quran from home anywhere.</p>
            <Link to="/Courses">
            <button type="button" class="btn btn-primary mt-4">Learn More</button></Link>
          </div>
          
        </div>
      </div>
   </div>
   
   
   </>
  )
}

export default Card