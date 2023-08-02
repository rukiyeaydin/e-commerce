import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import {BsPersonFill, BsFillBagFill} from "react-icons/bs";
import {AiFillHeart} from "react-icons/ai";

const Navbar = () => {
  const[openNavbar, SetOpenNavbar] = useState(false);
  const handleClick = () => SetOpenNavbar(!openNavbar);

  return (
    <div className="navbar">
        <Link to="/" className='navbar-logo'><h3>RKY</h3></Link>
        <div className="sag">
            <ul className={openNavbar ?  "gender active" : "gender"}>
                <li ><Link to="/" className="anasayfa">Anasayfa</Link></li>
                <li ><Link to="/Kadin" className="kadin">Kadın</Link></li>
                <li><Link to="/" className="erkek">Erkek</Link></li>
                <li><Link to="/" className="cocuk">Çocuk</Link></li>
            </ul>
            <ul className='right'>
                <li style={{marginRight: "15px"}}>
                    <Link to="/" className='giris' style={{ textDecoration: "none" }}>
                        <BsPersonFill/>
                        <p style={{fontSize: "small"}}>Giriş yap</p>
                    </Link>        
                </li>
                <li style={{marginRight: "15px"}}>
                    <Link to="/" className='favoriler' style={{ textDecoration: "none" }}>
                        <AiFillHeart/>
                        <p style={{fontSize: "small"}}>Favoriler</p>
                    </Link> 
                </li>
                <li>
                    <Link to="/" className='sepetim' style={{ textDecoration: "none" }}>
                        <BsFillBagFill/>
                        <p style={{fontSize: "small"}}>Sepetim</p>
                    </Link> 
                </li>
            </ul>
            <div className="acKapaMenu" onClick={handleClick} style={{fontSize:"larger", color:"purple"}}>
                {openNavbar ? <FaTimes /> : <FaBars />}
            </div>
        </div>
    </div>
  )
}

export default Navbar