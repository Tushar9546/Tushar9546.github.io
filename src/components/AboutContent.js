import "./AboutContentStyles.css";

import React from 'react'
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
            <p>👋 I'm Tushar. Quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology. Looking forward to apply and enhance my skills and knowledge as a developer.</p>
            <a href="./Tushar_Resume.pdf" download>
                  <button className="btn">Download CV</button>
            </a>         
        </div>
    </div>
  )
}

export default AboutContent;
