import "./AboutContentStyles.css";

import React from 'react'
import { Link } from "react-router-dom";
import tushar from "../assets/tushar.JPG"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <div className="img-container">
                <img className="img" src={tushar} alt="Tushar" />
            </div>
        </div>
        <div className="right">
            <h1>About myself</h1>
            <p>👋 I'm Tushar. Quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology. Looking forward to applying and enhancing my skills and knowledge as a developer.</p>
            <Link to="/contact">
                  <button className="btn">Contact</button>
            </Link>         
        </div>
    </div>
  )
}

export default AboutContent;
