


import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Component/Footer';


function App() {
  return (
   <>
 <Navbar />

 <Routes>
  <Route path='/' element={<Home />}></Route>
 </Routes>
<Footer />
   </>

  );
}

export default App;
