import React from 'react'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
import Navbar from '../components/Navbar'
import SkillsContent from '../components/SkillsContent'

const Skills = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="SKILLS." text="I have experience with these technologies" />
      <SkillsContent />
      <Footer />
    </div>
  )
}

export default Skills