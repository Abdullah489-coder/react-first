import React from 'react'
import "../../Pages/Home/FreeTrail.css"

function FreeTrail() {
  return (
    <>
    <div className='my-5 container text-center'>
<h1 className='heading fs-1'>Try your free Trial Class today</h1>


    </div>
   <div className='container  bg-dark text-light '>
    
    <form className='mt-5'>
    <div class="container mt-5">
  <div class="row mt-5">
    <div class="col-md-4">
    <div className='col mt-5'>
      <label for="validationCustom01" class="form-label">Enter Name</label>
    <input type="text" class="form-control" id="validationCustom01"  required />
      </div>
    </div>
    <div class="col-md-4">
    <div class="col mt-5 ">
    <label for="exampleInputEmail1" class="form-label">Enter Email </label>
   
    <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
    </div>
    <div class="col-md-4">
    <div class="col mt-5">
    <label for="validationDefault01" class="form-label">Enter Number</label>
    <input type="phone-number" class="form-control" id="validationDefault01"  required/>
  </div>
    </div>
  </div>
</div>
      
     
  
  <div class="mb-3 mt-5">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className='text-center '>
<button type="submit" class="btn btn-primary col-3 my-4" id='btn1'>Submit</button></div>
    </form>
    </div>
    </>
  )
}

export default FreeTrail