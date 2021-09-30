import React from 'react';
import Hero from './Hero';
import Navbar from './shared/Navbar';
import '../styles/css/Home.css'
const Home = () => {
    return (
        <div className="home">
            <div className="home_background">
                {/* <div className="triangle_at_corner">saf</div> */}
            </div>
            <Navbar/>
            <Hero/>
            
        </div>
    );
}

export default Home;
