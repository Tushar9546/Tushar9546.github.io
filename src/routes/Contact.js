import React from 'react';import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2';
import Navbar from '../components/Navbar'


const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="CONTACT." text="Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
Simply fill the from and send me an email." />
      <Footer />
    </div>
  )
}

export default Contact