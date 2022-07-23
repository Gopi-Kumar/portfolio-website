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

export default function Certificates() {

    const certificates = [
        {name: "Responsive Web Design - Freecodecamp", img: rwdf},
        {name : "Front End Development Libraries - Freecodecamp", img:fedlf},   
        {name : "Javascript Algorithm and Data Structure - Freecodecamp", img:jadsf},
        {name :"Back End Development and APIS - Freecodecamp", img:bedaf},
        {name: "PHP - Sololearn", img: phps},
        {name :"Data Visualization - Freecodecamp", img:dvf},
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
        </div>
    )
}
