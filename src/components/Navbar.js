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
        <Link to="/" className='font-bold text-xl'><h3>RKY</h3></Link>
        <div className="sag">
            <ul className={openNavbar ?  "gender active" : "gender"}>
                <li ><Link to="/" className="anasayfa">Anasayfa</Link></li>
                <li ><Link to="/Kadin" className="kadin">Kadın</Link></li>
                <li><Link to="/Erkek" className="erkek">Erkek</Link></li>
                <li><Link to="/Cocuk" className="cocuk">Çocuk</Link></li>
            </ul>
            <ul className='right'>
                <li style={{marginRight: "15px", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Link to="/Login" className='giris' style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <BsPersonFill/>
                        <p style={{fontSize: "small", margin: 0}}>Giriş yap</p>
                    </Link>        
                </li>
                <li style={{marginRight: "15px", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Link to="/Favoriler" className='giris' style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <AiFillHeart/>
                        <p style={{fontSize: "small", margin: 0}}>Favoriler</p>
                    </Link>        
                </li>
                <li style={{marginRight: "15px", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Link to="/Sepet" className='giris' style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <BsFillBagFill/>
                        <p style={{fontSize: "small", margin: 0}}>Sepetim</p>
                    </Link>        
                </li>
            </ul>
            <div className="acKapaMenu" onClick={handleClick} style={{fontSize:"larger", color:"black"}}>
                {openNavbar ? <FaTimes /> : <FaBars />}
            </div>
        </div>
    </div>
  )
}

export default Navbar