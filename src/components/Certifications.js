import Navbar from './shared/Navbar';
import '../styles/css/certificates.css';
import React from 'react'
import { useState } from 'react';

import fedlf from '../images/cert/fedlf.png'
import bedaf from '../images/cert/bedaf.png'
import dvf from '../images/cert/dvf.png'
import phps from '../images/cert/pphs.jpg'
import rwdf from '../images/cert/rwdf.png'
import jadsf from '../images/cert/jadsf.png'
import exgl from '../images/cert/exgl.png'
import NextPage from './shared/NextPage';
import statsgl from '../images/cert/statsgl.png';
import anagoogle from '../images/cert/anagoogle.png'
import statigl from '../images/cert/statsgl.png'
import timemg from '../images/cert/timemg.png'
import uigl from '../images/cert/uigl.png'

export default function Certificates() {

    const certificates = [

        {name: "Responsive Web Design - Freecodecamp", img: rwdf},
        {name: "UI/UX Designing - Great Learning" ,img : uigl},
        {name : "Front End Development Libraries - Freecodecamp", img:fedlf},   
        {name : "Javascript Algorithm and Data Structure - Freecodecamp", img:jadsf},
        {name :"Back End Development and APIS - Freecodecamp", img:bedaf},
        {name: "PHP - Sololearn", img: phps},
        {name :"Data Visualization - Freecodecamp", img:dvf},
        {name: "Statstics for Machine Leanring - Great Learning" , img: statigl},
        {name: "Software Testing - Great Learning", img: statsgl},
        {name : "Google Analytics - Google", img: anagoogle},
        {name: "Excel for Intermediate Level - Great Learning", img:exgl},
        {name : "Time Management - Great Learning", img: timemg} 

        
    ]
    
    const [src, setSrc] = useState(certificates[0].img)

    return (
        <div className="certificates">
            <Navbar/>
            <div className="certificates_container">
                <div className="img">
                    <img src={src} alt="" />
                </div>
                <div className="list">
                   {certificates.map(cert => {
                     return <section className="button" key={Math.random()} onClick={e => setSrc(cert.img)}>{cert.name}</section>
                   })}
                </div>
            </div>
            <NextPage page={"home"}/>
        </div>
    )
}
