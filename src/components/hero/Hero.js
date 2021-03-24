import React from 'react';
import HERO from "../images/HERO.png";
import "./Hero.css";



const Hero = () => {
    return (
        <div >

            <img src={HERO} className="hero" alt="hero" />
        </div>


    );
}

export default Hero;
