import React from 'react';
import Hero from './Hero';
import Navbar from './shared/Navbar';
import '../styles/css/Home.css'

const Home = () => {
    return (
        <div className="home" style={{ display: 'block' }}>
     


            <Navbar />
            <Hero />

        </div>
    );
}

export default Home;
