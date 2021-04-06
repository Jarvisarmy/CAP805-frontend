import React from 'react'
import homepic from '../img/17149167.jpg'
const Home = () => {
    return (
        <div className="grid grid-col2-home">  
              
        <div className="intro">
        <p className="intro-heading">GAMING NEVER DIES!!! <br/>The Best Games out here...</p>Welcome to our Web Hosting website. This is a platform for Game developers to publish their games to the whole wide world. 
        Signup for free and upload your games. Those who want to play games can go to the Games section and play for free.</div>
        <div className=""> <img src= {homepic} width="100%"  alt=""></img></div>
           
        </div>
    )
}

export default Home
