import React from 'react';
import "./FooterStyles.css";
import {FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub} from "react-icons/fa"

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
                <div className='social'>
                   <FaLinkedin size={20} style={{color:"#000", marginRight: "1rem"}} />
                   <FaGithub size={20} style={{color:"#000", marginRight: "1rem"}} />
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