import React from 'react';
import Navbar from '../components/Navbar';
import Herokadin from '../components/Herokadin';
import Footer from "../components/Footer";
import data from "../components/Data";
import { useState } from 'react';

const Kadin = () => {

  const { productItems } = data;
  const [favorites, setFavorites] = useState([]);

  return (
    <div>
      <Navbar/>
      <Herokadin productItems={productItems} setFavorites={setFavorites} favorites={favorites}/>
      <Footer/>
    </div>
  )
}

export default Kadin
