import profilePic from '../images/profile_pic.png';
import '../styles/css/Hero.css';
import Social from './Social'
import {gsap} from 'gsap'
import { useEffect } from 'react';
const Hero = ()=>{

    useEffect(() => {
        gsap.from(".about p", {
            translateY : -80,
           opacity : 0,
            duration : 0.5,
            delay :1
        })

        gsap.from(".img_container", {
           translateY : -80,
           opacity : 0,
           duration : 0.5,
           delay : 1.5
        })

        gsap.from(".social_media", {
            translateY : -80,
            opacity : 0,
            duration : 0.5,
            delay : 2
        })

    }, [])

    return (
        <div className="hero">
            <section className="about">
                <p>Welcome</p>
                <p className="designation type_this">
                    I am <span>Full Stack Developer</span>
                </p>
                <p style={{maxWidth:"400px"}} >
                    Working as Full Stack Developer from 2 Years.My expertise to create web apps, desktop apps, mobile apps, graphic design and many more.
                </p>
                <Social/>
            </section>
            <section className="profile_pic">
               <div className="img_container">
               <img id="profile_pic" src={profilePic} alt="Gopi Kumar Kaushik"/>
               </div>
            </section>
        </div>
    )
}

export default Hero;
