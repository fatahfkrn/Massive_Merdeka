/* eslint-disable no-unused-vars */
import React from "react";
import wa from '../assets/wa.png';
import ig from '../assets/ig.png';
import fb from '../assets/fb.png';
import web from '../assets/web.png';
import ttk from '../assets/tiktok.png';
import copyright from '../assets/copyright.png';
import '../css/Footer.css'


const Footer = () => {
    return (
        <div className="footer">
            <div className="overlap">
                <h1 className="t-info">Info lebih lanjut</h1>
                <p className="div">Jangan ragu untuk melihat akun media sosial kami</p>
            </div>
            <img className="wa icon-sosmed" src={wa} alt="" />
            <img className="ig icon-sosmed" src={ig} alt="" />
            <img className="fb icon-sosmed" src={fb} alt="" />
            <img className="web icon-sosmed" src={web} alt="" />
            <img className="ttk icon-sosmed" src={ttk} alt="" />
            <div className="group">
                <div className="grup-footer">
                    <img className="cr icon-sosmed" src={copyright} alt="" />
                    <p className="p-footer">2024 discover bulukumba. all right reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;