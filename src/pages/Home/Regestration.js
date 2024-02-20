import React from 'react'
import "../../pages/Home/Regestration.css"
import { Link } from 'react-router-dom'
function Regestration() {
  return (
   <>
   <div className='fff'>
    <div className='mb-5'>a</div>
    <div className='container text-center  mt-5' id='text'>Would you like to <br />
learn Quran online with </div>
     <div className='text-center mt-4' id='institute-name'>AL-NISA Quran Institute<br />
     
     <Link to="/regrestration" className='btn btn-info' id='link'>Register Now</Link>
     </div>
     
     </div>
   
   
   
   </>
  )
}

export default Regestration