import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import "./About.css";

// Import your images
import photographerImage from "../../Images/photographer.jpg";
import LogoComp from '../LogoComp/LogoComp';

const About = () => {
    return (
        <>  

        <LogoComp/>

        <div className="about-page">
            <div className="header">
                <h1>About Me</h1>
            </div>
            <div className="content">
                <div className="intro">
                    <img src={photographerImage} alt="Photographer" className="photographer-image" />
                    <br /><br />
                    <p>Hello! I'm Swapnil Waghmare, the creative photographer behind Image Station Photography. With a passion for capturing moments that tell stories, I strive to create timeless memories through my lens.</p>
                </div>
                <div className="details">
                    <p><strong>Name:</strong> Swapnil Waghmare</p>
                    <p><strong>Email:</strong> <a href="mailto:swapnilwaghmare@gmail.com"><FaEnvelope /> swapnilwaghmare@gmail.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+919371687850"><FaPhone /> +91 9371687850</a></p>
                    <p><strong>Instagram:</strong> <a href="https://www.instagram.com/image_station_photography/" target="_blank" rel="noopener noreferrer">Image Station Photography</a></p>
                </div>
                <div className="philosophy">
                    <h2>My Photography Philosophy</h2>
                    <p>I believe in capturing authentic moments and emotions. Whether it's a joyful celebration, a serene landscape, or a personal portrait, each photograph tells a unique story. My goal is to create images that resonate and leave a lasting impression.</p>
                </div>
                <div className="contact">
                    <h2>Let's Connect</h2>
                    <p>Thank you for visiting my website! I'm excited to work with you and capture your special moments. Feel free to reach out via email, phone, or connect with me on Instagram.</p>
                    <p>Looking forward to creating beautiful memories together!</p>
                </div>
            </div>
        </div>

        </>   );
}

export default About;
