import React from 'react'
import AboutContent from '../components/AboutContent'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
import Navbar from '../components/Navbar'
import { TimeLineComponent } from '../components/TimeLineComponent'
import "./AboutStyles.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="ABOUT." text="👋 I'm Tushar. An Aspiring Full Stack Web Developer"/>
      <AboutContent />
      <div className="timeline" data-aos = 'fade-in' data-aos-offset="300" data-aos-duration="1000">
                <h1 className="timeLine__h1">{`Work Experience & Education`}</h1>
                    <TimeLineComponent/>
      </div>
      <Footer />
    </div>
  )
}

export default About