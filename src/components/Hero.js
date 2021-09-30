import profilePic from '../images/profile_pic.png';
import '../styles/css/Hero.css';
import Social from './Social'
const Hero = ()=>{
    return (
        <div className="hero">
            <section className="about">
                <p>Welcome</p>
                <p className="designation">
                    I am <span>Full Stack Developer</span>
                </p>
                <p>
                    Working as Full Stack Developer from 2 Years.My expertise to create web apps, desktop apps, mobile apps, graphic design and many more.
                </p>
                <Social/>
            </section>
            <section className="profile_pic">
               <div className="img_container">
               <img src={profilePic} alt="Gopi Kumar Kaushik"/>
               </div>
            </section>
        </div>
    )
}

export default Hero;
