import React, { useState } from 'react';
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    }
    window.addEventListener("scroll", changeColor);

    const handleClick = () => {
        setClick(!click);
    }
  return (
    <div className={color ? "header header-bg" : "header"}>
       <Link to="/">
        <h1>Portfolio.</h1>
       </Link>
       <ul className={click ? "nav-menu active" : "nav-menu" }>
        <li>
            <Link to="/">Home</Link> 
        </li>
        <li>
           <Link to="/about">About</Link>
        </li>
        <li>
           <Link to="/skills">Skills</Link>
        </li>
        <li>
           <Link to="/project">Project</Link>
        </li>
        <li>
           <Link to="/contact">Contact</Link>
        </li>
       </ul>
       <div onClick={handleClick} className='hamburger'>
        {click ?  (<FaTimes size={20} style={{color: "#ffff"}}/>) : (<FaBars size={20} style={{color: "#ffff"}}/>) }
         
          
       </div>
    </div>
  )
}

export default Navbar

            
            
            