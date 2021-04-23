import React from 'react'
import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';
import AddGame from '../components/AddGame.js';
import './../css/ProfilePage.css';

const ContactPage = () => {
    return (
        <div>
        <Header/>
        <Navigation/>
        <p className="contact-info">zeduo zhang: 142248202</p>
        <p className="contact-info">Gauthaman Gnanasekaran: 131204208</p>
        <p className="contact-info">Sinu Mathews: 132200205</p>
        </div>
    )
}

export default ContactPage