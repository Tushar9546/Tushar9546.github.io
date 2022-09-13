import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

import React from 'react';

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
          {WorkCardData.map((val, index) => {
            return (
              <WorkCard 
               key={index}
               image={val.image}
               title={val.title}
               text={val.text}
               tools={val.tools}
               view={val.view}
               code={val.code}
              />
            )
          })}
        </div>

    </div>
  )
}
export default Work;