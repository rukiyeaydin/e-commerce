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
      <div className="img"><img src={hugeSale} alt="" className='firstImg' /></div>
      <div className="video">
        <Video autoPlay loop className='firstvideo'>
          <source src={rkyautumn} type="video/mp4" />
        </Video>
      </div>
      <div className="cards">
        <a href="/">
          <img src={cocuk} alt="" className='cardimg'/>
        </a>
        <a href="/">
          <img src={woman} alt="" className='cardimg'/>
        </a>
        <a href="/">
          <img src={man} alt="" className='cardimg'/>
        </a>
      </div>
      <div className="cards2" >
          <a href="/">
            <img src={card21} alt="" className='cardimg2'/>
          </a>
          <a href="/">
            <img src={card22} alt="" className='cardimg2'/>
          </a>
          <a href="/">
            <img src={card23} alt="" className='cardimg2'/>
          </a>
          <a href="/">
            <img src={card24} alt="" className='cardimg2'/>
          </a>
      </div>
      <div className="uygulamalar">
        <p>Mobil Uygulamamızı İndirin</p>
        <a href="/"><img src={playstore} alt="" className='store'/></a>
        <a href="/"><img src={appstore} alt="" className='store'/></a>
      </div>
    </div>
  )
}

export default Hero;