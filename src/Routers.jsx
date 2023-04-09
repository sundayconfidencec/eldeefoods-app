import React from 'react';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Cart from './Components/Cart';
import Home from './Screens/Home';

function Routers() {
  return (
  <BrowserRouter>

  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/cart" element={<Cart/>} />
   
  </Routes>
  </BrowserRouter>
  )
}

export default Routers;