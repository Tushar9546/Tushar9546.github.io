import "./SkillsStyles.css";
import HTML from "../assets/HTML.png";
import css from "../assets/css.png";
import Git from "../assets/Git.png";
import chakra from "../assets/chakra.svg";
import mongodb from "../assets/mongodb.svg";
import nodejs from "../assets/nodejs.svg";
import react1 from "../assets/react1.png";
import Redux from "../assets/Redux.png";
import jz from "../assets/jz.svg";

import React from 'react'

const SkillsContent = () => {
  return (
    <div className="skills-container">
        <h1>Skills</h1>
        <div className="skills-box">
            <div className="skill">
                <img className="img" src={HTML} alt=""/>
                <h3>HTML</h3>
            </div>
            <div className="skill">
               <img className="img" src={css} alt=""/>
               <h3>CSS</h3>
            </div>
            <div className="skill">
               <img className="img" src={jz} alt=""/>
               <h3>JavaScript</h3>
            </div>
            <div className="skill">
                <img className="img" src={Git} alt=""/>
                <h3>Git</h3>
            </div>
            <div className="skill">
                <img className="img" src={chakra} alt=""/>
                <h3>chakra-UI</h3>
            </div>
            <div className="skill">
                <img className="img" src={mongodb} alt=""/>
                <h3>MongoDB</h3>
            </div>
            <div className="skill">
               <img className="img" src={nodejs} alt=""/>
               <h3>NodeJs</h3>
            </div>
            <div className="skill">
                 <img className="img" src={react1} alt=""/>
                 <h3>React</h3>
            </div>
            <div className="skill">
                <img className="img" src={Redux} alt=""/>
                <h3>Redux</h3>
            </div>
        </div>
    </div>
  )
}

export default SkillsContent;