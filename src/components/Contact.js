import Navbar from './shared/Navbar';
import '../styles/css/contact.css';
import Message from './Message'
import React from 'react'
import Social from './Social'
export default function Contact() {
    return (
        <div className="contact">
            {/* <Navbar/> */}
            <div className="contact_container">
                <Message/>
                <Social/>
            </div>
        </div>
    )
}
