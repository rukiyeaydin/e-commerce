import React from 'react';
import hugeSale from "../images/hugeSale.png";
import "./Hero.css";
import { DefaultPlayer as Video } from 'react-html5video';
import rkyautumn from "../images/rkyautumn.mp4";
import cocuk from "../images/cocuk.png";
import woman from "../images/woman.png";
import man from "../images/man.png";
import "react-html5video/dist/styles.css";
import card21 from "../images/card21.png";
import card22 from "../images/card22.png";
import card23 from "../images/card23.png";
import card24 from "../images/card24.png";
import playstore from "../images/playstore.webp";
import appstore from "../images/appstore.webp";

const Hero = () => {
  return (
    <div className="hero">
      <a className="img" href='/Kadin'><img src={hugeSale} alt="" className='firstImg' /></a>
      <div className="video">
        <Video autoPlay loop className='firstvideo'>
          <source src={rkyautumn} type="video/mp4" />
        </Video>
      </div>
      <div className="cards">
        <a href="/Cocuk">
          <img src={cocuk} alt="" className='cardimg '/>
        </a>
        <a href="/Kadin">
          <img src={woman} alt="" className='cardimg'/>
        </a>
        <a href="/Erkek">
          <img src={man} alt="" className='cardimg'/>
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-7/12 gap-1 border-blue-600 md:w-7/12 sm:w-7/12" >
            <img src={card21} alt="" className='cardimg2'/>
            <img src={card22} alt="" className='cardimg2'/>
            <img src={card23} alt="" className='cardimg2'/>
            <img src={card24} alt="" className='cardimg2'/>
      </div>
      <div className="my-16">
        <p>Mobil Uygulamamızı İndirin</p>
        <div className="flex">
          <a href="https://play.google.com/store/games?device=phone" target="_blank"><img src={playstore} alt="" className='store'/></a>
          <a href="https://www.apple.com/tr/app-store/" target="_blank"><img src={appstore} alt="" className='store'/></a>
        </div>
      </div>
    </div>
  )
}

export default Hero;