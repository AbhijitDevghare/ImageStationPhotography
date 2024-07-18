import React, { useEffect } from 'react';
import "./FrontHomePage.css";
import logo from "../../Images/logo2.png";

function FrontHomePage() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const backgroundElement = document.getElementById('background');
      backgroundElement.style.backgroundPositionY = `${scrollTop * 0.2}px`; // Adjust the multiplier here
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="frontPage">
      <div id="background"></div>
      <img src={logo} alt="Logo" id="logo" />
      <h1 id="h1White">IMAGE STATION PHOTOGRAPHY</h1>
    </div>
  );
}

export default FrontHomePage;
