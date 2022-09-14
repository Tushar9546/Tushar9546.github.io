import React from 'react'
import AboutContent from '../components/AboutContent';
import Footer from '../components/Footer'
import { Form } from '../components/Form';
import HeroImg from '../components/HeroImg'
import Navbar from '../components/Navbar'
import SkillsContent from '../components/SkillsContent';
import Work from '../components/Work';
import { TimeLineComponent } from '../components/TimeLineComponent';
import "./AboutStyles.css";

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroImg />
        <AboutContent />
        <div className="timeline" data-aos = 'fade-in' data-aos-offset="300" data-aos-duration="1000">
                <h1 className="timeLine__h1">{`Work Experience & Education`}</h1>
                    <TimeLineComponent/>
        </div>
        <SkillsContent />
        <Work />
        <Form />
        <Footer />
    </div>
  )
}

export default Home