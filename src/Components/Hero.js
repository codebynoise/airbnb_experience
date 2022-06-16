import React from "react";
import "./Hero.css"
import photo_grid from './photo-grid.png';

function Hero(){
    return(
        <section className="hero">
            <img className="photo" src={photo_grid} alt="photogrid" />
            <h1 className="header">Online Experiences</h1>
            <p className="text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>

        </section>
    )
}

export default Hero;