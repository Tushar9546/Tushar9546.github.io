import React from 'react';
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2';
import Navbar from '../components/Navbar'
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="PROJECTS." text="Some of 
        my most recent works" />
        <Work />
      <Footer />
    </div>
  )
}

export default Project