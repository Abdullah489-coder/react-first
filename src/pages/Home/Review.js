import React from 'react'
import "../../Pages/Home/Review.css"
import img from "../../Component/Assets/Tafseer_e_Quran-1.jpg"
function Review() {
  return (
    <>
    <h1 className='text-center' id='heading'>Students about AL-NISA Quran Institute</h1>
    <div className='container  my-5'>
    <div className="card-group">
        <div className="card" id='card1'>
          <div className='text-center mt-5' id='card-1-img'>
          <img src={img} className="card-img-top" alt="..." id='qqq' /></div>
          <div className="card-body">
            <h3 className="card-title text-center">Asma Hamza</h3>
            <div className='text-center'><i class="fa-sharp fa-solid fa-star"></i><i class="fa-sharp fa-solid fa-star"></i><i class="fa-sharp fa-solid fa-star"></i><i class="fa-sharp fa-solid fa-star"></i></div>
            
            <p className="card-text mt-3">My son is doing well with Online Quran learning and I think this is an effective platform for online Quran learning in the USA. Teachers provide a comfortable and friendly environment for learning as well as provide effective learning due to professional expertise. My son enjoys learning online. He is thankful to Quran academy & takes online classes every day.</p>
           
          </div>
        </div>
        <div className="card" id='card1'>
        <div className='text-center mt-5' id='card-1-img'>
          <img src={img} className="card-img-top" alt="..." id='qqq'/></div>
          <div className="card-body">
            <h3 className="card-title text-center">Iqra Ayaz</h3>
            <div className='text-center'><i class="fa-sharp fa-solid fa-star"></i><i class="fa-sharp fa-solid fa-star"></i><i class="fa-sharp fa-solid fa-star"></i><i class="fa-sharp fa-solid fa-star"></i></div>
            <p className="card-text mt-3">
Learning the Holy Quran with Tajweed &
Tafseer is always my dream. I am thankful to Online Quran learning for improving my Quran learning by Online Quran classes. 



</p>
           
          </div>
        </div>
        <div className="card" id='card1'>
        <div className='text-center mt-5' id='card-1-img'>
          <img src={img} className="card-img-top" alt="..." id='qqq'/></div>
          <div className="card-body">
            <h3 className="card-title text-center">Nazia Tabassam</h3>
            <div className='text-center'><i class="fa-sharp fa-solid fa-star"></i><i class="fa-sharp fa-solid fa-star"></i><i class="fa-sharp fa-solid fa-star"></i><i class="fa-sharp fa-solid fa-star"></i></div>
            <p className="card-text mt-3">
We are happy with Online Quran learning
and its tutors are highly professional &
fantastically teach Quran. We enjoy spending time with them. The tutors help the kids in learning as well as identifying & correcting mistakes. In classes, the last 5 minutes are about Adab.
</p>
           
          </div>
        </div>
      </div>




    </div>
    
    
    </>
  )
}

export default Review