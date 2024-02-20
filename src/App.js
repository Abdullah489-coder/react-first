


import './App.css';

import Header from './Component/Header';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import whatsapp from "./Images/whatsapp.jpg"
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
   <>
  <div className='whatsapp-float'>
    <a href='https://wa.me/+923129176057' target='blank'>
    <img src={whatsapp} alt='' className='whatsapp'/>
    </a>
  
  </div>
   <Header />
   
<Routes>
<Route path='/' element={<Home />}></Route>
  <Route path='/About' element={<About />}></Route>
 
</Routes>
   
   </>

  );
}

export default App;
