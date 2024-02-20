import React from 'react'
import "../../pages/Home/Home.css"
import Card from '../../Component/Card.js';
import WhyChoseUs from './WhyChoseUs.js';
import Reviews from './Reviews.js';
import Slider from './Slider.js';
import Regestration from './Regestration.js';
import Footer from '../../Component/Footer.js';
import Hero from './Hero.js';
function Home() {
  return (
    <div>
  <Slider />  
  <Hero />
       <Card />
       <Regestration />
        <WhyChoseUs />
      <Reviews />
      <Footer />
    </div>
  )
}

export default Home