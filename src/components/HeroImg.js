import React from 'react';
import "./HeroImgStyles.css";
import cover from "../assets/cover.jpg";
import intro from "../assets/intro.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
           <img className='intro-img' src={intro} alt="cover" />
        </div>
        <div className='content'>
              <h3>A Full stack developer.</h3>
              <h1>Hi, I am TUSHAR</h1>
              <div>
                  <Link to="/project" className="btn">Projects</Link>
                  <Link to="/contact" className="btn btn-light">Contact</Link>
              </div>
        </div>
        
    </div>
  )
}

export default HeroImg