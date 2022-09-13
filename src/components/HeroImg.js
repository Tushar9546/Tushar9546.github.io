import React from 'react';
import "./HeroImgStyles.css";
import cover3 from "../assets/cover3.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
           <img className='intro-img' src={cover3} alt="cover" />
        </div>
        <div className='content'>
              <h1>Hi, I am TUSHAR</h1>
              <h3>An Aspiring Full stack Web developer.</h3>
              <div>
                  <Link to="/project" className="btn">Projects</Link>
                  <Link to="/contact" className="btn btn-light">Contact</Link>
              </div>
        </div>
        
    </div>
  )
}

export default HeroImg