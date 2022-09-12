import React from 'react';
import "./FooterStyles.css";
import {FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub} from "react-icons/fa"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                   <FaHome size={20} style={{color:"#000", marginRight: "2rem"}} />
                   <div>
                     <p>
                      muzaffarnagar, Uttar Pradesh
                    </p>
                   </div>
                </div>
                <div className='phone'>
                    <h4>
                        <FaPhone size={20} style={{color:"#000", marginRight: "2rem"}} />
                        +91-7217409546
                    </h4>
                </div>
                <div className='email'>
                    <h4>
                        <FaMailBulk size={20} style={{color:"#000", marginRight: "2rem"}} />
                        tyagit911@gmail.com
                    </h4>
                </div>
            </div>
            <div className='right'>
                <h4>Tushar's Portfolio</h4>
                <p>Thank You for visiting my personal portfolio website. If you want to ask me any thing then please free to ask. Connect with me over any social handles</p>
                <div className='social'>
                   <a href='https://www.linkedin.com/in/tushar-tyagi-5ba071222z/'><FaLinkedin size={20} style={{color:"#000", marginRight: "1rem"}} /></a>
                   <a href='https://github.com/Tushar9546'><FaGithub size={20} style={{color:"#000", marginRight: "1rem"}} /></a>
                </div>
            </div>
        </div>
        <div className='creater'>
            <h5>Created By Tushar Tyagi</h5>
        </div>
    </div>
    
  )
}

export default Footer