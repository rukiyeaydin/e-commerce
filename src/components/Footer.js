import React from 'react';
import "./Footer.css";
import {BsFillTelephoneFill} from "react-icons/bs";
import {FaWpforms} from "react-icons/fa";
import {BsWhatsapp} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
        <div className="first">
            <span style={{fontWeight:"bolder", fontSize:"large"}}>RKY FASHION</span>
            <div className="phone">
                <BsFillTelephoneFill style={{marginRight: "10px", fontSize: "large"}}/>
                <p style={{fontWeight:"bold"}}>0555 000 00 00</p>
            </div>
        </div>
        <div className="second">
            <p style={{fontWeight:"700"}}>RKY Destek</p>
            <div className="form" style={{display:"flex", marginTop:"10px"}}>
                <FaWpforms style={{marginRight: "10px", fontSize: "large"}}/>
                <p>İletişim Formu</p>
            </div>
            <div className="wp" style={{display:"flex"}}>
                <BsWhatsapp style={{marginRight: "10px", fontSize: "large"}}/>
                <p>Whatsapp Destek</p>
            </div>
        </div>
        <div className="third">
            <p style={{fontWeight:"700"}}>Yardım</p>
            <p>Sıkça sorulan Sorular</p>
            <p>İade ve Değişim</p>
            <p>Kullanım Koşulları</p>
        </div>
        <div className="fourth">
            <p style={{fontWeight:"700"}}>Kurumsal</p>
            <p>Hakkımızda</p>
            <p>Mağazalarımız</p>
            <p>Kariyer Fırsatları</p>
        </div>
        <div className="fifth">
            <p style={{fontWeight:"700"}}>Politikalar</p>
            <p>Aydınlatma Metni</p>
            <p>Veri Gizliliği ve Güvenliği Politikası</p>
        </div>
    </div>
  )
}

export default Footer
