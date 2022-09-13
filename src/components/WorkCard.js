import "./WorkCardStyles.css";

import React from 'react';
import pro1 from "../assets/pro1.png";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.image} alt="project" />
        <h2 className="project-title">{props.title}</h2>
        <h3>Tools:</h3>
        <p className="project-title">{props.tools}</p>
        <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
                <a href={props.view}> <button className="btn"> View Project </button> </a> 
                <a href={props.code}> <button className="btn"> Source Code </button></a>
            </div>
        </div>
    </div>
  )
}
export default WorkCard