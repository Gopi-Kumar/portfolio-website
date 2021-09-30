import React, { useState } from 'react';
import '../styles/css/contact.css';
function Message() {
    let endpoint = "https://letter-box.heroku.com";
    let [name,setName] = useState("");
    let [message,setMessage] = useState("");
    let [email,setEmail] = useState("");
    const handleSubmit = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "name": name,
        "email": email,
        "message": message
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(`${endpoint}/postletter/gopi`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
    return (
        <div className="message">
            <h1>Message Us</h1>
            <div className="message__form">
                <div className="info">
                    <div className="name">
                        <label htmlFor="input_name">Name: </label>
                        <input onChange = {(e)=>{setName(e.target.value)}} type="text" id="input_name"/>
                    </div>
                    <div className="email">
                        <label htmlFor="input_email">Email:</label>
                        <input onChange = {(e)=>{setEmail(e.target.value)}} type="email" id="input_email" />
                    </div>
                </div>
                <div className="message">
                    <label htmlFor="message">Enter your Message: </label>
                    <textarea onChange = {(e)=>{setMessage(e.target.value)}} id="message" cols="30" rows="10"></textarea>
                </div>
                <button  className="button" onClick={handleSubmit} value="Send message">Send Message</button>
            </div>
        </div>
    )
}

export default Message