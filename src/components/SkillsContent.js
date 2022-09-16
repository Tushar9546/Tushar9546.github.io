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
import GitHubCalendar from 'react-github-calendar';


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

        

        <div id="statistics">
          <div className="main-stat" > 
            <div >
              <h1 >STATISTICS</h1>
            </div>
  
            <div className="stacistics-container">
              <div className="stacistics-box" >
                <div className="individualStat">
                  <div>1200+</div>
                  <div><h3>Hours</h3> of Full Stack Coding</div>
                </div>
    
                <div className="individualStat">
                  <div >240+</div>
                  <div><h3>DSA</h3>Problems</div>
                </div>
    
                <div className="individualStat">
                  <div>210+</div>
                  <div><h3>Git</h3>Commits</div>
                </div>
    
                <div className="individualStat">
                  <div >20+</div>
                  <div><h3>Projects</h3>Done</div>
                </div>
    
                
                <div className="individualStat">
                  <div>100+</div>
                  <div><h3>Hours</h3> of Soft Skills Sessions</div>
                </div>

              </div>
            </div>
          </div>
        </div>


        <div className="github-calendar">
          <GitHubCalendar className="github-calendar-live" username="Tushar9546"  style={{color:"black",margin:"auto",marginTop:"30px"}} />
        </div>
        

         
    </div>
  )
}

export default SkillsContent;