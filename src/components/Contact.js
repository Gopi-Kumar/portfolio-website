import React from 'react';
import Navbar from './shared/Navbar';
import '../styles/css/contact.css';
import NextPage from './shared/NextPage';
const Contact = () => {
    return (
        <div className="contact">
            <Navbar />
            <div className="contact_container">
                <div className="contact_content">
                    <div className="contact_message">
                        <h2>Let's Build Something Amazing Together! 🚀</h2>

                        <div className="fun_message">
                            <p>Looking for a developer who:</p>
                            <ul>
                                <li>✨ Turns complex ideas into clean, functional code</li>
                                <li>🎨 Designs user interfaces that are as stunning as they are intuitive</li>
                                <li>🐛 Hunts down bugs like a seasoned detective</li>
                                <li>💡 Brings creativity and innovation to every project</li>
                                <li>🎯 Delivers high-quality results on time (yes, really!)</li>
                            </ul>
                            <p className="highlight">Guess what? You've just found your perfect blend of developer and designer!</p>
                        </div>


                        <div className="contact_details">
                            <div className="contact_item">
                                <i className="fa fa-envelope"></i>
                                <span>gkkaushik9065@gmail.com</span>
                            </div>
                            <div className="contact_item">
                                <i className="fa fa-phone"></i>
                                <span>+919065565303</span>
                            </div>
                            <div className="contact_item">
                                <i className="fa fa-map-marker"></i>
                                <span>Patna, Bihar, India</span>
                            </div>
                        </div>

                        <div className="cta_message">
                            <p>Whether you have a project in mind or just want to chat about tech, I'm always excited to connect!</p>
                            <p className="availability">Currently available for freelance & full-time opportunities</p>
                        </div>
                    </div>
                </div>
            </div>
            <NextPage page="home"/>
        </div>
    );
};

export default Contact;